import { Component, Event, EventEmitter, Prop, Element, Host, h } from '@stencil/core'
import { applySpacingStyles, applyPositionStyles } from '../../utils/layout'

@Component({
  tag: 'z-dialog',
  styleUrl: '../../global/overlay.scss',
  shadow: true,
})
export class Dialog {
  @Prop() m: string
  @Prop() mt: string
  @Prop() mb: string
  @Prop() mr: string
  @Prop() ml: string
  @Prop() position: 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'
  @Prop() hideCloseButton: boolean
  @Prop() overlayColor: string
  @Prop() overlayOpacity: string
  @Prop() disableOverlayClose: boolean
  @Prop() contentWidth: string
  @Prop() contentHeight: string

  @Event() close: EventEmitter
  @Element() root: HTMLElement

  getRealRoot() {
    const parentRoot = (this.root.parentNode as ShadowRoot).host

    // IF this dialog is nested inside a z-drawer return the drawer OTHERWISE this dialog
    if (parentRoot && ['Z-DRAWER'].includes(parentRoot.tagName)) {
      return parentRoot
    } else {
      return this.root
    }
  }

  componentWillLoad() {
    document.body.append(this.getRealRoot())
  }

  render() {
    const CloseButton = () => {
      const closeButton = this.getRealRoot().querySelector('z-close-button')
      if (this.hideCloseButton) {
        closeButton && closeButton.remove()
      } else {
        return !closeButton && <z-close-button>x</z-close-button>
      }
    }

    return (
      <Host style={applyPositionStyles(this)}>
        <div
          class="overlay"
          style={{ background: this.overlayColor, opacity: this.overlayOpacity }}
          onClick={() => !this.disableOverlayClose && this.close.emit()}
        ></div>
        <div class="content" style={{ ...applySpacingStyles(this), height: this.contentHeight, width: this.contentWidth }}>
          <slot />
          <CloseButton />
        </div>
      </Host>
    )
  }
}

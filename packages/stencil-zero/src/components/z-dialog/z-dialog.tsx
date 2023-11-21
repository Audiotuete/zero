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
  @Prop() position: 'top-left' | 'top' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom' | 'bottom-right'
  @Prop() disableOverlayClose: boolean
  @Prop() hideCloseButton: boolean

  @Event() close: EventEmitter
  @Element() root: HTMLElement

  componentWillLoad() {
    document.body.append(this.root)
  }

  render() {
    const CloseButtonSlot = () => {
      if (!this.hideCloseButton) {
        const hasSlotCloseButton = !!this.root.querySelector('[slot="close-button"]')
        return hasSlotCloseButton ? <slot name="close-button" /> : <z-close-button></z-close-button>
      }
    }

    return (
      <Host style={applyPositionStyles(this)}>
        <div class="overlay" onClick={() => !this.disableOverlayClose && this.close.emit()}></div>
        <div class="content" style={applySpacingStyles(this)}>
          <slot />
          <CloseButtonSlot />
        </div>
      </Host>
    )
  }
}

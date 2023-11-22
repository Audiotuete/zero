import { Component, Event, EventEmitter, State, Prop, Element, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-popover',
  styleUrl: 'z-popover.scss',
  shadow: true,
})
export class Popover {
  @Prop() m: string
  @Prop() mt: string
  @Prop() mb: string
  @Prop() mr: string
  @Prop() ml: string
  @Prop() position:
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'auto-start'
    | '	auto'
    | 'auto-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'left-start'
    | 'left'
    | 'left-end'
    | 'right-start'
    | 'right'
    | 'right-end'

  @Prop() hideCloseButton: boolean

  @Event() close: EventEmitter
  @Element() root: HTMLElement

  @State() isActive: boolean

  getRealRoot() {
    const parentRoot = (this.root.parentNode as ShadowRoot).host

    // IF this dialog is nested inside a z-drawer return the drawer OTHERWISE return this dialog
    if (parentRoot && ['Z-DRAWER'].includes(parentRoot.tagName)) {
      return parentRoot
    } else {
      return this.root
    }
  }

  componentDidLoad() {
    this.isActive = true
  }

  applyPopoverStyles(props) {
    const popoverPositionMap = {
      'top-start': { bottom: '100%', left: 0 },
      'top-center': { bottom: '100%', left: '50%', transform: 'translate(-50%, 0)' },
      'top-end': { bottom: '100%', right: 0 },
      'bottom-start': { top: '100%', left: 0 },
      'bottom-center': { top: '100%', left: '50%', transform: 'translate(-50%, 0)' },
      'bottom-end': { top: '100%', right: 0 },
      // 'auto-start': '',
      // 'auto-center': '',
      // 'auto-end': '',
      'left-start': { right: '100%', top: 0 },
      'left-center': { right: '100%', top: '50%', transform: 'translate(0, -50%)' },
      'left-end': { right: '100%', bottom: 0 },
      'right-start': { left: '100%', top: 0 },
      'right-center': { left: '100%', top: '50%', transform: 'translate(0, -50%)' },
      'right-end': { left: '100%', bottom: 0 },
    }

    return { ...popoverPositionMap[props.position], display: this.isActive ? 'block' : 'none' }
  }

  togglePopover() {
    this.isActive = !this.isActive
    console.log(this.isActive)
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
      <Host onClick={this.togglePopover.bind(this)}>
        <slot />
        <div class="content" style={{ ...applySpacingStyles(this), ...this.applyPopoverStyles(this) }}>
          Hello
          <CloseButton />
        </div>
      </Host>
    )
  }
}

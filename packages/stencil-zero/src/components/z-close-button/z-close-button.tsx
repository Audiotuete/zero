import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-close-button',
  styleUrl: 'z-close-button.scss',
  shadow: true,
})
export class Checkbox {
  @Prop() m: string
  @Prop() p: string

  @Event() close: EventEmitter

  render() {
    return (
      <Host style={applySpacingStyles(this)}>
        <button class="close-btn" onClick={() => this.close.emit()}>
          <slot></slot>
        </button>
      </Host>
    )
  }
}

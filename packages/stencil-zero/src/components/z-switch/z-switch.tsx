import { Component, Prop, Element, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-switch',
  styleUrl: 'z-switch.scss',
  shadow: true,
})
export class Switch {
  @Prop({ mutable: true, reflect: true }) value: boolean
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  @Element() root: HTMLElement

  toggleSwitch() {
    this.value = !this.value
    this.root.dispatchEvent(new Event('change'))
  }

  render() {
    return (
      <Host onClick={this.toggleSwitch.bind(this)} style={applySpacingStyles(this)}>
        <div class="switch-background">
          <div class="switch-knob"></div>
        </div>
      </Host>
    )
  }
}

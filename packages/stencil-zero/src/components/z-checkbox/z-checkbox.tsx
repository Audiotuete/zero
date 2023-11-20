import { Component, Prop, Element, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-checkbox',
  styleUrl: 'z-checkbox.scss',
  shadow: true,
})
export class Checkbox {
  @Prop({ mutable: true, reflect: true }) value: string
  @Prop({ mutable: true, reflect: true }) checked: boolean
  @Prop() m: string
  @Prop() p: string

  @Element() root: HTMLElement

  toggleCheckbox() {
    this.checked = !this.checked

    this.root.dispatchEvent(new Event('change'))
  }

  render() {
    return (
      <Host style={applySpacingStyles(this)}>
        <label>
          <input onChange={this.toggleCheckbox.bind(this)} checked={this.checked} type="checkbox" value={this.value} />
          <slot />
        </label>
      </Host>
    )
  }
}

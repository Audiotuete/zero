import { Component, Prop, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-tab-nav',
  shadow: false,
})
export class TabNav {
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  render() {
    return (
      <Host style={{ ...applySpacingStyles(this) }}>
        <slot></slot>
      </Host>
    )
  }
}

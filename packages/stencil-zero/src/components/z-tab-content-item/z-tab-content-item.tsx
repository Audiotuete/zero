import { Component, Prop, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-tab-content-item',
  shadow: false,
})
export class TabContentItem {
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

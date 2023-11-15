import { Component, Prop, Host, h } from '@stencil/core'

import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-list-item',
})
export class ListItem {
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  render() {
    return (
      <Host role="listitem" style={applySpacingStyles(this)}>
        <slot />
      </Host>
    )
  }
}

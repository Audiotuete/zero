import { Component, Prop, Host, h } from '@stencil/core'

import { applySpaceStyles } from '../../utils/layout'

@Component({
  tag: 'z-list-item',
})
export class ListItem {
  @Prop() m: string
  @Prop() p: string

  render() {
    return (
      <Host role="listitem" style={applySpaceStyles(this)}>
        <slot />
      </Host>
    )
  }
}

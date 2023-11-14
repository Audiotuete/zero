import { Component, Prop, Host, h } from '@stencil/core'

import { applySpaceStyless } from '../../utils/layout'
import { SpaceStyles } from '../../types/layout'

@Component({
  tag: 'z-list-item',
})
export class ListItem {
  @Prop() spaceStyles: SpaceStyles

  render() {
    return (
      <Host role="listitem" style={applySpaceStyless(this.spaceStyles)}>
        <slot />
      </Host>
    )
  }
}

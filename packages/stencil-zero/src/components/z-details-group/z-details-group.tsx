import { Component, Prop, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-details-group',
  styleUrl: 'z-details-group.css',
  shadow: true,
})
export class DetailsGroup {
  @Prop() gap: string
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  render() {
    return (
      <Host style={{ ...applySpacingStyles(this, 'flex'), gap: this.gap }}>
        <slot />
      </Host>
    )
  }
}

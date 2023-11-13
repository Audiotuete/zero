import { Component, Prop, Host, h } from '@stencil/core'
import { styleBoxWithProps } from '../../utils/box'

@Component({
  tag: 'z-list-item',
})
export class ListItem {
  @Prop() m?: string
  @Prop() mt?: string
  @Prop() mb?: string
  @Prop() mr?: string
  @Prop() ml?: string
  @Prop() p?: string
  @Prop() pt?: string
  @Prop() pb?: string
  @Prop() pr?: string
  @Prop() pl?: string

  render() {
    return (
      <Host role="listitem" style={styleBoxWithProps(this)}>
        <slot />
      </Host>
    )
  }
}

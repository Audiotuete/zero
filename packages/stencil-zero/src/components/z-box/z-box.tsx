import { Component, Prop, State, Element, Host, h } from '@stencil/core'
import { assignRole, applyBoxStyless, enableColoredBoxes } from '../../utils/layout'

import { BoxStyles } from '../../types/layout'

@Component({
  tag: 'z-box',
  styleUrl: '../../global/box.css',
  shadow: true,
})
export class Box {
  @Prop() name: string
  @Prop() as: string
  @Prop() boxStyles: BoxStyles

  @State() boxColor: string
  @Element() root: HTMLElement

  componentWillLoad() {
    this.boxColor = enableColoredBoxes(this)
  }

  render() {
    return (
      <Host role={assignRole(this.as)} style={applyBoxStyless(this.boxStyles)}>
        <slot />
        {this.name && (
          <span role="none" class="box-label" style={{ color: this.boxColor }}>
            {this.name}
          </span>
        )}
      </Host>
    )
  }
}

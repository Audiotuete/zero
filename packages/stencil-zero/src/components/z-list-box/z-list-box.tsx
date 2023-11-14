import { Component, Prop, State, Element, Host, h } from '@stencil/core'
import { applyBoxStyless, enableColoredBoxes } from '../../utils/layout'

import { BoxStyles } from '../../types/layout'

@Component({
  tag: 'z-list-box',
  styleUrls: ['../../global/box.css'],
  shadow: true,
})
export class ListBox {
  @Prop() name: string
  @Prop() boxStyles: BoxStyles

  @State() boxColor: string
  @Element() root: HTMLElement

  componentWillLoad() {
    this.boxColor = enableColoredBoxes(this)
  }

  render() {
    return (
      <Host role="list" style={applyBoxStyless(this.boxStyles)}>
        <slot></slot>
        {this.name && (
          <span role="none" class="box-label" style={{ color: this.boxColor }}>
            {this.name}
          </span>
        )}
      </Host>
    )
  }
}

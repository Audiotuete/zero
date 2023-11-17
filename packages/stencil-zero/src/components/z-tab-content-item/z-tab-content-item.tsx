import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-content-item',
  styleUrl: 'z-tab-content-item.css',
  shadow: true,
})
export class TabContentItem {
  render() {
    return <slot></slot>
  }
}

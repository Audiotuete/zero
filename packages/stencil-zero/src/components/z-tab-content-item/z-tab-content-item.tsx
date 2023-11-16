import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-content-item',
  shadow: false,
})
export class TabContentItem {
  render() {
    return <slot></slot>
  }
}

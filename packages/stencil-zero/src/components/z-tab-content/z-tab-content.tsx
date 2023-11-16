import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-content',
  styleUrl: 'z-tab-content.css',
  shadow: false,
})
export class TabContent {
  render() {
    return <slot></slot>
  }
}

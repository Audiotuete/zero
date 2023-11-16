import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-nav-item',
  styleUrl: 'z-tab-nav-item.css',
  shadow: false,
})
export class TabNavItem {
  render() {
    return <slot></slot>
  }
}

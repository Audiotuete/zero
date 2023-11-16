import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-nav-item',
  styleUrl: 'z-tab-nav-item.css',
  shadow: true,
})
export class TabNavItem {
  render() {
    return <slot></slot>
  }
}

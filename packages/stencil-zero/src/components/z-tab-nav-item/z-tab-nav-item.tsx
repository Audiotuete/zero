import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-nav-item',
  styleUrl: 'z-tab-nav-item.scss',
  shadow: true,
})
export class TabNavItem {
  render() {
    return <slot />
  }
}

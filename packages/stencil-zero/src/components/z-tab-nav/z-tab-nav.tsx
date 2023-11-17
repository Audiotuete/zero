import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-nav',
  styleUrl: 'z-tab-nav.css',
  shadow: true,
})
export class TabNav {
  render() {
    return <slot></slot>
  }
}

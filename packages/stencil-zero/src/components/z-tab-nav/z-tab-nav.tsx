import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-nav',
  styleUrl: 'z-tab-nav.css',
  shadow: false,
})
export class TabNav {
  render() {
    return <slot></slot>
  }
}

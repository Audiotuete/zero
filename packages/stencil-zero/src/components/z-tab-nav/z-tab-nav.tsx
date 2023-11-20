import { Component, h } from '@stencil/core'

@Component({
  tag: 'z-tab-nav',
  styleUrl: 'z-tab-nav.scss',
  shadow: true,
})
export class TabNav {
  render() {
    return <slot />
  }
}

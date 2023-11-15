import { Component, Element, Host, Prop, State, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

import { TabData } from './z-tabs.d'

@Component({
  tag: 'z-tabs',
  shadow: false,
})
export class Tabs {
  @Prop() data: TabData[]
  @Prop() defaultTabIndex = 0

  @State() tabIndex = this.defaultTabIndex

  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  @Element() root: HTMLElement

  mockTabData = [
    // { id: 'fruit', name: 'Fruit', component: <z-box background="red"></z-box> },
    // { id: 'veggies', name: 'Veggies', component: <z-box background="yellow"></z-box> },
    // { id: 'meat', name: 'Meat', component: <z-box background="green"></z-box> },
    // { id: 'juicy', name: 'Juice', component: <z-box background="blue"></z-box> },
  ]

  tabNav: Element
  tabNavItems: Element[]
  tabContent: Element
  tabContentItems: Element[]
  usingSlots = false

  componentWillLoad() {
    if (this.root.firstElementChild) {
      this.usingSlots = true

      this.tabNav = document.getElementsByTagName('Z-TAB-NAV')[0]
      this.tabNavItems = Array.from(this.tabNav.children)

      this.tabContent = document.getElementsByTagName('Z-TAB-CONTENT')[0]
      this.tabContentItems = [...Array.from(this.tabContent.children)]
      this.tabContent.remove()
    }
  }

  handleClick(idx) {
    this.tabIndex = idx
  }

  render() {
    const Tabs = () => {
      if (this.mockTabData.length && !this.usingSlots) {
        return (
          <Host style={{ ...applySpacingStyles(this) }}>
            <z-tab-nav>
              {this.mockTabData.map((navItem, idx) => {
                return (
                  <z-tab-nav-item key={navItem.id} onClick={() => this.handleClick(idx)}>
                    {navItem.name}
                  </z-tab-nav-item>
                )
              })}
            </z-tab-nav>

            <z-tab-content>
              <z-tab-content-item>{this.mockTabData[this.tabIndex].component}</z-tab-content-item>
            </z-tab-content>
          </Host>
        )
      } else if (this.usingSlots) {
        return (
          <Host style={{ ...applySpacingStyles(this) }}>
            {console.log('What up')}
            {this.tabNavItems.map((navItem: HTMLElement, idx) => {
              navItem.onclick = () => {
                this.handleClick(idx)
              }
            })}
            <z-tab-content
              ref={el => {
                if (el) {
                  el.innerHTML = ''
                  el.appendChild(this.tabContentItems[this.tabIndex].cloneNode(true))
                }
              }}
            />
          </Host>
        )
      } else {
        return <Host style={{ ...applySpacingStyles(this) }}>No tab data provided </Host>
      }
    }

    return <Tabs />
  }
}

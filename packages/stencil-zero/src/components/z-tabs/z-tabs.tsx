import { Component, Element, Host, Prop, State, h } from '@stencil/core'
// import { applySpacingStyles } from '../../utils/layout'

import { TabData } from './z-tabs.d'

@Component({
  tag: 'z-tabs',
  styleUrl: 'z-tabs.css',
  shadow: false,
})
export class Tabs {
  @Prop() data: TabData[]
  @Prop() selectedTabIndex = 0

  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  @Prop() vertical: boolean
  @Prop() contentWidth: string
  @Prop() contentHeight: string
  @Prop() navItemsWidth: string
  @Prop() navItemsFit: boolean

  @State() tabIndex = this.selectedTabIndex
  @Element() root: HTMLElement

  mockTabData = [
    { id: 'fruit', name: 'Fruit & Cake', component: <z-box w="200px" h="200px" background="red"></z-box> },
    { id: 'veggies', name: 'Veggies', component: <z-box w="500px" h="100px" background="yellow"></z-box> },
    { id: 'meat', name: 'Meat', component: <z-box w="100px" h="500px" background="green"></z-box> },
    { id: 'juicy', name: 'Juice', component: <z-box w="1200px" h="1200px" background="blue"></z-box> },
  ]

  navNode: any
  navItemNodes: any
  contentNode: any
  contentItemNodes: any
  isUsingSlot = false

  componentWillLoad() {
    if (this.root.firstElementChild) {
      this.isUsingSlot = true

      this.navNode = document.getElementsByTagName('Z-TAB-NAV')[0]
      this.navItemNodes = Array.from(this.navNode.children)
      this.contentNode = document.getElementsByTagName('Z-TAB-CONTENT')[0]
      this.contentItemNodes = [...Array.from(this.contentNode.children)]

      this.contentNode.remove()
    }
  }

  componentDidLoad() {
    this.navNode = document.getElementsByTagName('Z-TAB-NAV')[0]
    this.navItemNodes = Array.from(this.navNode.children)

    this.navItemNodes[this.tabIndex].classList.add('selected')

    if (this.vertical) {
      this.navNode.style.flexDirection = 'column'
      this.root.style.flexDirection = 'row'
    }

    if (this.navItemsFit || this.navItemsWidth) {
      this.navItemNodes.map(item => {
        this.navItemsFit && !this.vertical && item.classList.add('fit')
        this.navItemsFit && this.contentWidth && !this.vertical && (this.navNode.style.maxWidth = this.contentWidth)
        this.navItemsWidth && (!this.navItemsFit || this.vertical) && (item.style.minWidth = this.navItemsWidth)
      })
    }

    if (this.contentWidth || this.contentHeight) {
      this.contentNode = document.getElementsByTagName('Z-TAB-CONTENT')[0]
      this.contentWidth && (this.contentNode.style.minwWidth = this.contentWidth)
      this.contentWidth && (this.contentNode.style.maxWidth = this.contentWidth)
      this.contentHeight && (this.contentNode.style.minHeight = this.contentHeight)
      this.contentHeight && (this.contentNode.style.maxHeight = this.contentHeight)
    }
  }

  selectTab(navItemNode, idx) {
    this.navItemNodes.forEach(item => {
      item.classList.remove('selected')
    })
    navItemNode.classList.add('selected')
    this.tabIndex = idx
  }

  render() {
    const Tabs = () => {
      if (this.mockTabData.length && !this.isUsingSlot) {
        return (
          <Host>
            <z-tab-nav>
              {this.mockTabData.map((navItem, idx) => {
                return (
                  <z-tab-nav-item key={navItem.id} onClick={event => this.selectTab(event.target, idx)}>
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
      } else if (this.isUsingSlot) {
        return (
          <Host>
            {this.navItemNodes.map((navItem: HTMLElement, idx) => {
              navItem.onclick = event => {
                this.selectTab(event.target, idx)
              }
            })}
            <z-tab-content
              style={{ minWidth: this.contentWidth, maxWidth: this.contentWidth, minHeight: this.contentHeight, maxHeight: this.contentHeight }}
              ref={el => {
                if (el) {
                  el.innerHTML = ''

                  el.appendChild(this.contentItemNodes[this.tabIndex].cloneNode(true))
                }
              }}
            />
          </Host>
        )
      } else {
        return <Host>No tab data provided </Host>
      }
    }

    return <Tabs />
  }
}

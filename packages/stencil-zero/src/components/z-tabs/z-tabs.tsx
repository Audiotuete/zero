import { Component, Element, Host, Prop, State, h } from '@stencil/core'

@Component({
  tag: 'z-tabs',
  styleUrl: 'z-tabs.scss',
  scoped: true,
})
export class Tabs {
  @Prop() activeTabIndex = 0

  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  @Prop() vertical: boolean
  @Prop() contentWidth: string
  @Prop() contentHeight: string
  @Prop() navItemsWidth: string
  @Prop() navItemsFit: boolean

  @State() tabIndex = this.activeTabIndex
  @Element() root: HTMLElement

  navNode: any
  navItemNodes: any
  hasSlotNav = false

  contentNode: any
  contentItemNodes: any
  hasSlotContent = false

  setupNavRefs(checkForSlot = false) {
    this.navNode = document.getElementsByTagName('Z-TAB-NAV')[0]
    this.navItemNodes = this.navNode && Array.from(this.navNode.children)
    if (checkForSlot) {
      this.hasSlotNav = this.navNode ? true : false
    }
  }

  setupContentRefs() {
    this.contentNode = document.getElementsByTagName('Z-TAB-CONTENT')[0]
    this.hasSlotContent = this.contentNode ? true : false
    this.contentItemNodes = this.hasSlotContent && Array.from(this.contentNode.children)
  }

  applyLayoutStyles() {
    if (this.vertical && this.navNode) {
      this.root.style.flexDirection = 'row'
      this.navNode.style.flexDirection = 'column'
    }
  }

  applyNavStyles() {
    if ((this.navItemsFit || this.navItemsWidth) && this.navItemNodes.length) {
      this.navItemNodes.map(item => {
        this.navItemsFit && !this.vertical && item.classList.add('fit')
        this.navItemsFit && this.contentWidth && !this.vertical && (this.navNode.style.maxWidth = this.contentWidth)
        this.navItemsWidth && (!this.navItemsFit || this.vertical) && (item.style.minWidth = this.navItemsWidth)
      })
      this.navItemNodes[this.tabIndex].classList.add('active')
      this.contentItemNodes[this.tabIndex].classList.add('active')
    }
  }

  applyContentStyles() {
    if ((this.contentWidth || this.contentHeight) && this.contentNode) {
      this.contentNode = document.getElementsByTagName('Z-TAB-CONTENT')[0]
      this.contentWidth && (this.contentNode.style.minWidth = this.contentWidth)
      this.contentWidth && (this.contentNode.style.maxWidth = this.contentWidth)
      this.contentHeight && (this.contentNode.style.minHeight = this.contentHeight)
      this.contentHeight && (this.contentNode.style.maxHeight = this.contentHeight)
    }
  }

  selectTab(idx) {
    this.navItemNodes.forEach(item => {
      item.classList.remove('active')
    })
    this.contentItemNodes.forEach(item => {
      item.classList.remove('active')
    })
    this.navItemNodes[idx].classList.add('active')
    this.contentItemNodes[idx].classList.add('active')
    this.tabIndex = idx
  }

  componentWillLoad() {
    this.setupNavRefs(true)
    this.setupContentRefs()
  }

  componentDidLoad() {
    this.setupNavRefs(false)

    this.applyLayoutStyles()
    this.applyNavStyles()
    this.applyContentStyles()
  }

  render() {
    const TabNav = () => {
      if (this.hasSlotNav) {
        this.navItemNodes.map((navItem: HTMLElement, idx) => {
          navItem.onclick = () => {
            this.selectTab(idx)
          }
        })
      } else if (this.hasSlotContent) {
        return (
          <z-tab-nav>
            {this.contentItemNodes.map((contentItem: HTMLElement, idx) => {
              if (contentItem.hasAttribute('name')) {
                return <z-tab-nav-item onClick={() => this.selectTab(idx)}>{contentItem.getAttribute('name')}</z-tab-nav-item>
              }
            })}
          </z-tab-nav>
        )
      }
    }

    return (
      <Host>
        <TabNav />
        <slot />
      </Host>
    )
  }
}

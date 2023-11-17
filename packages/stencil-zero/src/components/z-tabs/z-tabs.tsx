import { Component, Element, Host, Prop, State, h } from '@stencil/core'

@Component({
  tag: 'z-tabs',
  styleUrl: 'z-tabs.css',
  shadow: false,
})
export class Tabs {
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
    this.contentItemNodes = this.hasSlotContent && [...Array.from(this.contentNode.children)]
    this.hasSlotContent && this.contentNode.remove()
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
      this.navItemNodes[this.tabIndex].classList.add('selected')
    }
  }

  applyContentStyles() {
    if ((this.contentWidth || this.contentHeight) && this.contentNode) {
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
          navItem.onclick = event => {
            this.selectTab(event.target, idx)
          }
        })
      } else if (this.hasSlotContent) {
        return (
          <z-tab-nav>
            {this.contentItemNodes.map((navItem: HTMLElement, idx) => {
              if (navItem.hasAttribute('name')) {
                return <z-tab-nav-item onClick={event => this.selectTab(event.target, idx)}>{navItem.getAttribute('name')}</z-tab-nav-item>
              }
            })}
          </z-tab-nav>
        )
      }
    }

    const TabContent = () => {
      if (this.hasSlotContent) {
        return (
          <z-tab-content
            style={{ minWidth: this.contentWidth, maxWidth: this.contentWidth, minHeight: this.contentHeight, maxHeight: this.contentHeight }}
            ref={el => {
              if (el) {
                el.innerHTML = ''
                el.appendChild(this.contentItemNodes[this.tabIndex].cloneNode(true))
              }
            }}
          />
        )
      } else {
        return <span>No tab data provided</span>
      }
    }

    return (
      <Host>
        <TabNav />
        <TabContent />
      </Host>
    )
  }
}

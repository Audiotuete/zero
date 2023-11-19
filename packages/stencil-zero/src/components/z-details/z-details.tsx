import { Component, Prop, Element, State, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-details',
  styleUrl: 'z-details.css',
  shadow: true,
})
export class Details {
  @Prop() summary: string
  @Prop() spacingTop: string
  @Prop() spacingBottom: string
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  @Element() root: HTMLElement

  hasIconCollapsedSlot: boolean
  hasIconExpandedSlot: boolean

  @State() isExpanded = false

  componentWillLoad() {
    this.hasIconCollapsedSlot = !!this.root.querySelector('[slot="icon-collapsed"]')
    this.hasIconExpandedSlot = !!this.root.querySelector('[slot="icon-expanded"]')
  }

  toggleDetails() {
    const contentNode = this.root.shadowRoot.lastElementChild as HTMLElement

    if (this.hasAttribute('accordion')) {
      this.collapseAllDetails()
    }
    if (!!contentNode.classList.contains('active')) {
      contentNode.classList.remove('active')
      this.isExpanded = false
    } else {
      contentNode.classList.add('active')
      this.isExpanded = true
    }
  }

  hasAttribute(attribute) {
    return !!this.root.parentElement.hasAttribute(attribute)
  }

  collapseAllDetails() {
    const detailsNodesList = Array.from(this.root.parentElement.children)
    detailsNodesList.forEach(item => {
      const contentNode = item.shadowRoot.lastElementChild as HTMLElement
      contentNode.classList.remove('active')
    })
  }

  render() {
    const Icon = () => {
      if (!this.hasAttribute('accordion')) {
        return [
          this.hasIconCollapsedSlot ? (
            <div class={{ icon: true, show: !this.isExpanded }}>
              <slot name="icon-collapsed" />
            </div>
          ) : (
            <div class={{ icon: true, show: !this.isExpanded }}>+</div>
          ),
          this.hasIconExpandedSlot ? (
            <div class={{ icon: true, show: this.isExpanded }}>
              <slot name="icon-expanded" />
            </div>
          ) : (
            <div class={{ icon: true, show: this.isExpanded }}>-</div>
          ),
        ]
      }
    }

    return (
      <Host style={applySpacingStyles(this, 'flex')}>
        <div onClick={() => this.toggleDetails()} class="summary">
          {this.summary}
          <Icon />
        </div>
        <div class="details">
          <slot />
        </div>
      </Host>
    )
  }
}

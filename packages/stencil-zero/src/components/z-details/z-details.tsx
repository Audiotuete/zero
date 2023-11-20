import { Component, Prop, Element, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-details',
  styleUrl: 'z-details.scss',
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

  @Prop({ reflect: true }) isExpanded: boolean

  componentWillLoad() {
    this.hasIconCollapsedSlot = !!this.root.querySelector('[slot="icon-collapsed"]')
    this.hasIconExpandedSlot = !!this.root.querySelector('[slot="icon-expanded"]')
  }

  toggleDetails() {
    if (this.root.parentElement.hasAttribute('accordion')) {
      this.collapseAllDetails()
    }

    if (this.root.hasAttribute('is-expanded')) {
      this.root.removeAttribute('is-expanded')
    } else {
      this.root.setAttribute('is-expanded', '')
    }
  }

  collapseAllDetails() {
    const detailsList = Array.from(this.root.parentElement.children)
    detailsList.forEach(item => {
      if (item !== this.root) {
        item.removeAttribute('is-expanded')
      }
    })
  }

  render() {
    const Icon = () => {
      return [
        this.hasIconCollapsedSlot ? (
          <div class="icon-collapsed">
            <slot name="icon-collapsed" />
          </div>
        ) : (
          <div class="icon-collapsed">+</div>
        ),
        this.hasIconExpandedSlot ? (
          <div class="icon-expanded">
            <slot name="icon-expanded" />
          </div>
        ) : (
          <div class="icon-expanded">-</div>
        ),
      ]
    }

    return (
      <Host class="host" style={applySpacingStyles(this, 'flex')}>
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

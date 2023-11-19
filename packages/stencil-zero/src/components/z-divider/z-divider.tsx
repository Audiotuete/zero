import { Component, Prop, Element, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-divider',
  styleUrl: 'z-divider.css',
  shadow: true,
})
export class Divider {
  @Prop() vertical: boolean
  @Prop() contentPosition: string
  @Prop() dividerExpansion: string
  @Prop() dividerThickness: string
  @Prop() dividerColor: string
  @Prop() dividerStyle: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  @Element() root: HTMLElement

  render() {
    const Content = () =>
      // Check if slot is needed
      this.root.innerHTML && (
        <div class="content">
          <slot />
        </div>
      )

    const leftOrTopPos = this.contentPosition ? { flex: `${Number(this.contentPosition)}` } : { flex: '100' }
    const rightOrBottomPos = this.contentPosition ? { flex: `${100 - Number(this.contentPosition)}` } : { flex: '100' }

    const expansionPercent = this.dividerExpansion ? `${this.dividerExpansion}%` : '100%'
    const borderStyles = { borderColor: this.dividerColor, borderStyle: this.dividerStyle, borderWidth: this.dividerThickness }

    const Horizontal = () => {
      return (
        <Host style={{ ...applySpacingStyles(this, 'flex'), flexDirection: 'row', width: expansionPercent }}>
          <div class="border" style={{ ...leftOrTopPos, ...borderStyles }} />
          <Content />
          <div class="border" style={{ ...rightOrBottomPos, ...borderStyles }} />
        </Host>
      )
    }

    const Vertical = () => {
      return (
        <Host style={{ ...applySpacingStyles(this, 'flex'), flexDirection: 'column', minHeight: expansionPercent }}>
          <div class="border vertical" style={{ ...leftOrTopPos, ...borderStyles }} />
          <Content />
          <div class="border vertical" style={{ ...rightOrBottomPos, ...borderStyles }} />
        </Host>
      )
    }

    return this.vertical ? <Vertical /> : <Horizontal />
  }
}

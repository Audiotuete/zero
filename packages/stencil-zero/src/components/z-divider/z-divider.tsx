import { Component, Prop, Element, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-divider',
  styleUrl: 'z-divider.css',
  shadow: true,
})
export class Divider {
  @Prop() fontSize: string
  @Prop() color: string

  // Spacing Styles
  @Prop() m: string
  @Prop() p: string
  @Prop() vertical: boolean

  @Prop() dividerExpansion: string
  @Prop() dividerThickness: string
  @Prop() dividerColor: string
  @Prop() dividerStyle: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset'

  @Prop() contentPosition: string

  @Element() root: HTMLElement

  render() {
    const leftOrTop = this.contentPosition ? { flex: `${Number(this.contentPosition)}` } : { flex: '100' }
    const rightOrBottom = this.contentPosition ? { flex: `${100 - Number(this.contentPosition)}` } : { flex: '100' }

    const Content = () =>
      this.root.innerHTML && (
        <div class="content">
          <slot></slot>
        </div>
      )

    const expansionPercent = this.dividerExpansion ? `${this.dividerExpansion}%` : '100%'
    const borderStyles = { borderColor: this.dividerColor, borderStyle: this.dividerStyle, borderWidth: this.dividerThickness }

    const Horizontal = () => {
      const hostStyles = { flexDirection: 'row', width: expansionPercent }
      return (
        <Host style={{ ...hostStyles, ...applySpacingStyles(this) }}>
          <div class="border" style={{ ...leftOrTop, ...borderStyles }} />
          <Content></Content>
          <div class="border" style={{ ...rightOrBottom, ...borderStyles }} />
        </Host>
      )
    }

    const Vertical = () => {
      const hostStyles = { flexDirection: 'column', minHeight: expansionPercent }

      return (
        <Host style={{ ...hostStyles, ...applySpacingStyles(this) }}>
          <div class="border vertical" style={{ ...leftOrTop, ...borderStyles }} />
          <Content></Content>
          <div class="border vertical" style={{ ...rightOrBottom, ...borderStyles }} />
        </Host>
      )
    }

    return this.vertical ? <Vertical></Vertical> : <Horizontal></Horizontal>
  }
}

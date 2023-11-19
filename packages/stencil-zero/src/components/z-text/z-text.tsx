import { Component, Host, Prop, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-text',
  shadow: true,
})
export class Text {
  @Prop() fontSize: string
  @Prop() color: string
  @Prop() textAlign: 'center' | 'right' | 'left' | 'justify'
  @Prop() transform: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'
  @Prop() hyphens: boolean
  @Prop() lineHeight: string
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  render() {
    return (
      <Host style={applySpacingStyles(this)}>
        <p
          style={{
            margin: '0',
            color: this.color,
            fontSize: this.fontSize,
            lineHeight: this.lineHeight,
            hyphens: this.hyphens ? 'auto' : 'none',
            textAlign: this.textAlign,
            textTransform: this.transform,
          }}
        >
          <slot />
        </p>
      </Host>
    )
  }
}

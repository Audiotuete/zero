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
  @Prop() inline: boolean
  @Prop() hyphens: boolean
  @Prop() lineHeight: string
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  renderAs() {
    return this.inline ? 'span' : 'p'
  }

  hyphenate() {
    return this.hyphens ? 'auto' : 'none'
  }

  render() {
    const TextTag = this.renderAs()

    const displayType: object = this.inline ? { display: 'inline' } : { display: 'block' }

    return (
      <Host style={{ ...displayType, ...applySpacingStyles(this) }}>
        <TextTag
          class="text"
          style={{
            margin: '0',
            color: this.color,
            fontSize: this.fontSize,
            lineHeight: this.lineHeight,
            hyphens: this.hyphenate(),
            textAlign: this.textAlign,
            textTransform: this.transform,
          }}
        >
          <slot></slot>
        </TextTag>
      </Host>
    )
  }
}

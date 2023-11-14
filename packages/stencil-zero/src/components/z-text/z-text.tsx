import { Component, Host, Prop, h } from '@stencil/core'

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

  renderAs() {
    return this.inline ? 'span' : 'p'
  }

  hyphenate() {
    return this.hyphens ? 'auto' : 'none'
  }

  render() {
    const TextTag = this.renderAs()

    return (
      <Host style={this.inline ? { display: 'inline' } : { display: 'block' }}>
        <TextTag
          class="text"
          style={{
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

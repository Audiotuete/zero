import { Component, Prop, Host, h } from '@stencil/core'

@Component({
  tag: 'z-heading',
  styleUrl: 'z-heading.css',
  shadow: true,
})
export class Heading {
  @Prop() level!: '1' | '2' | '3' | '4' | '5' | '6'
  @Prop() fontSize: string
  @Prop() color: string
  @Prop() href: string
  @Prop() targetBlank: boolean
  @Prop() spacingTop: string
  @Prop() spacingBottom: string

  render() {
    const HeadingTag = `h${this.level}`

    return (
      <Host>
        <HeadingTag
          style={{
            fontSize: this.fontSize,
            color: this.color,
            marginTop: this.spacingTop,
            marginBottom: this.fontSize && !this.spacingBottom ? (parseInt(this.fontSize) / 2).toString() + 'rem' : this.spacingBottom,
          }}
        >
          {this.href ? (
            <a href={this.href} target={this.targetBlank && '_blank'} style={{ color: this.color }}>
              <slot></slot>
            </a>
          ) : (
            <slot></slot>
          )}
        </HeadingTag>
      </Host>
    )
  }
}

import { Component, Host, Prop, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-button',
  styleUrl: 'z-button.scss',
  shadow: true,
})
export class Button {
  @Prop() loading: boolean
  @Prop() disabled: boolean
  @Prop() type: string
  @Prop() href: string
  @Prop() targetBlank: boolean
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  render() {
    const LoadingSvg = () => this.loading && <slot name="loading-svg" />

    const Slots = () => {
      return [
        <LoadingSvg />,
        <slot name="icon-left" />,
        <span>
          <slot />
        </span>,
        <slot name="icon-right" />,
      ]
    }

    const ButtonTag = () => {
      if (this.href) {
        return (
          <a href={this.href} target={this.targetBlank && '_blank'}>
            <Slots />
          </a>
        )
      } else {
        return (
          <button type={this.type}>
            <Slots />
          </button>
        )
      }
    }

    return (
      <Host class={{ disabled: this.disabled }} style={applySpacingStyles(this)}>
        <ButtonTag></ButtonTag>
      </Host>
    )
  }
}

import { Component, Prop, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

@Component({
  tag: 'z-aspect-ratio',
  styleUrl: 'z-aspect-ratio.css',
  shadow: false,
})
export class AspectRatio {
  @Prop() ratio!: string
  @Prop() maxWidth: string
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  calculatePaddingTop = () => {
    const [w, h] = this.ratio.split(':').map(v => parseInt(v))
    return { paddingTop: (h / w) * 100 + '%' }
  }

  render() {
    return (
      <Host style={{ maxWidth: this.maxWidth, display: 'block', ...applySpacingStyles(this) }}>
        <div class="zero-aspect-ratio-container-inner" style={this.calculatePaddingTop()}>
          <slot />
        </div>
      </Host>
    )
  }
}

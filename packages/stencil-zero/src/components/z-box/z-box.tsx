import { Component, Prop, State, Element, Host, h } from '@stencil/core'
import { assignRole, applyBoxStyles, enableColoredBoxes } from '../../utils/layout'

@Component({
  tag: 'z-box',
  styleUrl: '../../global/box.scss',
  shadow: true,
})
export class Box {
  @Prop() name: string
  @Prop() as: string
  @Prop() h: string
  @Prop() w: string
  @Prop() m: string
  @Prop() mt: string
  @Prop() mb: string
  @Prop() mr: string
  @Prop() ml: string
  @Prop() p: string
  @Prop() pt: string
  @Prop() pb: string
  @Prop() pr: string
  @Prop() pl: string
  @Prop() flex: string
  @Prop() row: boolean
  @Prop() block: boolean
  @Prop() justify: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  @Prop() align: 'center' | 'flex-start' | 'flex-end'
  @Prop() gap: string
  @Prop() rowGap: string
  @Prop() columnGap: string
  @Prop() wrap: boolean
  @Prop() border: string
  @Prop() borderWidth: string
  @Prop() borderStyle: string
  @Prop() borderColor: string
  @Prop() borderRadius: string
  @Prop() cursor: string
  @Prop() pointerEvents: string
  @Prop() zIndex: string
  @Prop() boxShadow: string
  @Prop() background: string

  @State() boxColor: string
  @Element() root: HTMLElement

  componentWillLoad() {
    this.boxColor = enableColoredBoxes(this)
  }

  render() {
    return (
      <Host role={assignRole(this.as)} style={applyBoxStyles(this)}>
        <slot />
        {this.name && (
          <span role="none" class="box-label" style={{ color: this.boxColor }}>
            {this.name}
          </span>
        )}
      </Host>
    )
  }
}

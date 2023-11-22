import { Component, Prop, Element, Host, h } from '@stencil/core'
import { applyPositionStyles } from '../../utils/layout'

@Component({
  tag: 'z-drawer',
  shadow: true,
})
export class Drawer {
  @Prop() position: 'top' | 'right' | 'bottom' | 'left'
  @Prop() drawerWidth: string = '20vw'
  @Prop() drawerHeight: string = '30vh'
  @Prop() overlayColor: string
  @Prop() overlayOpacity: string
  @Prop() hideCloseButton: boolean

  // @Event() close: EventEmitter
  @Element() root: HTMLElement

  render() {
    const positionWithDefault = this.position ? this.position : 'right'

    const drawerWidth = ['top', 'bottom'].includes(positionWithDefault) ? '100vw' : this.drawerWidth
    const drawerHeight = ['right', 'left'].includes(positionWithDefault) ? '100vh' : this.drawerHeight

    return (
      <Host>
        <z-dialog
          m="0"
          contentWidth={drawerWidth}
          contentHeight={drawerHeight}
          overlayColor={this.overlayColor}
          overlayOpacity={this.overlayOpacity}
          hideCloseButton={this.hideCloseButton}
          style={applyPositionStyles({ position: positionWithDefault })}
        >
          <slot></slot>
        </z-dialog>
      </Host>
    )
  }
}

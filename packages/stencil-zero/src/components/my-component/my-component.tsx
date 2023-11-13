import { Component, Prop, h } from '@stencil/core'
import { format } from '../../utils/utils'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string

  /**
   * The middle name
   */
  @Prop() middle: string

  /**
   * The last name
   */
  @Prop() last: string

  private getText(): string {
    return format(this.first, this.middle, this.last)
  }

  render() {
    //   const Content = () => {
    //     return [
    //       <slot></slot>,
    //       this.name && (
    //         <span role="none" class="box-label" style={{ color: this.boxColor }}>
    //           {this.name}
    //         </span>
    //       ),
    //     ]
    //   }

    return <div>Hello, World! I'm {this.getText()}</div>
  }
}

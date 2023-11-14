import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'z-highlight',
  shadow: true,
})
export class Highlight {
  @Prop() fontSize: string
  @Prop() color: string
  @Prop() transform: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana'

  @Prop() bold: boolean // <strong>
  @Prop() italic: boolean // <em>
  @Prop() code: boolean // <code>
  @Prop() strike: boolean // <s>
  @Prop() underline: boolean // <u>
  @Prop() sup: boolean // <sup>
  @Prop() sub: boolean // <sub>
  @Prop() mark: boolean // <mark>

  mapPropsToTags = properties => {
    const tagMap: any = {
      bold: 'strong',
      italic: 'em',
      code: 'code',
      strike: 's',
      underline: 'u',
      sup: 'sup',
      sub: 'sub',
      mark: 'mark',
    }

    const tags = []
    for (let prop in properties) {
      if (typeof properties[prop] == 'boolean') {
        properties[prop] && tags.push(tagMap[prop])
      }
    }
    return tags
  }

  nestSlot(tags: string[]) {
    if (tags.length > 0) {
      return h(tags.shift(), null, this.nestSlot(tags))
    } else {
      return (
        <span style={{ color: this.color, fontSize: this.fontSize, textTransform: this.transform }}>
          <slot></slot>
        </span>
      )
    }
  }

  render() {
    const WrappedSlot = () => {
      return this.nestSlot(this.mapPropsToTags(this))
    }

    return <WrappedSlot></WrappedSlot>
  }
}

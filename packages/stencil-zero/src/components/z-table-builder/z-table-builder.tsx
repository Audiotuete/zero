import { Component, Prop, Host, h } from '@stencil/core'
import { applySpacingStyles } from '../../utils/layout'

import { Option } from './z-table-builder.d'

@Component({
  tag: 'z-table-builder',
  styleUrl: 'z-table-builder.scss',
  shadow: true,
})
export class TableBuilder {
  @Prop() data!: [] | Array<string[]>
  @Prop() options?: Option[]
  // Spacing Styles
  @Prop() m: string
  @Prop() p: string

  digForValue(row: any, keys: string[]): string {
    if (keys.length > 1) {
      return this.digForValue(row[keys.shift()!], keys)
    } else {
      return row[keys[0]]
    }
  }

  render() {
    const is2DArray = this.data && Object.prototype.toString.call(this.data[0]) == '[object Array]'
    const isJsonArray = this.data && Object.prototype.toString.call(this.data[0]) == '[object Object]'

    // Check if data prop is 2D array
    if (is2DArray) {
      const arrayHeaders = this.data[0]
      const arrayRows = this.data.slice(1)
      // If options prop is defined display table according to options
      if (this.options) {
        const headerIndexes = this.options.map(({ key }) => {
          return arrayHeaders.indexOf(key)
        })
        return (
          <Host style={applySpacingStyles(this)}>
            {headerIndexes.length != 0 && arrayRows.length != 0 && (
              <table>
                <tr>
                  {this.options.map(({ name }) => (
                    <th>{name}</th>
                  ))}
                </tr>
                {arrayRows.map(row => (
                  <tr>
                    {headerIndexes.map(idx => (
                      <td>{row[idx]}</td>
                    ))}
                  </tr>
                ))}
              </table>
            )}
          </Host>
        )
        // If options prop is NOT defined display everything in 2D array
      } else {
        return (
          <Host style={applySpacingStyles(this)}>
            <table>
              <tr>{arrayHeaders && arrayHeaders.map(header => <th>{header}</th>)}</tr>
              {arrayRows.map(row => (
                <tr>
                  {row.map(value => (
                    <td>{value}</td>
                  ))}
                </tr>
              ))}
            </table>
          </Host>
        )
      }
      // Check if data prop is  JSON array
    } else if (isJsonArray) {
      // If options prop is defined display table according to options
      if (this.options) {
        return (
          <Host style={applySpacingStyles(this)}>
            {this.options.length != 0 && this.data.length != 0 && (
              <table>
                <tr>
                  {this.options.map(({ name, width }) => (
                    <th style={{ width: width }}>{name}</th>
                  ))}
                </tr>
                {this.data.map(row => (
                  <tr>
                    {this.options.map(({ key, width }) => (
                      <td style={{ width: width }}>{this.digForValue(row, key.split('.'))}</td>
                    ))}
                  </tr>
                ))}
              </table>
            )}
          </Host>
        )
        // If options prop is NOT defined display everything in JSON array and warn about nested elements
      } else {
        return (
          <Host style={applySpacingStyles(this)}>
            <table>
              <tr>
                {Object.keys(this.data[0]).map(key => (
                  <th>{key}</th>
                ))}
              </tr>
              {this.data.map(row => (
                <tr>
                  {Object.values(row).map(value =>
                    typeof value != 'object' ? <td>{value}</td> : <td style={{ color: 'red' }}>Object: use options dot notation</td>,
                  )}
                </tr>
              ))}
            </table>
          </Host>
        )
      }
      // Display "No data found" message
    } else {
      return (
        <Host style={applySpacingStyles(this)}>
          <div id="no-data-msg">No data found</div>
        </Host>
      )
    }
  }
}

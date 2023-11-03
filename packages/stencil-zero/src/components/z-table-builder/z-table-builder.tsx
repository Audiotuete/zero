import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'z-table-builder',
  styleUrl: 'z-table-builder.css',
  shadow: true,
})
export class TableBuilder {
  @Prop() json?: [];
  @Prop() tableHeaders?: [];

  digForValue(row: any, keys: string[]): string {
    if (keys.length > 1) {
      return this.digForValue(row[keys.shift()!], keys);
    } else {
      return row[keys[0]];
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>
        {this.tableHeaders.length != 0 && this.json.length != 0 && (
          <table style={{ textAlign: 'left' }}>
            <tr>{this.tableHeaders && this.tableHeaders.map(({ name }) => <th>{name}</th>)}</tr>
            {this.json.map(row => (
              <tr>
                {this.tableHeaders.map(({ key }: { key: string }) => (
                  <td>{this.digForValue(row, key.split('.'))}</td>
                ))}
              </tr>
            ))}
          </table>
        )}
      </Host>
    );
  }
}

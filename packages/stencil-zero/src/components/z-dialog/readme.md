# z-dialog



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description | Type                                                                                                                 | Default     |
| --------------------- | ----------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- | ----------- |
| `contentHeight`       | `content-height`        |             | `string`                                                                                                             | `undefined` |
| `contentWidth`        | `content-width`         |             | `string`                                                                                                             | `undefined` |
| `disableOverlayClose` | `disable-overlay-close` |             | `boolean`                                                                                                            | `undefined` |
| `hideCloseButton`     | `hide-close-button`     |             | `boolean`                                                                                                            | `undefined` |
| `m`                   | `m`                     |             | `string`                                                                                                             | `undefined` |
| `mb`                  | `mb`                    |             | `string`                                                                                                             | `undefined` |
| `ml`                  | `ml`                    |             | `string`                                                                                                             | `undefined` |
| `mr`                  | `mr`                    |             | `string`                                                                                                             | `undefined` |
| `mt`                  | `mt`                    |             | `string`                                                                                                             | `undefined` |
| `overlayColor`        | `overlay-color`         |             | `string`                                                                                                             | `undefined` |
| `overlayOpacity`      | `overlay-opacity`       |             | `string`                                                                                                             | `undefined` |
| `position`            | `position`              |             | `"bottom" \| "bottom-left" \| "bottom-right" \| "center" \| "left" \| "right" \| "top" \| "top-left" \| "top-right"` | `undefined` |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `close` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [z-drawer](../z-drawer)

### Depends on

- [z-close-button](../z-close-button)

### Graph
```mermaid
graph TD;
  z-dialog --> z-close-button
  z-drawer --> z-dialog
  style z-dialog fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

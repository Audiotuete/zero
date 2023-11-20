/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Option } from "./components/z-table-builder/z-table-builder.d";
export { Option } from "./components/z-table-builder/z-table-builder.d";
export namespace Components {
    interface ZAspectRatio {
        "m": string;
        "maxWidth": string;
        "p": string;
        "ratio": string;
    }
    interface ZBox {
        "align": 'center' | 'flex-start' | 'flex-end';
        "as": string;
        "background": string;
        "block": boolean;
        "border": string;
        "borderColor": string;
        "borderRadius": string;
        "borderStyle": string;
        "borderWidth": string;
        "boxShadow": string;
        "columnGap": string;
        "cursor": string;
        "flex": string;
        "gap": string;
        "h": string;
        "justify": 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
        "m": string;
        "mb": string;
        "ml": string;
        "mr": string;
        "mt": string;
        "name": string;
        "p": string;
        "pb": string;
        "pl": string;
        "pointerEvents": string;
        "pr": string;
        "pt": string;
        "row": boolean;
        "rowGap": string;
        "w": string;
        "wrap": boolean;
        "zIndex": string;
    }
    interface ZButton {
        "disabled": boolean;
        "href": string;
        "loading": boolean;
        "m": string;
        "p": string;
        "targetBlank": boolean;
        "type": string;
    }
    interface ZCheckbox {
        "checked": boolean;
        "m": string;
        "p": string;
        "value": string;
    }
    interface ZDetails {
        "isExpanded": boolean;
        "m": string;
        "p": string;
        "spacingBottom": string;
        "spacingTop": string;
        "summary": string;
    }
    interface ZDetailsGroup {
        "gap": string;
        "m": string;
        "p": string;
    }
    interface ZDivider {
        "contentPosition": string;
        "dividerColor": string;
        "dividerExpansion": string;
        "dividerStyle": 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
        "dividerThickness": string;
        "m": string;
        "p": string;
        "vertical": boolean;
    }
    interface ZHeading {
        "color": string;
        "fontSize": string;
        "href": string;
        "level": '1' | '2' | '3' | '4' | '5' | '6';
        "m": string;
        "p": string;
        "spacingBottom": string;
        "spacingTop": string;
        "targetBlank": boolean;
    }
    interface ZHighlight {
        "bold": boolean;
        "code": boolean;
        "color": string;
        "fontSize": string;
        "italic": boolean;
        "m": string;
        "mark": boolean;
        "p": string;
        "strike": boolean;
        "sub": boolean;
        "sup": boolean;
        "transform": 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
        "underline": boolean;
    }
    interface ZListBox {
        "align": 'center' | 'flex-start' | 'flex-end';
        "background": string;
        "block": boolean;
        "border": string;
        "borderColor": string;
        "borderRadius": string;
        "borderStyle": string;
        "borderWidth": string;
        "boxShadow": string;
        "columnGap": string;
        "cursor": string;
        "flex": string;
        "gap": string;
        "h": string;
        "justify": 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
        "m": string;
        "mb": string;
        "ml": string;
        "mr": string;
        "mt": string;
        "name": string;
        "p": string;
        "pb": string;
        "pl": string;
        "pointerEvents": string;
        "pr": string;
        "pt": string;
        "row": boolean;
        "rowGap": string;
        "w": string;
        "wrap": boolean;
        "zIndex": string;
    }
    interface ZListItem {
        "m": string;
        "p": string;
    }
    interface ZSwitch {
        "m": string;
        "p": string;
        "value": boolean;
    }
    interface ZTabContent {
    }
    interface ZTabContentItem {
    }
    interface ZTabNav {
    }
    interface ZTabNavItem {
    }
    interface ZTableBuilder {
        "data": [] | Array<string[]>;
        "m": string;
        "options"?: Option[];
        "p": string;
    }
    interface ZTabs {
        "activeTabIndex": number;
        "contentHeight": string;
        "contentWidth": string;
        "m": string;
        "navItemsFit": boolean;
        "navItemsWidth": string;
        "p": string;
        "vertical": boolean;
    }
    interface ZText {
        "color": string;
        "fontSize": string;
        "hyphens": boolean;
        "lineHeight": string;
        "m": string;
        "p": string;
        "textAlign": 'center' | 'right' | 'left' | 'justify';
        "transform": 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
    }
}
declare global {
    interface HTMLZAspectRatioElement extends Components.ZAspectRatio, HTMLStencilElement {
    }
    var HTMLZAspectRatioElement: {
        prototype: HTMLZAspectRatioElement;
        new (): HTMLZAspectRatioElement;
    };
    interface HTMLZBoxElement extends Components.ZBox, HTMLStencilElement {
    }
    var HTMLZBoxElement: {
        prototype: HTMLZBoxElement;
        new (): HTMLZBoxElement;
    };
    interface HTMLZButtonElement extends Components.ZButton, HTMLStencilElement {
    }
    var HTMLZButtonElement: {
        prototype: HTMLZButtonElement;
        new (): HTMLZButtonElement;
    };
    interface HTMLZCheckboxElement extends Components.ZCheckbox, HTMLStencilElement {
    }
    var HTMLZCheckboxElement: {
        prototype: HTMLZCheckboxElement;
        new (): HTMLZCheckboxElement;
    };
    interface HTMLZDetailsElement extends Components.ZDetails, HTMLStencilElement {
    }
    var HTMLZDetailsElement: {
        prototype: HTMLZDetailsElement;
        new (): HTMLZDetailsElement;
    };
    interface HTMLZDetailsGroupElement extends Components.ZDetailsGroup, HTMLStencilElement {
    }
    var HTMLZDetailsGroupElement: {
        prototype: HTMLZDetailsGroupElement;
        new (): HTMLZDetailsGroupElement;
    };
    interface HTMLZDividerElement extends Components.ZDivider, HTMLStencilElement {
    }
    var HTMLZDividerElement: {
        prototype: HTMLZDividerElement;
        new (): HTMLZDividerElement;
    };
    interface HTMLZHeadingElement extends Components.ZHeading, HTMLStencilElement {
    }
    var HTMLZHeadingElement: {
        prototype: HTMLZHeadingElement;
        new (): HTMLZHeadingElement;
    };
    interface HTMLZHighlightElement extends Components.ZHighlight, HTMLStencilElement {
    }
    var HTMLZHighlightElement: {
        prototype: HTMLZHighlightElement;
        new (): HTMLZHighlightElement;
    };
    interface HTMLZListBoxElement extends Components.ZListBox, HTMLStencilElement {
    }
    var HTMLZListBoxElement: {
        prototype: HTMLZListBoxElement;
        new (): HTMLZListBoxElement;
    };
    interface HTMLZListItemElement extends Components.ZListItem, HTMLStencilElement {
    }
    var HTMLZListItemElement: {
        prototype: HTMLZListItemElement;
        new (): HTMLZListItemElement;
    };
    interface HTMLZSwitchElement extends Components.ZSwitch, HTMLStencilElement {
    }
    var HTMLZSwitchElement: {
        prototype: HTMLZSwitchElement;
        new (): HTMLZSwitchElement;
    };
    interface HTMLZTabContentElement extends Components.ZTabContent, HTMLStencilElement {
    }
    var HTMLZTabContentElement: {
        prototype: HTMLZTabContentElement;
        new (): HTMLZTabContentElement;
    };
    interface HTMLZTabContentItemElement extends Components.ZTabContentItem, HTMLStencilElement {
    }
    var HTMLZTabContentItemElement: {
        prototype: HTMLZTabContentItemElement;
        new (): HTMLZTabContentItemElement;
    };
    interface HTMLZTabNavElement extends Components.ZTabNav, HTMLStencilElement {
    }
    var HTMLZTabNavElement: {
        prototype: HTMLZTabNavElement;
        new (): HTMLZTabNavElement;
    };
    interface HTMLZTabNavItemElement extends Components.ZTabNavItem, HTMLStencilElement {
    }
    var HTMLZTabNavItemElement: {
        prototype: HTMLZTabNavItemElement;
        new (): HTMLZTabNavItemElement;
    };
    interface HTMLZTableBuilderElement extends Components.ZTableBuilder, HTMLStencilElement {
    }
    var HTMLZTableBuilderElement: {
        prototype: HTMLZTableBuilderElement;
        new (): HTMLZTableBuilderElement;
    };
    interface HTMLZTabsElement extends Components.ZTabs, HTMLStencilElement {
    }
    var HTMLZTabsElement: {
        prototype: HTMLZTabsElement;
        new (): HTMLZTabsElement;
    };
    interface HTMLZTextElement extends Components.ZText, HTMLStencilElement {
    }
    var HTMLZTextElement: {
        prototype: HTMLZTextElement;
        new (): HTMLZTextElement;
    };
    interface HTMLElementTagNameMap {
        "z-aspect-ratio": HTMLZAspectRatioElement;
        "z-box": HTMLZBoxElement;
        "z-button": HTMLZButtonElement;
        "z-checkbox": HTMLZCheckboxElement;
        "z-details": HTMLZDetailsElement;
        "z-details-group": HTMLZDetailsGroupElement;
        "z-divider": HTMLZDividerElement;
        "z-heading": HTMLZHeadingElement;
        "z-highlight": HTMLZHighlightElement;
        "z-list-box": HTMLZListBoxElement;
        "z-list-item": HTMLZListItemElement;
        "z-switch": HTMLZSwitchElement;
        "z-tab-content": HTMLZTabContentElement;
        "z-tab-content-item": HTMLZTabContentItemElement;
        "z-tab-nav": HTMLZTabNavElement;
        "z-tab-nav-item": HTMLZTabNavItemElement;
        "z-table-builder": HTMLZTableBuilderElement;
        "z-tabs": HTMLZTabsElement;
        "z-text": HTMLZTextElement;
    }
}
declare namespace LocalJSX {
    interface ZAspectRatio {
        "m"?: string;
        "maxWidth"?: string;
        "p"?: string;
        "ratio": string;
    }
    interface ZBox {
        "align"?: 'center' | 'flex-start' | 'flex-end';
        "as"?: string;
        "background"?: string;
        "block"?: boolean;
        "border"?: string;
        "borderColor"?: string;
        "borderRadius"?: string;
        "borderStyle"?: string;
        "borderWidth"?: string;
        "boxShadow"?: string;
        "columnGap"?: string;
        "cursor"?: string;
        "flex"?: string;
        "gap"?: string;
        "h"?: string;
        "justify"?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
        "m"?: string;
        "mb"?: string;
        "ml"?: string;
        "mr"?: string;
        "mt"?: string;
        "name"?: string;
        "p"?: string;
        "pb"?: string;
        "pl"?: string;
        "pointerEvents"?: string;
        "pr"?: string;
        "pt"?: string;
        "row"?: boolean;
        "rowGap"?: string;
        "w"?: string;
        "wrap"?: boolean;
        "zIndex"?: string;
    }
    interface ZButton {
        "disabled"?: boolean;
        "href"?: string;
        "loading"?: boolean;
        "m"?: string;
        "p"?: string;
        "targetBlank"?: boolean;
        "type"?: string;
    }
    interface ZCheckbox {
        "checked"?: boolean;
        "m"?: string;
        "p"?: string;
        "value"?: string;
    }
    interface ZDetails {
        "isExpanded"?: boolean;
        "m"?: string;
        "p"?: string;
        "spacingBottom"?: string;
        "spacingTop"?: string;
        "summary"?: string;
    }
    interface ZDetailsGroup {
        "gap"?: string;
        "m"?: string;
        "p"?: string;
    }
    interface ZDivider {
        "contentPosition"?: string;
        "dividerColor"?: string;
        "dividerExpansion"?: string;
        "dividerStyle"?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset';
        "dividerThickness"?: string;
        "m"?: string;
        "p"?: string;
        "vertical"?: boolean;
    }
    interface ZHeading {
        "color"?: string;
        "fontSize"?: string;
        "href"?: string;
        "level": '1' | '2' | '3' | '4' | '5' | '6';
        "m"?: string;
        "p"?: string;
        "spacingBottom"?: string;
        "spacingTop"?: string;
        "targetBlank"?: boolean;
    }
    interface ZHighlight {
        "bold"?: boolean;
        "code"?: boolean;
        "color"?: string;
        "fontSize"?: string;
        "italic"?: boolean;
        "m"?: string;
        "mark"?: boolean;
        "p"?: string;
        "strike"?: boolean;
        "sub"?: boolean;
        "sup"?: boolean;
        "transform"?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
        "underline"?: boolean;
    }
    interface ZListBox {
        "align"?: 'center' | 'flex-start' | 'flex-end';
        "background"?: string;
        "block"?: boolean;
        "border"?: string;
        "borderColor"?: string;
        "borderRadius"?: string;
        "borderStyle"?: string;
        "borderWidth"?: string;
        "boxShadow"?: string;
        "columnGap"?: string;
        "cursor"?: string;
        "flex"?: string;
        "gap"?: string;
        "h"?: string;
        "justify"?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
        "m"?: string;
        "mb"?: string;
        "ml"?: string;
        "mr"?: string;
        "mt"?: string;
        "name"?: string;
        "p"?: string;
        "pb"?: string;
        "pl"?: string;
        "pointerEvents"?: string;
        "pr"?: string;
        "pt"?: string;
        "row"?: boolean;
        "rowGap"?: string;
        "w"?: string;
        "wrap"?: boolean;
        "zIndex"?: string;
    }
    interface ZListItem {
        "m"?: string;
        "p"?: string;
    }
    interface ZSwitch {
        "m"?: string;
        "p"?: string;
        "value"?: boolean;
    }
    interface ZTabContent {
    }
    interface ZTabContentItem {
    }
    interface ZTabNav {
    }
    interface ZTabNavItem {
    }
    interface ZTableBuilder {
        "data": [] | Array<string[]>;
        "m"?: string;
        "options"?: Option[];
        "p"?: string;
    }
    interface ZTabs {
        "activeTabIndex"?: number;
        "contentHeight"?: string;
        "contentWidth"?: string;
        "m"?: string;
        "navItemsFit"?: boolean;
        "navItemsWidth"?: string;
        "p"?: string;
        "vertical"?: boolean;
    }
    interface ZText {
        "color"?: string;
        "fontSize"?: string;
        "hyphens"?: boolean;
        "lineHeight"?: string;
        "m"?: string;
        "p"?: string;
        "textAlign"?: 'center' | 'right' | 'left' | 'justify';
        "transform"?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'full-width' | 'full-size-kana';
    }
    interface IntrinsicElements {
        "z-aspect-ratio": ZAspectRatio;
        "z-box": ZBox;
        "z-button": ZButton;
        "z-checkbox": ZCheckbox;
        "z-details": ZDetails;
        "z-details-group": ZDetailsGroup;
        "z-divider": ZDivider;
        "z-heading": ZHeading;
        "z-highlight": ZHighlight;
        "z-list-box": ZListBox;
        "z-list-item": ZListItem;
        "z-switch": ZSwitch;
        "z-tab-content": ZTabContent;
        "z-tab-content-item": ZTabContentItem;
        "z-tab-nav": ZTabNav;
        "z-tab-nav-item": ZTabNavItem;
        "z-table-builder": ZTableBuilder;
        "z-tabs": ZTabs;
        "z-text": ZText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "z-aspect-ratio": LocalJSX.ZAspectRatio & JSXBase.HTMLAttributes<HTMLZAspectRatioElement>;
            "z-box": LocalJSX.ZBox & JSXBase.HTMLAttributes<HTMLZBoxElement>;
            "z-button": LocalJSX.ZButton & JSXBase.HTMLAttributes<HTMLZButtonElement>;
            "z-checkbox": LocalJSX.ZCheckbox & JSXBase.HTMLAttributes<HTMLZCheckboxElement>;
            "z-details": LocalJSX.ZDetails & JSXBase.HTMLAttributes<HTMLZDetailsElement>;
            "z-details-group": LocalJSX.ZDetailsGroup & JSXBase.HTMLAttributes<HTMLZDetailsGroupElement>;
            "z-divider": LocalJSX.ZDivider & JSXBase.HTMLAttributes<HTMLZDividerElement>;
            "z-heading": LocalJSX.ZHeading & JSXBase.HTMLAttributes<HTMLZHeadingElement>;
            "z-highlight": LocalJSX.ZHighlight & JSXBase.HTMLAttributes<HTMLZHighlightElement>;
            "z-list-box": LocalJSX.ZListBox & JSXBase.HTMLAttributes<HTMLZListBoxElement>;
            "z-list-item": LocalJSX.ZListItem & JSXBase.HTMLAttributes<HTMLZListItemElement>;
            "z-switch": LocalJSX.ZSwitch & JSXBase.HTMLAttributes<HTMLZSwitchElement>;
            "z-tab-content": LocalJSX.ZTabContent & JSXBase.HTMLAttributes<HTMLZTabContentElement>;
            "z-tab-content-item": LocalJSX.ZTabContentItem & JSXBase.HTMLAttributes<HTMLZTabContentItemElement>;
            "z-tab-nav": LocalJSX.ZTabNav & JSXBase.HTMLAttributes<HTMLZTabNavElement>;
            "z-tab-nav-item": LocalJSX.ZTabNavItem & JSXBase.HTMLAttributes<HTMLZTabNavItemElement>;
            "z-table-builder": LocalJSX.ZTableBuilder & JSXBase.HTMLAttributes<HTMLZTableBuilderElement>;
            "z-tabs": LocalJSX.ZTabs & JSXBase.HTMLAttributes<HTMLZTabsElement>;
            "z-text": LocalJSX.ZText & JSXBase.HTMLAttributes<HTMLZTextElement>;
        }
    }
}

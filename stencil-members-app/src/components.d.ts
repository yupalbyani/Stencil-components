/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonComponent {
        "data": any;
    }
    interface CardDetailsComponent {
        "detailsData": any;
    }
    interface CardHeaderComponent {
        "headingTitle": string | 'Add Heading';
        "headingTitleTag": string | 'h1';
        "headingType": string | 'primary';
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface PageHeader {
        "buttonData": any;
        "linkData": any;
        "title": string;
    }
}
export interface ButtonComponentCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLButtonComponentElement;
}
declare global {
    interface HTMLButtonComponentElement extends Components.ButtonComponent, HTMLStencilElement {
    }
    var HTMLButtonComponentElement: {
        prototype: HTMLButtonComponentElement;
        new (): HTMLButtonComponentElement;
    };
    interface HTMLCardDetailsComponentElement extends Components.CardDetailsComponent, HTMLStencilElement {
    }
    var HTMLCardDetailsComponentElement: {
        prototype: HTMLCardDetailsComponentElement;
        new (): HTMLCardDetailsComponentElement;
    };
    interface HTMLCardHeaderComponentElement extends Components.CardHeaderComponent, HTMLStencilElement {
    }
    var HTMLCardHeaderComponentElement: {
        prototype: HTMLCardHeaderComponentElement;
        new (): HTMLCardHeaderComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLPageHeaderElement extends Components.PageHeader, HTMLStencilElement {
    }
    var HTMLPageHeaderElement: {
        prototype: HTMLPageHeaderElement;
        new (): HTMLPageHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "button-component": HTMLButtonComponentElement;
        "card-details-component": HTMLCardDetailsComponentElement;
        "card-header-component": HTMLCardHeaderComponentElement;
        "my-component": HTMLMyComponentElement;
        "page-header": HTMLPageHeaderElement;
    }
}
declare namespace LocalJSX {
    interface ButtonComponent {
        "data"?: any;
        "onOnBtnClick"?: (event: ButtonComponentCustomEvent<string>) => void;
    }
    interface CardDetailsComponent {
        "detailsData"?: any;
    }
    interface CardHeaderComponent {
        "headingTitle"?: string | 'Add Heading';
        "headingTitleTag"?: string | 'h1';
        "headingType"?: string | 'primary';
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface PageHeader {
        "buttonData"?: any;
        "linkData"?: any;
        "title"?: string;
    }
    interface IntrinsicElements {
        "button-component": ButtonComponent;
        "card-details-component": CardDetailsComponent;
        "card-header-component": CardHeaderComponent;
        "my-component": MyComponent;
        "page-header": PageHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "button-component": LocalJSX.ButtonComponent & JSXBase.HTMLAttributes<HTMLButtonComponentElement>;
            "card-details-component": LocalJSX.CardDetailsComponent & JSXBase.HTMLAttributes<HTMLCardDetailsComponentElement>;
            "card-header-component": LocalJSX.CardHeaderComponent & JSXBase.HTMLAttributes<HTMLCardHeaderComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "page-header": LocalJSX.PageHeader & JSXBase.HTMLAttributes<HTMLPageHeaderElement>;
        }
    }
}

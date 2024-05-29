/* eslint-disable no-unused-vars */
interface JSONObject {
  [x: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}
type JSONValue = string | number | boolean | JSONObject | JSONArray;
export type SerializableCSSStyleDeclaration = Partial<
  Record<keyof CSSStyleDeclaration, string>
>;

//  Sunmao class
export declare class Sunmao {
  static singletonInstance: Sunmao;
  static componentList: SunmaoComponentMetaProps[];
  static registerComponent: (
    component: any,
    meta: SunmaoComponentMetaProps
  ) => void;
}

// Sunmao component
// enhance a common component in Sunmao.
export interface SunmaoComponentMetaProps {
  name?: string;
  component?: any;
  previewImage?: string;
  group?: string;
  inputs?: {
    name: string;
    description?: string;
    type?: 'String' | "Number" | "Boolean" | "Array"
    required?: string;
    defaultValue?: any;
    asKey?: boolean
  }[];
}


// Sunmao block
// for render
export interface SunmaoBlockProps {
  id?: string;
  name?: string;
  children?: SunmaoBlockProps[];
  data?: any,
  responsiveStyles?: {
    desktop?: SerializableCSSStyleDeclaration;
    tablet?: SerializableCSSStyleDeclaration;
    mobile?: SerializableCSSStyleDeclaration;
  };
  meta?: {
    previousId?: string;
  };
}

// Sunmao page
// a tree with blocks
export interface SunmaoPageProps {
  name?: string;
  url?: string;
  blocks?: SunmaoBlockProps[];
  data: any;
  Sunmao: Sunmao;
  published?: "published" | "draft" | "archived";
  lastUpdated?: number;
}
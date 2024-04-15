import * as fabric from 'fabric';
import { TClassProperties } from '../type';

export const textBoxDefaultValues: Partial<TClassProperties<MyTextbox>> = {
  minWidth: 20,
  dynamicMinWidth: 2,
  lockScalingFlip: true,
  noScaleCache: false,
  _wordJoiners: /[ \t\r]/,
  splitByGrapheme: false,
}
export class MyTextbox extends fabric.Textbox {
  static stateProperties: string[] = fabric.Textbox.stateProperties.concat(
    'originalText',
    'uppercase',
  );
  static cacheProperties = fabric.Textbox.cacheProperties.concat(
    'originalText',
    'uppercase',
  );

  static ownDefaults: Record<string, any> = textBoxDefaultValues;

  static getDefaults(): { [x: string]: any; } {
    return { ...super.getDefaults(), ...MyTextbox.ownDefaults };
  }

  declare originalText?: string;

  declare placeholder?: string;

  constructor(text: string, options?: any) {
    super(text, options);
  }

  // @ts-ignore
  get text() {
    let text = this.originalText || this.placeholder || '';
    // if (this.isEdittingEmptyText()) {
    //   text = '';
    // }
    return text;
  }

  set text(value: string) {
    const text = value || '';
    this.originalText = text;
  }
}
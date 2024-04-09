import * as fabric from 'fabric';
import { TClassProperties } from '../type';

export const textBoxDefaultValues: Partial<TClassProperties<CorjlTextbox>> = {
  minWidth: 20,
  dynamicMinWidth: 2,
  lockScalingFlip: true,
  noScaleCache: false,
  _wordJoiners: /[ \t\r]/,
  splitByGrapheme: false,
}
export class CorjlTextbox extends fabric.Textbox {
  static stateProperties: string[] = fabric.Textbox.stateProperties.concat(
    'originalText',
    'uppercase',
    'curved',
    'outerGlow',
    'protection',
    'freeze',
    'wrapText',
    'autoWrapText',
  );
  static cacheProperties = fabric.Textbox.cacheProperties.concat(
    'originalText',
    'uppercase',
    'curved',
    'outerGlow',
    'protection',
    'freeze',
    'wrapText',
    'autoWrapText',
  );

  static ownDefaults: Record<string, any> = textBoxDefaultValues;

  static getDefaults(): { [x: string]: any; } {
    return { ...super.getDefaults(), ...CorjlTextbox.ownDefaults };
  }

  constructor(text: string, options?: any) {
    super(text, options);
    console.log(text, 'text...');
  }
}
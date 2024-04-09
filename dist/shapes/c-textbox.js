"use strict";
// import * as fabric from 'fabric';
// import { cloneDeep, forEach } from 'lodash';
// import { TClassProperties } from '../type';
// fabric.config.disableStyleCopyPaste = true;
// const ANTI_WRAP_MARGIN = 1.2;
// export const textBoxDefaultValues: Partial<TClassProperties<CorjlTextbox>> = {
//   ITALIC_ANGLE: 15,
//   paintFirst: 'stroke',
//   strokeLineJoin: 'round',
//   _reNewline: new RegExp(/\r?\n/),
//   imageRenderSize: {
//     width: 0,
//     height: 0,
//   },
//   textLineMaps: {},
//   originXOffset: {
//     left: -0.5,
//     center: 0,
//     right: 0.5
//   },
//   originYOffset: {
//     top: -0.5,
//     center: 0,
//     bottom: 0.5
//   },
//   _styleProperties: [
//     'stroke',
//     'strokeWidth',
//     'fill',
//     'gradient',
//     'fontFamily',
//     'fontSize',
//     'fontWeight',
//     'fontStyle',
//     'underline',
//     'overline',
//     'linethrough',
//     'deltaY',
//     'textBackgroundColor',
//   ],
//   cacheDynamicProperties: [
//     'fontFamily',
//     'fontSize',
//     'lineHeight',
//     'originalText',
//     'uppercase',
//     'charSpacing',
//     'styles',
//     'width',
//     'wrapText',
//     'autoWrapText',
//   ],
//   _dimensionAffectingProps: [
//     'fontSize',
//     'fontWeight',
//     'fontFamily',
//     'fontStyle',
//     'lineHeight',
//     'text',
//     'originalText',
//     'charSpacing',
//     'textAlign',
//     'styles',
//     'path',
//     'pathStartOffset',
//     'pathSide',
//     'pathAlign',
//     'bulletStyles',
//     'uppercase',
//     'protection'
//   ],
//   objectCaching: false
// }
// export class CorjlTextbox extends fabric.Textbox {
//   static stateProperties: string[] = fabric.Textbox.stateProperties.concat(
//     'originalText',
//     'uppercase',
//     'curved',
//     'outerGlow',
//     'protection',
//     'freeze',
//     'wrapText',
//     'autoWrapText',
//   );
//   static cacheProperties = fabric.Textbox.cacheProperties.concat(
//     'originalText',
//     'uppercase',
//     'curved',
//     'outerGlow',
//     'protection',
//     'freeze',
//     'wrapText',
//     'autoWrapText',
//   );
//   static ownDefaults: Record<string, any> = textBoxDefaultValues;
//   static getDefaults(): { [x: string]: any; } {
//     return { ...super.getDefaults(), ...CorjlTextbox.ownDefaults };
//   }
//   constructor(text: string, options?: any) {
//     super(text, options);
//     console.log(text, 'text...');
//   }
// }

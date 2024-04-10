import * as fabric from 'fabric';
export const textBoxDefaultValues = {
    minWidth: 20,
    dynamicMinWidth: 2,
    lockScalingFlip: true,
    noScaleCache: false,
    _wordJoiners: /[ \t\r]/,
    splitByGrapheme: false,
};
export class MyTextbox extends fabric.Textbox {
    static getDefaults() {
        return Object.assign(Object.assign({}, super.getDefaults()), MyTextbox.ownDefaults);
    }
    constructor(text, options) {
        super(text, options);
        console.log(text, 'text...');
    }
}
MyTextbox.stateProperties = fabric.Textbox.stateProperties.concat('originalText', 'uppercase', 'curved', 'outerGlow', 'protection', 'freeze', 'wrapText', 'autoWrapText');
MyTextbox.cacheProperties = fabric.Textbox.cacheProperties.concat('originalText', 'uppercase', 'curved', 'outerGlow', 'protection', 'freeze', 'wrapText', 'autoWrapText');
MyTextbox.ownDefaults = textBoxDefaultValues;

import * as fabric from 'fabric';
export const textBoxDefaultValues = {
    minWidth: 20,
    dynamicMinWidth: 2,
    lockScalingFlip: true,
    noScaleCache: false,
    _wordJoiners: /[ \t\r]/,
    splitByGrapheme: false,
};
export class CorjlTextbox extends fabric.Textbox {
    static getDefaults() {
        return Object.assign(Object.assign({}, super.getDefaults()), CorjlTextbox.ownDefaults);
    }
    constructor(text, options) {
        super(text, options);
        console.log(text, 'text...');
    }
}
CorjlTextbox.stateProperties = fabric.Textbox.stateProperties.concat('originalText', 'uppercase', 'curved', 'outerGlow', 'protection', 'freeze', 'wrapText', 'autoWrapText');
CorjlTextbox.cacheProperties = fabric.Textbox.cacheProperties.concat('originalText', 'uppercase', 'curved', 'outerGlow', 'protection', 'freeze', 'wrapText', 'autoWrapText');
CorjlTextbox.ownDefaults = textBoxDefaultValues;

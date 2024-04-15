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
    }
    // @ts-ignore
    get text() {
        let text = this.originalText || this.placeholder || '';
        // if (this.isEdittingEmptyText()) {
        //   text = '';
        // }
        return text;
    }
    set text(value) {
        const text = value || '';
        this.originalText = text;
    }
}
MyTextbox.stateProperties = fabric.Textbox.stateProperties.concat('originalText', 'uppercase');
MyTextbox.cacheProperties = fabric.Textbox.cacheProperties.concat('originalText', 'uppercase');
MyTextbox.ownDefaults = textBoxDefaultValues;

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
    render(ctx) {
        super.render(ctx);
        ctx.save();
        this._setOpacity(ctx);
        ctx.restore();
    }
    isEdittingEmptyText() {
        return !this.originalText && this.isEditing;
    }
    _setOpacity(ctx) {
        var _a, _b;
        if (!this.originalText && ((_a = this.text) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === ((_b = this.placeholder) === null || _b === void 0 ? void 0 : _b.toUpperCase())) {
            ctx.globalAlpha *= 0.5;
            return;
        }
        super._setOpacity(ctx);
    }
    // @ts-ignore
    get text() {
        let text = this.originalText || this.placeholder || '';
        if (this.isEdittingEmptyText()) {
            text = '';
        }
        return text;
    }
    set text(value) {
        const text = value || '';
        this.originalText = text;
    }
    onInput(event) {
        if (!this.hiddenTextarea) {
            return;
        }
        super.onInput(event);
        this.originalText = this.hiddenTextarea.value;
    }
    enterEditing(e) {
        if (this.isEditing || !this.editable) {
            return;
        }
        this.isEditing = true;
        this.initHiddenTextarea();
        if (this.lineHeight === 0 && this.hiddenTextarea) {
            this.hiddenTextarea.style.top = '0';
            this.hiddenTextarea.style.left = '0';
        }
        if (this.hiddenTextarea) {
            this.hiddenTextarea.focus();
            this.hiddenTextarea.value = this.originalText || '';
            this.hiddenTextarea.style.paddingTop = '0';
            this._updateTextarea();
            this._saveEditingProps();
            this._setEditingProps();
            this._textBeforeEdit = this.text;
            this._tick();
            this.fire('editing:entered');
            this._fireSelectionChanged();
            if (!this.canvas) {
                return this;
            }
            this.canvas.fire('text:editing:entered', { target: this, e });
            this.canvas.requestRenderAll();
        }
        return this;
    }
    // @ts-ignore
    toObject(propertiesToInclude) {
        // @ts-ignore
        return super.toObject([
            'originalText',
        ].concat(propertiesToInclude || []));
    }
}
MyTextbox.stateProperties = fabric.Textbox.stateProperties.concat('originalText', 'uppercase');
MyTextbox.cacheProperties = fabric.Textbox.cacheProperties.concat('originalText', 'uppercase');
MyTextbox.ownDefaults = textBoxDefaultValues;

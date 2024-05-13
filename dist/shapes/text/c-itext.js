import { extend } from 'lodash';
import * as fabric from 'fabric';
import './itext_key_behavior.mixin';
import './itext_behavior.mixin';
const CorjllIText = {
    getSelectionStyles: function (startIndex, endIndex, complete) {
        if (typeof startIndex === 'undefined') {
            startIndex = this.selectionStart || 0;
        }
        if (typeof endIndex === 'undefined') {
            endIndex = this.selectionEnd || startIndex;
        }
        const styles = [];
        for (let i = startIndex; i < endIndex; i++) {
            const style = this.getStyleAtPosition(i, complete);
            delete style.stroke;
            delete style.strokeWidth;
            styles.push(style);
        }
        return styles;
    },
};
extend(fabric.IText.prototype, CorjllIText);

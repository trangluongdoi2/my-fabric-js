import * as fabric from 'fabric';
class MySection extends fabric.Rect {
    constructor(options) {
        super(options);
        this.DOUBLE_TAP_THRESHOLD = 200;
    }
    static getDefaults() {
        return Object.assign(Object.assign({}, super.getDefaults()), { originX: 'left', originY: 'top', fill: 'rgb(255, 255, 255)', visible: true, selectable: false, hoverCursor: 'default', borderColorDefault: '#c3c3c3', borderColorActive: 'blue', strokeWidth: 0 });
    }
    fillDefault(ctx) {
        var _a, _b;
        const fillDefaultPattern = fabric.util.createCanvasElement();
        const WIDTH_PATTERN = 100;
        const HEIGHT_PATTERN = 100;
        const width = (_a = this.width) !== null && _a !== void 0 ? _a : 0;
        const height = (_b = this.height) !== null && _b !== void 0 ? _b : 0;
        fillDefaultPattern.width = WIDTH_PATTERN;
        fillDefaultPattern.height = HEIGHT_PATTERN;
        const fillPatternCtx = fillDefaultPattern.getContext('2d');
        if (!fillPatternCtx) {
            return;
        }
        fillPatternCtx.beginPath();
        fillPatternCtx.moveTo(0, 0);
        fillPatternCtx.lineTo(fillDefaultPattern.width, 0);
        fillPatternCtx.lineTo(fillDefaultPattern.width, fillDefaultPattern.height);
        fillPatternCtx.lineTo(0, fillDefaultPattern.height);
        fillPatternCtx.closePath();
        const DEFAULT_COLOR = this.fill;
        fillPatternCtx.fillStyle = DEFAULT_COLOR;
        fillPatternCtx.fillRect(0, 0, fillDefaultPattern.width, fillDefaultPattern.height);
        const offsetX = -width / 2;
        const offsetY = -height / 2;
        ctx.drawImage(fillDefaultPattern, 0, 0, fillDefaultPattern.width, fillDefaultPattern.height, offsetX, offsetY, width, height);
    }
    renderBorderShadow(ctx) {
        var _a;
        ctx.save();
        ctx.translate(-this.width / 2, -this.height / 2);
        ctx.beginPath();
        ctx.rect(this.left, this.top, this.width, this.height);
        ctx.shadowColor = '#000000';
        ctx.shadowBlur = 10 * (((_a = this.canvas) === null || _a === void 0 ? void 0 : _a.getZoom()) || 1);
        ctx.fillStyle = '#ffffff';
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
    _renderFill(ctx) {
        ctx.save();
        this.fillDefault(ctx);
        this.renderBorderShadow(ctx);
        ctx.restore();
    }
    static fromObject(object, options) {
        return this._fromObject(object, options);
    }
}
export const MySectionDefaultValues = {
    type: 'section',
};
Object.assign(MySection.prototype, Object.assign({}, MySectionDefaultValues));
fabric.classRegistry.setClass(MySection);
fabric.classRegistry.setSVGClass(MySection);
export { MySection };

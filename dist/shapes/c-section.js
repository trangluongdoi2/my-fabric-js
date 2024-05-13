import * as fabric from 'fabric';
class MySection extends fabric.Rect {
    constructor(options) {
        super(options);
        this.DOUBLE_TAP_THRESHOLD = 200;
        console.log(options, 'constructor MySection...');
    }
    static getDefaults() {
        return Object.assign(Object.assign({}, super.getDefaults()), { originX: 'left', originY: 'top', 
            // fill: 'rgb(66, 184, 131)',
            // fill: 'rgb(0,0,0)',
            fill: 'rgb(255, 255, 255)', visible: true, selectable: false, hoverCursor: 'default', borderColorDefault: '#c3c3c3', borderColorActive: 'blue', strokeWidth: 0 });
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
    _renderFill(ctx) {
        console.log('_renderFill....');
        ctx.save();
        this.fillDefault(ctx);
        // var centerPoint = this.getCenterPoint();
        // this.setPositionByOrigin(centerPoint, 'center', 'center');
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

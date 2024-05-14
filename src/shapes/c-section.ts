import * as fabric from 'fabric';
import { Canvas, TClassProperties } from '../type';

class MySection extends fabric.Rect {
  declare width: number;

  declare height: number;

  declare borderColorDefault: string;

  declare borderColorActive: string;

  DOUBLE_TAP_THRESHOLD = 200;

  declare lastTapTime: any;

  _element: Canvas | any;

  constructor(options: Record<string, unknown>) {
    super(options);
  }

  static getDefaults() {
    return {
      ...super.getDefaults(),
      originX: 'left',
      originY:'top',
      fill: 'rgb(255, 255, 255)',
      visible: true,
      selectable: false,
      hoverCursor: 'default',
      borderColorDefault: '#c3c3c3',
      borderColorActive: 'blue',
      strokeWidth: 0,
    }
  }

  fillDefault(ctx: CanvasRenderingContext2D) {
    const fillDefaultPattern = fabric.util.createCanvasElement();
    const WIDTH_PATTERN = 100;
    const HEIGHT_PATTERN = 100;
    const width = this.width ?? 0;
    const height = this.height ?? 0;
    fillDefaultPattern.width = WIDTH_PATTERN;
    fillDefaultPattern.height = HEIGHT_PATTERN;
    const fillPatternCtx = fillDefaultPattern.getContext('2d');
    if(!fillPatternCtx) {
      return;
    }
    fillPatternCtx.beginPath();
    fillPatternCtx.moveTo(0, 0);
    fillPatternCtx.lineTo(fillDefaultPattern.width, 0);
    fillPatternCtx.lineTo(fillDefaultPattern.width, fillDefaultPattern.height);
    fillPatternCtx.lineTo(0, fillDefaultPattern.height);
    fillPatternCtx.closePath();
    const DEFAULT_COLOR = this.fill;
    fillPatternCtx.fillStyle = DEFAULT_COLOR as string;
    fillPatternCtx.fillRect(0, 0, fillDefaultPattern.width, fillDefaultPattern.height);

    const offsetX = -width / 2;
    const offsetY = -height / 2;
    ctx.drawImage(fillDefaultPattern, 
    0, 0, fillDefaultPattern.width, fillDefaultPattern.height,
    offsetX, offsetY, width, height);
  }

  renderBorderShadow(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(-this.width / 2, -this.height / 2);
    ctx.beginPath();
    ctx.rect(this.left, this.top, this.width, this.height);
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 10 * (this.canvas?.getZoom() || 1);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }

  _renderFill(ctx: CanvasRenderingContext2D) {
    ctx.save();
    this.fillDefault(ctx);
    this.renderBorderShadow(ctx);
    ctx.restore();
  }

  static fromObject(object: any, options?: any) {
    return this._fromObject( object, options);
  }

}

export const MySectionDefaultValues: Partial<TClassProperties<MySection>> = {
  type: 'section',
};

Object.assign(MySection.prototype, {
  ...MySectionDefaultValues,
});

fabric.classRegistry.setClass(MySection);
fabric.classRegistry.setSVGClass(MySection);

export { MySection };
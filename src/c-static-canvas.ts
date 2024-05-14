import * as fabric from 'fabric';
import { extend } from 'lodash';

export class CorjlStaticCanvas extends fabric.StaticCanvas {
  renderAll() {
    try {
      const canvasToDrawOn = this.contextContainer;
      // @ts-ignore
      this.renderCanvas(canvasToDrawOn, this._chooseObjectsToRender());
      return this;
    } catch (error) {
      console.log(error);
      return this;
    }
  }

  _searchPossibleTargets(objects: fabric.Object[], pointer: fabric.Point) {
    return fabric.Canvas.prototype._searchPossibleTargets.call(this,objects, pointer);
  }
}

const StaticCanvasExtends: any = {
  _section: undefined,
  getSection: function() {
    return this._section;
  },

  getArtboardRect(){
    const rect = {
      top: 0,
      left: 0,
      width: 3000,
      height: 3000,
    }
    return rect;
  },

  renderArtboardShadow(ctx:CanvasRenderingContext2D){
    const { top, left , width: artboardWidth, height: artboardHeight } = this.getArtboardRect();
    ctx.save();
    const [a, b, c, d, e, f] = this.viewportTransform || [1, 0, 0, 0, 1, 1];
    ctx.transform(a, b, c, d, e, f);
    ctx.beginPath();
    ctx.rect(left, top, artboardWidth, artboardHeight);
    ctx.shadowColor = this.artboardSettings.color;
    ctx.shadowBlur = this.artboardSettings.size;
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}

extend(fabric.StaticCanvas.prototype, StaticCanvasExtends);

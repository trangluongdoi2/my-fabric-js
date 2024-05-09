import { TPointerEvent } from 'EventTypeDefs';
import * as fabric from 'fabric';
import { TClassProperties } from '../type';

export const textBoxDefaultValues: Partial<TClassProperties<MyTextbox>> = {
  minWidth: 20,
  dynamicMinWidth: 2,
  lockScalingFlip: true,
  noScaleCache: false,
  _wordJoiners: /[ \t\r]/,
  splitByGrapheme: false,
}
export class MyTextbox extends fabric.Textbox {
  static stateProperties: string[] = fabric.Textbox.stateProperties.concat(
    'originalText',
    'uppercase',
  );
  static cacheProperties = fabric.Textbox.cacheProperties.concat(
    'originalText',
    'uppercase',
  );

  static ownDefaults: Record<string, any> = textBoxDefaultValues;

  static getDefaults(): { [x: string]: any; } {
    return { ...super.getDefaults(), ...MyTextbox.ownDefaults };
  }

  declare originalText?: string;

  declare placeholder?: string;

  constructor(text: string, options?: any) {
    super(text, options);
  }

  render(ctx: CanvasRenderingContext2D) {
    super.render(ctx);
    ctx.save();
    this._setOpacity(ctx);
    ctx.restore();
  }

  isEdittingEmptyText() {
    return !this.originalText && this.isEditing;
  }

  _setOpacity(ctx: CanvasRenderingContext2D) {
    if (!this.originalText && this.text?.toUpperCase() === this.placeholder?.toUpperCase()) {
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

  set text(value: string) {
    const text = value || '';
    this.originalText = text;
  }

  onInput(event: any) {
    if (!this.hiddenTextarea) {
      return;
    }
    super.onInput(event);
    this.originalText = this.hiddenTextarea.value;
  }

  enterEditing(e?: TPointerEvent): any {
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
      (<any>this)._textBeforeEdit = this.text;

      (<any>this)._tick();
      this.fire('editing:entered');
      this._fireSelectionChanged();
      if (!this.canvas) {
        return this;
      }
      this.canvas.fire('text:editing:entered', { target: this, e } as any);
      this.canvas.requestRenderAll();

    }
    return this;
  }

  // @ts-ignore
  toObject(propertiesToInclude?: string[]) {
    // @ts-ignore
    return super.toObject([
      'originalText',
      // 'elementKey',
    ].concat(propertiesToInclude || []));
  }
}
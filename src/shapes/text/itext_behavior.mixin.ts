import { extend, cloneDeep as clone } from 'lodash';
import * as fabric from 'fabric';
import { TPointerEvent } from 'EventTypeDefs';

const iTextBehavior: any = {
  // enterEditing(e?: TPointerEvent) {
  //   if (this.isEditing || !this.editable) {
  //     return;
  //   }
  //   if (this.canvas) {
  //     this.canvas.calcOffset();
  //     this.canvas.textEditingManager.exitTextEditing();
  //   }

  //   this.isEditing = true;

  //   this.initHiddenTextarea();
  //   this.hiddenTextarea!.focus();
  //   this.hiddenTextarea!.value = this.text || '';
  //   this.hiddenTextarea.style.paddingTop = '0';
  //   this._updateTextarea();
  //   this._saveEditingProps();
  //   this._setEditingProps();
  //   this._textBeforeEdit = this.text;
  //   this._tick();
  //   this.fire('editing:entered', e ? { e } : undefined);
  //   this._fireSelectionChanged();
  //   if (this.canvas) {
  //     this.canvas.fire('text:editing:entered', { target: this, e });
  //     this.canvas.requestRenderAll();
  //   }
  // },
}

extend(fabric.IText.prototype, iTextBehavior);
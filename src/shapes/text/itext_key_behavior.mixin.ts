import * as fabric from 'fabric';
import { extend } from 'lodash';

export const getDocumentFromElement = (el: HTMLElement) =>
  el.ownerDocument || null;

export const getFabricDocument = (): Document => fabric.getEnv().document;

const iTextKeyBehavior: any = {
  keysMap: {
    9:  'tabEditing',
    27: 'exitEditing',
    33: 'moveCursorUp',
    34: 'moveCursorDown',
    35: 'moveCursorRight',
    36: 'moveCursorLeft',
    37: 'moveCursorLeft',
    38: 'moveCursorUp',
    39: 'moveCursorRight',
    40: 'moveCursorDown',
  },

  keysMapRtl: {
    9:  'tabEditing',
    27: 'exitEditing',
    33: 'moveCursorUp',
    34: 'moveCursorDown',
    35: 'moveCursorLeft',
    36: 'moveCursorRight',
    37: 'moveCursorRight',
    38: 'moveCursorUp',
    39: 'moveCursorLeft',
    40: 'moveCursorDown',
  },

  copyPasteData: {},

  removeSelectedTextInHiddenTextarea() {
    const currentValue = this.hiddenTextarea.value;
    const selectedText = this.getSelectedText();
    const newValue = currentValue.replace(selectedText, ''.repeat(selectedText.length));
    this.hiddenTextarea.value = newValue;
    this.hiddenTextarea.selectionStart = this.selectionStart;
    this.hiddenTextarea.selectionEnd = this.selectionStart;
    this.copy();
  },

  // @ts-ignore
  async insertTextToHiddenTextarea() {
    const { copyPasteData } = fabric.getEnv();
    let data = '';
    try {
      data = await navigator.clipboard.readText();
      copyPasteData.copiedText = data;
    } catch (error) {
      data = copyPasteData.copiedText ?? '';
    }
    const currentValue = this.hiddenTextarea.value;
    const currentArray = currentValue.split('');
    let newArray = [...currentArray];
    newArray.splice(this.selectionStart, 0, data).flat();
    const newValue = newArray.join('');
    this.hiddenTextarea.value = newValue;
    this.hiddenTextarea.selectionStart = this.selectionStart + data?.length;
    this.hiddenTextarea.selectionEnd = this.selectionStart + data?.length;
  },

  // @ts-ignore
  onInput(this: this & { hiddenTextarea: HTMLTextAreaElement }, e: Event) {
    const fromPaste = this.fromPaste;
    this.fromPaste = false;
    e && e.stopPropagation();
    if (!this.isEditing) {
      return;
    }
    const updateAndFire = () => {
      this.updateFromTextArea();
      this.fire('changed');
      if (this.canvas) {
        // @ts-ignore
        // this.canvas.fire('text:changed', { target: this as unknown as IText });
        this.canvas.fire('text:changed', { target: this as unknown as any });
        this.canvas.requestRenderAll();
      }
    };
    if (this.hiddenTextarea.value === '') {
      this.styles = {};
      updateAndFire();
      return;
    }
    // decisions about style changes.
    console.log();
    const nextText = this._splitTextIntoLines(this.hiddenTextarea.value).graphemeText;
    const charCount = this._text.length;
    const nextCharCount = nextText.length;
    const selectionStart = this.selectionStart;
    const selectionEnd = this.selectionEnd;
    const selection = selectionStart !== selectionEnd;
    let copiedStyle: any[] | undefined,
      removedText,
      charDiff = nextCharCount - charCount,
      removeFrom,
      removeTo;

    const textareaSelection = this.fromStringToGraphemeSelection(
      this.hiddenTextarea.selectionStart,
      this.hiddenTextarea.selectionEnd,
      this.hiddenTextarea.value
    );
    const backDelete = selectionStart > textareaSelection.selectionStart;

    if (selection) {
      removedText = this._text.slice(selectionStart, selectionEnd);
      charDiff += selectionEnd - selectionStart;
    } else if (nextCharCount < charCount) {
      if (backDelete) {
        removedText = this._text.slice(selectionEnd + charDiff, selectionEnd);
      } else {
        removedText = this._text.slice(
          selectionStart,
          selectionStart - charDiff
        );
      }
    }
    const insertedText = nextText.slice(
      textareaSelection.selectionEnd - charDiff,
      textareaSelection.selectionEnd
    );
    if (removedText && removedText.length) {
      if (insertedText.length) {
        // let's copy some style before deleting.
        // we want to copy the style before the cursor OR the style at the cursor if selection
        // is bigger than 0.
        copiedStyle = this.getSelectionStyles(
          selectionStart,
          selectionStart + 1,
          false
        );
        // now duplicate the style one for each inserted text.
        copiedStyle = insertedText.map(() => copiedStyle![0]);
      }
      if (selection) {
        removeFrom = selectionStart;
        removeTo = selectionEnd;
      } else if (backDelete) {
        // detect differences between forwardDelete and backDelete
        removeFrom = selectionEnd - removedText.length;
        removeTo = selectionEnd;
      } else {
        removeFrom = selectionEnd;
        removeTo = selectionEnd + removedText.length;
      }
      this.removeStyleFromTo(removeFrom, removeTo);
    }
    if (insertedText.length) {
      const { copyPasteData } = fabric.getEnv();
      if (
        fromPaste &&
        insertedText.join('') === copyPasteData.copiedText &&
        !fabric.config.disableStyleCopyPaste
      ) {
        copiedStyle = copyPasteData.copiedTextStyle;

      }
      this.insertNewStyleBlock(insertedText, selectionStart, copiedStyle);
    }
    updateAndFire();
  },

  copy() {
    if (this.selectionStart === this.selectionEnd) {
      return;
    }
    const { copyPasteData } = fabric.getEnv();
    console.log(copyPasteData.copiedText, 'copyPasteData.copiedText...');
    copyPasteData.copiedText = this.getSelectedText();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(this.getSelectedText());
    }
    if (!fabric.config.disableStyleCopyPaste) {
      copyPasteData.copiedTextStyle = this.getSelectionStyles(
        this.selectionStart,
        this.selectionEnd,
        true
      );
    } else {
      copyPasteData.copiedTextStyle = undefined;
    }
    this._copyDone = true;
  },

  paste() {
    this.fromPaste = true;
  },
}

extend(fabric.IText.prototype, iTextKeyBehavior);
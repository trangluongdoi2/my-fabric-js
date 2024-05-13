import * as fabric from 'fabric';
import { MyTextbox } from './shapes/c-textbox';
import { MySection } from './shapes/c-section';

export class MyFabricCanvas extends fabric.Canvas {
  // @ts-ignore
  private _section: MySection;
  private objectsBySection: fabric.Object[] = [];
  constructor(element: HTMLCanvasElement | string, options?: any) {
    super(element, options);
  }
 
  // @ts-ignore
  async measureText(data: any) {
    const objectTextbox = await MyTextbox.fromObject(data)
      .then((object) => {
        try {
          const itext = new fabric.IText(object.text, {
            ...object,
          });
          object.width = itext.width;
          object.height = itext.height;
          return object;
        } catch (error) {
          console.log(error);
          return object;
        }
      })
    return objectTextbox;
  }

  private setObjects() {
    let _objects: fabric.Object[] = [];
    _objects = this.objectsBySection;
    this._objects = _objects;
  }

  addSection(section: MySection) {
    this._section = section;
    this._onObjectAdded && this._onObjectAdded(section);
    this.renderOnAddRemove && this.requestRenderAll();
    return this;
  }

  insertToSection(object: fabric.Object | any) {
    this.objectsBySection.push(object);
    this.setObjects();
    this._onObjectAdded && this._onObjectAdded(object);
    this.renderOnAddRemove && this.requestRenderAll();
    return this;
  }

  renderAll() {
    try {
      super.renderAll();
      return this;
    } catch (error) {
      console.log(error, 'error');
      return this;
    }
  }
}
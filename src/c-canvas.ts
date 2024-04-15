import * as fabric from 'fabric';
import { MyTextbox } from './shapes/c-textbox';

export class MyFabricCanvas extends fabric.Canvas {
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
}
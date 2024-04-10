import * as fabric from 'fabric';

export class MyFabricCanvas extends fabric.Canvas {
  constructor(element: HTMLCanvasElement | string, options?: any) {
    super(element, options);
  }
}
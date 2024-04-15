import * as fabric from 'fabric';
export declare class MyFabricCanvas extends fabric.Canvas {
    constructor(element: HTMLCanvasElement | string, options?: any);
    measureText(data: any): Promise<fabric.FabricText<Partial<fabric.TextProps>, fabric.SerializedTextProps, fabric.ObjectEvents>>;
}

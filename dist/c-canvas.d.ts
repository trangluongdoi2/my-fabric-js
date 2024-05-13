import * as fabric from 'fabric';
import { MySection } from './shapes/c-section';
export declare class MyFabricCanvas extends fabric.Canvas {
    private _section;
    private objectsBySection;
    constructor(element: HTMLCanvasElement | string, options?: any);
    measureText(data: any): Promise<fabric.FabricText<Partial<fabric.TextProps>, fabric.SerializedTextProps, fabric.ObjectEvents>>;
    private setObjects;
    addSection(section: MySection): this;
    insertToSection(object: fabric.Object | any): this;
    renderAll(): this;
}

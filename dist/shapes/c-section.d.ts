import * as fabric from 'fabric';
import { Canvas, TClassProperties } from '../type';
declare class MySection extends fabric.Rect {
    width: number;
    height: number;
    borderColorDefault: string;
    borderColorActive: string;
    DOUBLE_TAP_THRESHOLD: number;
    lastTapTime: any;
    _element: Canvas | any;
    constructor(options: Record<string, unknown>);
    static getDefaults(): {
        originX: string;
        originY: string;
        fill: string;
        visible: boolean;
        selectable: boolean;
        hoverCursor: string;
        borderColorDefault: string;
        borderColorActive: string;
        strokeWidth: number;
    };
    fillDefault(ctx: CanvasRenderingContext2D): void;
    _renderFill(ctx: CanvasRenderingContext2D): void;
    static fromObject(object: any, options?: any): Promise<import("fabric/dist/src/shapes/Object/Object").FabricObject<Partial<import("fabric/dist/src/shapes/Object/types/ObjectProps").ObjectProps>, fabric.SerializedObjectProps, fabric.ObjectEvents>>;
}
export declare const MySectionDefaultValues: Partial<TClassProperties<MySection>>;
export { MySection };

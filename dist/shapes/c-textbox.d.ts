import { TPointerEvent } from 'EventTypeDefs';
import * as fabric from 'fabric';
import { TClassProperties } from '../type';
export declare const textBoxDefaultValues: Partial<TClassProperties<MyTextbox>>;
export declare class MyTextbox extends fabric.Textbox {
    static stateProperties: string[];
    static cacheProperties: string[];
    static ownDefaults: Record<string, any>;
    static getDefaults(): {
        [x: string]: any;
    };
    originalText?: string;
    placeholder?: string;
    constructor(text: string, options?: any);
    render(ctx: CanvasRenderingContext2D): void;
    isEdittingEmptyText(): boolean;
    _setOpacity(ctx: CanvasRenderingContext2D): void;
    get text(): string;
    set text(value: string);
    onInput(event: any): void;
    enterEditing(e?: TPointerEvent): any;
    toObject(propertiesToInclude?: string[]): Pick<Omit<Partial<fabric.TextboxProps> & fabric.TClassProperties<this>, keyof fabric.SerializedTextboxProps>, "dynamicMinWidth" | "_wordJoiners" | "noScaleCache" | "snapAngle" | "snapThreshold" | "lockMovementX" | "lockMovementY" | "lockRotation" | "lockScalingX" | "lockScalingY" | "lockSkewingX" | "lockSkewingY" | "lockScalingFlip" | "cornerSize" | "touchCornerSize" | "transparentCorners" | "cornerColor" | "cornerStrokeColor" | "cornerStyle" | "cornerDashArray" | "hasControls" | "borderColor" | "borderDashArray" | "borderOpacityWhenMoving" | "borderScaleFactor" | "hasBorders" | "selectionBackgroundColor" | "selectable" | "evented" | "perPixelTargetFind" | "activeOn" | "hoverCursor" | "moveCursor" | "canvas" | "minScaleLimit" | "includeDefaultValues" | "excludeFromExport" | "objectCaching" | "inverted" | "absolutePositioned" | "centeredRotation" | "centeredScaling" | "padding" | Exclude<{ [K in keyof this]: this[K] extends Function ? never : K; }[keyof this], keyof fabric.SerializedTextboxProps>> & fabric.SerializedTextboxProps;
}

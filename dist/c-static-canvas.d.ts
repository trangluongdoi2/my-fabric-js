import * as fabric from 'fabric';
export declare class CorjlStaticCanvas extends fabric.StaticCanvas {
    renderAll(): this;
    _searchPossibleTargets(objects: fabric.Object[], pointer: fabric.Point): fabric.FabricObject<Partial<fabric.FabricObjectProps>, fabric.SerializedObjectProps, fabric.ObjectEvents> | undefined;
}

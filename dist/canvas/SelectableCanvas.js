import { Canvas } from 'fabric';
import extend from 'lodash/extend';
const SelectableCanvasOverrides = {
    _chooseObjectsToRender() {
        const activeObject = this._activeObject;
        let objectsToRender = [];
        if (!this.preserveObjectStacking && activeObject) {
            objectsToRender = [...this._objects].filter((object) => !object.group && object !== activeObject).concat(activeObject);
        }
        else {
            objectsToRender = [...this._objects];
        }
        objectsToRender.unshift(this._section);
        console.log(objectsToRender, 'objectsToRender...');
        return objectsToRender;
    },
    /**
     * Renders both the top canvas and the secondary container canvas.
     */
    renderAll() {
        this.cancelRequestedRender();
        if (this.destroyed) {
            return;
        }
        if (this.contextTopDirty && !this._groupSelector && !this.isDrawingMode) {
            this.clearContext(this.contextTop);
            this.contextTopDirty = false;
        }
        if (this.hasLostContext) {
            this.renderTopLayer(this.contextTop);
            this.hasLostContext = false;
        }
        this.renderCanvas(this.getContext(), this._chooseObjectsToRender());
    }
};
extend(Canvas.prototype, SelectableCanvasOverrides);

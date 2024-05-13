import { __awaiter } from "tslib";
import * as fabric from 'fabric';
import { MyTextbox } from './shapes/c-textbox';
export class MyFabricCanvas extends fabric.Canvas {
    constructor(element, options) {
        super(element, options);
        this.objectsBySection = [];
    }
    // @ts-ignore
    measureText(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const objectTextbox = yield MyTextbox.fromObject(data)
                .then((object) => {
                try {
                    const itext = new fabric.IText(object.text, Object.assign({}, object));
                    object.width = itext.width;
                    object.height = itext.height;
                    return object;
                }
                catch (error) {
                    console.log(error);
                    return object;
                }
            });
            return objectTextbox;
        });
    }
    setObjects() {
        let _objects = [];
        _objects = this.objectsBySection;
        this._objects = _objects;
    }
    addSection(section) {
        this._section = section;
        this._onObjectAdded && this._onObjectAdded(section);
        this.renderOnAddRemove && this.requestRenderAll();
        return this;
    }
    insertToSection(object) {
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
        }
        catch (error) {
            console.log(error, 'error');
            return this;
        }
    }
}

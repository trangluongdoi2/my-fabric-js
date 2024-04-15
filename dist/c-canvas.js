import { __awaiter } from "tslib";
import * as fabric from 'fabric';
import { MyTextbox } from './shapes/c-textbox';
export class MyFabricCanvas extends fabric.Canvas {
    constructor(element, options) {
        super(element, options);
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
}

import * as fabric from 'fabric';
import { TClassProperties } from '../type';
export declare const textBoxDefaultValues: Partial<TClassProperties<CorjlTextbox>>;
export declare class CorjlTextbox extends fabric.Textbox {
    static stateProperties: string[];
    static cacheProperties: string[];
    static ownDefaults: Record<string, any>;
    static getDefaults(): {
        [x: string]: any;
    };
    constructor(text: string, options?: any);
}

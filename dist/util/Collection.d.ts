import type { Object as FabricObject, ActiveSelection, Group } from 'fabric';
export declare const isCollection: (fabricObject?: FabricObject) => fabricObject is Group | ActiveSelection;
export declare const isActiveSelection: (fabricObject?: FabricObject) => fabricObject is ActiveSelection;

import type { Object as FabricObject, ActiveSelection, Group } from 'fabric';

export const isCollection = (
  fabricObject?: FabricObject
): fabricObject is Group | ActiveSelection => {
  return !!fabricObject && Array.isArray((fabricObject as Group)._objects);
};

export const isActiveSelection = (
  fabricObject?: FabricObject
): fabricObject is ActiveSelection => {
  return !!fabricObject && fabricObject.type === 'activeSelection';
};
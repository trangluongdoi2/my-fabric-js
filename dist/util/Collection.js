export const isCollection = (fabricObject) => {
    return !!fabricObject && Array.isArray(fabricObject._objects);
};
export const isActiveSelection = (fabricObject) => {
    return !!fabricObject && fabricObject.type === 'activeSelection';
};

import * as fabric from 'fabric';
import extend from 'lodash/extend';

const _toObject = fabric.Object.prototype.toObject;

// fabric.Object.getDefaults = () => ({
  // ...fabric.Object.ownDefaults,
  // transparentCorners: false,
  // cornerColor: '#a9a9a8',
  // cornerStyle: 'circle',
  // borderColor: '#d2d2d2',
  // cornerSize: 12,
  // borderScaleFactor: 1,
  // borderOpacityWhenMoving: 1,
  // borderDashArray: [4,4],
  // snapAngle: 1,
  // LIMIT_FONTSIZE_FOR_RESOLUTION: 1500,
  // paintFirst: 'stroke',
// });

const ObjectOverrides: any = {
  toObject(propertiesToInclude: string[] = []) {
    return _toObject.call(this, ['elementKey'].concat(propertiesToInclude));
  },
}

extend(fabric.Object.prototype, ObjectOverrides);
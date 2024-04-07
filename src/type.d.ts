import * as fabric from 'fabric';
import { TPointerEvent } from 'EventTypeDefs';

export type AllowMouseCursor = 'default' | 'grab' | 'zoom-in' | 'zoom-ount' | 'not-allowed' | 'pointer';

export interface ICanvasOptions extends fabric.ICanvasOptions {
  transparent: boolean;
}

export interface Canvas extends fabric.Canvas {
  width: number;
  height: number;
  canPanning: boolean;
  bleed: any;
  nonEditable?: boolean;
  contextTop: CanvasRenderingContext2D;
  objectAdditions: fabric.Object[];
  viewportTransform: number[];
  isSnap: boolean;
  transparent?: boolean;
  _currentTransform: Function | object | null;
  _groupSelector?:any;
  _hasITextHandlers: boolean;
  _mouseUpITextHandler: any;
  _iTextInstances: fabric.IText | null;
  contextContainer: CanvasRenderingContext2D;
  forceDefaultCursor?:boolean;
  cacheCanvasEl:HTMLCanvasElement;
  lowerCanvasEl:HTMLCanvasElement;
  upperCanvasEl:HTMLCanvasElement;
  toolsCanvasEl:HTMLCanvasElement;
  toolsContext:CanvasRenderingContext2D;
  contextCache:CanvasRenderingContext2D
  wrapperEl:HTMLElement;
  getSection(index): fabric.Section;
  getSectionActive(): fabric.Section;
  isViewOnly(): boolean;
  isNonEditable(): boolean;
  getObjectsBySection(sectionIndex: number): fabric.Object[];
  insertObjectAddition(object: fabric.Object, index: number): fabric.Canvas;
  removeObjectAddition(objects: fabric.Object[]): fabric.Canvas;
  _shouldRender(object: fabric.Object): Boolean;
  _shouldGroup(e: MouseEvent, object: fabric.Object): Boolean;
  _onMouseUp(e: MouseEvent): Void;
  _onMouseDown(e: MouseEvent): Void;
  __onMouseMove(e: MouseEvent): Void;
  __onMouseUp(e: MouseEvent): Void;
  setCenterObject(object: fabric.Object, center: Point);
  _handleEvent(e: MouseEvent, eventType: string, button?: any, isClick?: boolean)
  _normalizePointer(object: fabric.Object, pointer: { x: number; y: number }): fabric.Point;
  _checkTarget(pointer: { x: number; y: number }, obj: fabric.Object, globalPointer: { x: number; y: number }): boolean;
  _discardActiveObject(e: Event, object: fabric.Object): boolean;
  checkClick(e: MouseEvent, value: number):boolean|number;
  getActualSizeCanvas(): any;
  getCenterCanvas(): any;
  toSVG(object: fabric.Object): string;
  exportToSVG(): string;
  renderContextTop():void;
  _createCanvasElement():HTMLCanvasElement;
  _initWrapperElement():void;
  _initEventListeners():void;
  _initRetinaScaling():void;
  _createUpperCanvas():void;
  _copyCanvasStyle(fromEl:HTMLCanvasElement, toEl:HTMLCanvasElement);
  _applyCanvasStyle(canvas:HTMLCanvasElement);
  _isRetinaScaling():boolean;
  __initRetinaScaling(scaleRatio:numbber, canvas:HTMLCanvasElement, context:CanvasRenderingContext2D);
  _setBackstoreDimension(prop:string, value:number):fabric.Canvas;
  _setCssDimension(prop:string, value:number):fabric.Canvas;
  renderTopLayer(ctx:CanvasRenderingContext2D);
  getArtboardRect():{top:number, left:number, width:number, height:number};
}

export interface StaticCanvas extends fabric.StaticCanvas {
  lowerCanvasEl:HTMLCanvasElement;
  exportToSVG(): string;
}

export interface DimensionsCanvas {
  width: number;
  height: number;
}

export interface StrokeOption {
  color: string;
  reSizeCanvas: number;
  strokeWidth: number;
}

export interface Gradient {
  gradientTransform?: number[];
  deg: number;
  colorStops: Array<{ offset?: number; color: string; opacity?: number }>;
  gradientUnits: 'percentage' | 'pixels';
  type: 'linear' | 'radial';
}

export interface CurvedOption {
  enabled?: boolean;
  type: 'arc' | 'circle';
  degrees: number;
}

export interface SvgStroke {
  enabled?: boolean;
  color?: string;
  width?: number;
}

export interface GridOptions {
  distance?: number;
  widthGrid?: number;
  param?: {
    stroke?: string;
    strokeWidth?: number;
    selectable?: boolean;
    strokeDashArray?: number[];
  };
}

export interface IBaseFilter extends fabric.IBaseFilter{
  applyTo(pipelineState:any):void;
  applyCustomFilterTo?:{(pipelineState: any): void};
}

export interface BaseFilter {
  type?: string;
  saturation?: number;
  brightness?: number;
  rotation?: number;
  contrast?: number;
  sepia?: number;
  blur?: number;
}

export interface SavedProps {
  borderColor?: string;
  defaultCursor?: string;
  hasControls?: boolean;
  hoverCursor?: string | null;
  lockMovementX?: boolean;
  lockMovementY?: boolean;
  moveCursor?: string;
  selectable?: boolean;
}

export interface CurrentTickState {
  isAborted: boolean;
  abort: Function;
}

export interface StyleMap {
  line: number;
  offset: number;
}

export interface GraphemeBox {
  lineWidth: number;
  wordWidth: number;
  spaceWidth: number;
}

export interface ElementSettings{
  requireText?: boolean;
  lockSize?: boolean;
  lockFont?: boolean;
  lockText?: boolean;
  lockStyle?: boolean;
  lockMulticolor?: boolean;
  allowCustomerBold?: boolean,
  allowCustomerItalic?: boolean,
  allowCustomerUnderline?: boolean,
  replaceWithDesignerImage?: boolean,
  lockSVGColors?: false,
  minimumRequiredCharacter?: {
    enabled:boolean,
    value:number,
  },
  maximumRequiredCharacter?:{
    enabled:boolean,
    value:number,
  },
  [key:string]:boolean|number,
}
export interface ProtectionOptions {
  elementSettings?: ElementSettings
}

export interface SelectedText {
  selectionEnd: number;
  selectionStart: number;
  lineStart: number;
  lineEnd: number;
}

export interface ITextOptions extends fabric.ITextOptions {
  degrees: number;
  originalText?: string;
  uppercase?: boolean;
  textOptions?: TextOptions;
  curved?: fabric.CurvedText;
}

export interface IText extends fabric.IText, ITextOptions, CorjlObject {
  placeholder?: string;
  wrapText?: boolean;
  autoWrapText?: boolean;
  bulletStyles?: { [key: number]: { type: 'ordered' | 'bulleted'; level: number; } | undefined };
  _dynamicWidth?: number;
  outsideEditing?: boolean;
  _timeoutEvent?: NodeJS.Timeout;
  canvas: Canvas;
  _getInfoTextBox(): { xMin: number; yMax: number; width: number; height: number };
  _getLeftOffsetText(): number;
  getIndentSpace(lineIndex: number): number;
  _splitTextIntoLines(text: string, currentLineIndex?: number): { _unwrappedLines: string[], lines: lines, graphemeText: newText, graphemeLines: newLines };
}

export interface Textbox extends fabric.Textbox, IText {
  _wrapText(lines: string[], desiredWidth: number, currentLineIndex?: number): string[][];
  _renderTextDecoration(ctx:CanvasRenderingContext2D, decoration:string);
  _renderTextLinesBackground(ctx:CanvasRenderingContext2D);
  canvas: Canvas;
  _lastDynamicText?:string;
  setStyles(styles:any, start?:number, end?:number,asset?:{selected:string, available:string[]}):fabric.Textbox;
}

export interface IUtil extends fabric.IUtil {
  addTransformToObject(object: fabric.Object, groupMatrix: any[]);
  applyTransformToObject(object: fabric.Object, groupMatrix: any[]);
  isTouchEvent(e:Event),
  sin(radians:number):number;
  cos(radians:number):number;
}

export type BackgroundType = 'image' | 'color';

export type BackgroundBehavior = 'fill-canvas' | 'tile-image' | 'crop-to-fill' | 'stretch-to-fit' | 'center';

export interface Crop {
  width: number;
  height: number;
  left: number;
  top: number;
}

export type IShapeSubtype =
  | 'line'
  | 'rectangle'
  | 'circle'
  | 'triangle'
  | 'heart'
  | 'five-point-star'
  | 'six-point-star'
  | 'bang-point-star'
  | 'paw-print'
  | 'arrow'
  | 'gem'
  | 'diamond-cards'
  | 'diamond-gem'
  | 'tag'
  | 'quatrefoil'
  | 'arch';

export interface IShapeOptions extends fabric.IObjectOptions {
  subtype?: IShapeSubtype;
}
export interface CorjlObject extends fabric.Object {
  section?: number;
  sectionIndex?: number;
  active?: boolean;
  gradient?: fabric.Gradient;
  outerGlow?: fabric.Shadow;
  subTargetCheck?: boolean;
  _outerGlowCacheCtx?:CanvasRenderingContext2D;
  _cacheCanvas?:HTMLCanvasElement;
  // canvas: Canvas;
  isNotVisible(): boolean;
  findBySection(sectionIndex?: number): fabric.Object | undefined;
  degToRad(degrees: number): number;
  renderInSection(ctx: CanvasRenderingContext2): void;
  _setOuterGlow(ctx:CanvasRenderingContext2D, deviation = 1):void;
  _setShadow(ctx: CanvasRenderingContext2D, object?: fabric.Object): any;
  isNotVisible(): boolean;
  renderCache(ctx: CanvasRenderingContext2D): void;
  renderCache(): void;
  _renderOuterGlow(ctx:CanvasRenderingContext2D):boolean|undefined;
  _removeOuterGlow(ctx:CanvasRenderingContext2D);
  _setupCompositeOperation(ctx: CanvasRenderingContext2D): void;
  _setOpacity(ctx: CanvasRenderingContext2D): void;
  _removeCacheCanvas(): void;
  _setFillStyles(ctx: CanvasRenderingContext2D, decl: any): void;
  _calculateCurrentDimensions(): {x: number; y: number };
  callSuper(functionName:string, ...params:any);
  _calcTranslateMatrix():number[];
  rotatePreventLock(angle:number):fabric.Object;
  rotateByStep(stepAngle = 45): fabric.Object;
  alignToSection(direction:string, point?:fabric.Point):fabric.Object|undefined;
  alignToEdges?(direction:string):fabric.Object;
  distribute?(orientation:string):fabric.Object;
  reflect(orientation:string);
}

export interface Shape extends fabric.Object {}

export interface Section extends fabric.Object {
  section: number;
}

export interface Group extends fabric.Group {
  subTarget?: fabric.Object;
}

export interface IGroupOptions extends fabric.IGroupOptions {
  centerPoint?:fabric.Point
  restoreObjectsCooords?: boolean;
}


export interface SvgColor {
  color: string;
  indexes: number[];
}

export interface SvgColors {
  fill: Array<fabric.SvgColor>;
  stroke: Array<fabric.SvgColor>;
}

export interface PointZoom {
  x: number;
  y: number;
}

export interface Svg extends CorjlImage {
}

export interface SvgCorrectDims {
  width: number;
  height: number;
}

export interface TextPath {
  aCoords: {
    tl: Point;
    tr: Point;
    bl: Point;
    br: Point;
  };
  dirty: boolean;
  fill: string;
  height: number;
  left: number;
  lineCoords: {
    tl: Point;
    tr: Point;
    bl: Point;
    br: Point;
  };
  oCoords: {
    ml: Point;
    mr: Point;
    mb: Point;
    mt: Point;
    tl: Point;
  };
  path: any[];
  pathOffset: {
    x: number;
    y: number;
  };
  scaleX: number;
  segmentsInfo: any[];
  stroke: string;
  strokeUniform: boolean;
  strokeWidth: number;
  top: number;
  width: number;
}

export interface RulerSettings {
  enable: boolean;
  position: 'inside' | 'outside';
  margin: number;
  size: number;
  fontFamily: string;
  fontSize: number;
  width: number;
  height: number;
  ppi: number;
  unit: 'pixels' | 'inches' | 'centimeters' | 'millimeters';
  fill: string;
}

export interface BleedSettings {
  size: number;
  width: number;
  height: number;
}
export interface SVGColor {
  color:string,
  isTransparent?:boolean,
  isDeleted?:boolean
}

export interface IPoint {
  x: number;
  y: number;
}

export type TCrossOrigin = '' | 'anonymous' | 'use-credentials' | null;
export type TOriginX = 'center' | 'left' | 'right' | number;
export type TOriginY = 'center' | 'top' | 'bottom' | number;
export type TCornerPoint = {
    tl: Point;
    tr: Point;
    bl: Point;
    br: Point;
  };

export type TAxis = 'x' | 'y';

export type TAxisKey<T extends string> = `${T}${Capitalize<TAxis>}`;

export interface IObjectOptions {
  type?: string | undefined;
  originX?: string | undefined;
  originY?: string | undefined;
  top?: number | undefined;
  left?: number | undefined;
  width?: number | undefined;
  height?: number | undefined;
  scaleX?: number | undefined;
  scaleY?: number | undefined;
  flipX?: boolean | undefined;
  flipY?: boolean | undefined;
  opacity?: number | undefined;
  angle?: number | undefined;
  skewX?: number | undefined;
  skewY?: number | undefined;
  cornerSize?: number | undefined;
  transparentCorners?: boolean | undefined;
  hoverCursor?: string | undefined;
  moveCursor?: string | undefined;
  padding?: number | undefined;
  borderColor?: string | undefined;
  borderDashArray?: number[] | undefined;
  cornerColor?: string | undefined;
  cornerStrokeColor?: string | undefined;
  cornerStyle?: 'rect' | 'circle' | undefined;
  cornerDashArray?: number[] | undefined;
  centeredScaling?: boolean | undefined;
  centeredRotation?: boolean | undefined;
  fill?: string | Pattern | Gradient | undefined;
  fillRule?: string | undefined;
  globalCompositeOperation?: string | undefined;
  backgroundColor?: string | undefined;
  selectionBackgroundColor?: string | undefined;
  stroke?: string | undefined;
  strokeWidth?: number | undefined;
  strokeDashArray?: number[] | undefined;
  strokeDashOffset?: number | undefined;
  strokeLineCap?: string | undefined;
  strokeLineJoin?: string | undefined;
  strokeMiterLimit?: number | undefined;
  shadow?: Shadow | string | undefined;
  borderOpacityWhenMoving?: number | undefined;
  borderScaleFactor?: number | undefined;
  minScaleLimit?: number | undefined;
  selectable?: boolean | undefined;
  evented?: boolean | undefined;
  visible?: boolean | undefined;
  hasControls?: boolean | undefined;
  hasBorders?: boolean | undefined;
  hasRotatingPoint?: boolean | undefined;
  rotatingPointOffset?: number | undefined;
  perPixelTargetFind?: boolean | undefined;
  includeDefaultValues?: boolean | undefined;
  lockMovementX?: boolean | undefined;
  lockMovementY?: boolean | undefined;
  lockRotation?: boolean | undefined;
  lockScalingX?: boolean | undefined;
  lockScalingY?: boolean | undefined;
  lockUniScaling?: boolean | undefined;
  lockSkewingX?: boolean | undefined;
  lockSkewingY?: boolean | undefined;
  lockScalingFlip?: boolean | undefined;
  excludeFromExport?: boolean | undefined;
  objectCaching?: boolean | undefined;
  statefullCache?: boolean | undefined;
  noScaleCache?: boolean | undefined;
  strokeUniform?: boolean | undefined;
  dirty?: boolean | undefined;
  paintFirst?: string | undefined;
  stateProperties?: string[] | undefined;
  cacheProperties?: string[] | undefined;
  clipPath?: fabric.Object | undefined;
  inverted?: boolean | undefined;
  absolutePositioned?: boolean | undefined;
  name?: string | undefined;
  data?: any;
  oCoords?: { tl: Point; mt: Point; tr: Point; ml: Point; mr: Point; bl: Point; mb: Point; br: Point; mtr: Point } | undefined;
  aCoords?: { bl: Point; br: Point; tl: Point; tr: Point } | undefined;
  matrixCache?: any;
  ownMatrixCache?: any;
  snapAngle?: number | undefined;
  snapThreshold?: null | number | undefined;
  group?: fabric.Group | undefined;
  canvas?: Canvas | undefined;
}

// export interface IObjectOptions extends CorjlObject {
//   [key:string]: any,
// }
export interface ILineOptions extends IObjectOptions {
  x1?: number | undefined;
  x2?: number | undefined;
  y1?: number | undefined;
  y2?: number | undefined;
}

export interface IEvent<E extends Event = Event> {
  e: E;
  target?: fabric.Object | undefined;
  subTargets?: fabric.Object[] | undefined;
  selected?: fabric.Object[] | undefined;
  deselected?: fabric.Object[] | undefined;
  action?: string | undefined;
  button?: number | undefined;
  isClick?: boolean | undefined;
  pointer?: Point | undefined;
  absolutePointer?: Point | undefined;
  transform?: Transform | undefined;
  currentTarget?: fabric.Object | undefined;
  currentSubTargets?: fabric.Object[] | undefined;
}

export type LoadImageOptions = {
  /**
   * see https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal
   */
  signal?: AbortSignal;
  /**
   * cors value for the image loading, default to anonymous
   */
  crossOrigin?: TCrossOrigin;
};

export type TOnAnimationChangeCallback<T, R = void> = (
  value: T,
  valueProgress: number,
  durationProgress: number
) => R;

type TSaveStateOptions = {
  propertySet: string;
  stateProperties: string[];
};
export type TMat2D = [number, number, number, number, number, number];

export type TSize = {
  width: number;
  height: number;
};

// eslint-disable-next-line @typescript-eslint/ban-types
type TNonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];
export type TClassProperties<T> = Pick<T, TNonFunctionPropertyNames<T>>;

export type TCopyPasteData = {
  copiedText?: string;
  copiedStyle?: Record<string, string>;
};
export type TFabricEnv = {
  document: Document;
  window: Window;
  isTouchSupported: boolean;
  isLikelyNode: boolean;
  nodeCanvas?: fabric.Canvas;
  jsdomImplForWrapper?: any;
  copyPasteData: TCopyPasteData;
};

export type BulletStyles = Record<[key: string | number], any>;

export type TextStyleDeclaration = Record<string, any>;

export type TextStyle = {
  [line: number | string]: { [char: number | string]: TextStyleDeclaration };
};

export type TSVGReviver = (markup: string) => string;

export type GuideAddLineIcon = {
  width: number;
  height: number;
  iconTranslate: number;
  iconPath: Path2D;
  pathString: string;
}

export type GuideTriangleIcon = {
  horizontal: {
    width: number;
    height: number;
    iconPath: Path2D;
    pathString: string; 
  },
  vertical: {
    width: number;
    height: number;
    iconPath: Path2D;
    pathString: string;
  },
  hoverToIconType: 'horizontal' | 'vertical' | undefined;
  clickAndDragIconType: 'horizontal' | 'vertical' | undefined;
}

export type GraphemeBBox<onPath = false> = {
  width: number;
  height: number;
  kernedWidth: number;
  left: number;
  deltaY: number;
} & (onPath extends true
  ? {
      // on path
      renderLeft: number;
      renderTop: number;
      angle: number;
    }
  : Record<string, never>);
export type TSize = {
  width: number;
  height: number;
};

export type TBBox = {
  left: number;
  top: number;
} & TSize;


// export type TAxisKey<T extends string> = `${T}${Capitalize<TAxis>}`;

export interface ClipTarget extends fabric.Object {
  clipChild: fabric.Rect
}

export type ClipCoords = {
  left: number;
  top: number;
  width: number;
  height: number;
  angle: number;
  flipX: number;
  flipY: number
  centerPoint: fabric.Point;
  clipPath: fabric.Object;
}


declare module 'fabric' {
  interface Textbox extends fabric.Textbox {
    enterEditing(e?: TPointerEvent):void;
  }
  interface Object extends fabric.Object {
    flip(props: 'flipX' | 'flipY', value:boolean):fabric.Object;
    animateFlip(props: 'flipX' | 'flipY', value:boolean):fabric.Object;
    reflect(orientation: string):void;
    animationObject?:fabric.Object;
    _setOriginToOrigin(toOriginX:string|number, toOriginY:string|number);
    _setOuterGlow(ctx:CanvasRenderingContext2D);
    _removeOuterGlow(ctx:CanvasRenderingContext2D);
  }
}
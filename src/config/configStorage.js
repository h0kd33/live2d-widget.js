
function sampleDisplayFunc() {
  return {
    'displayHeight': null,
    'displayMotion': null,
    'displayOffsetH': null,
    'displayOffsetV': null,
    'displayOpacityDefault': null,
    'displayOpacityOnHover': null,
    'displaySampleLevel': null,
    'displayShow': null,
    'displaySide': null,
    'displayWidth': null,
  };
}

/**
 * @typedef {Object} Config
 * @desc The object structure for config. Default config sees [dist/configStorage.js](https://cdn.jsdelivr.net/npm/live2d-widget/dist/configStorage.js).
 * @property {String}   modelJsonPath="https://cdn.jsdelivr.net/npm/live2d-widget-model-shizuku/assets/shizuku.model.json"  Specifies the path to `.model.json`.  模型`.model.json`文件路径 <br> eg. `"/live2d/miku.model.json"`<br>`"https://test.com/live2d/miku.model.json"`<br>`"http://test.com/live2d/miku.model.json"`<br>`"file:///d:/live2d/miku.model.json"`
 * @property {String}   displayWidth="150px"         Specifies the width of actual widget element.  插件宽度 <br> eg. `150` == `"150px"`, `"35%"`, `"auto"` <br> *used as canvas.style.width.*
 * @property {String}   displaySide="right"          Specifies left or right side to show.  左右侧显示位置 <br> eg. `"left"`, `"right"`
 * @property {String}   displayHeight="300px"        Specifies the height of actual widget element.  插件高度 <br> eg. `300` == `"300px"`, `"35%"`, `"auto"` <br> *used as canvas.style.height.*
 * @property {Number}   reactOpacityOnHover  OnHover opacity.  鼠标移上透明度
 * @property {Number}   reactOpacityDefault  Default opacity.  默认透明度
 * @property {Number}   modelScale           Scale rate between model and canvas.  画布所占缩放比例
 * @property {Number}   modelHeadPosV        Vertical position of model's head.  模型头部纵坐标
 * @property {Number}   modelHeadPosH        Horizontal position of model's head.  模型头部横坐标
 * @property {Number}   mobileScale          Scale rate on mobile device.  移动设备上缩放比例
 * @property {Number}   displaySampleLevel   Sampling level.  采样等级
 * @property {Number}   displayOffsetV       Vertical offset of canvas.  canvas垂直偏移
 * @property {Number}   displayOffsetH       Horizontal offset of canvas.  canvas水平偏移
 * @property {Boolean}  mobileMotion         If enable motion reaction on mobile devices.  是否在移动设备上开启运动响应
 * @property {Boolean}  devMouseLog=false          If shows mouse log.  显示鼠标日志
 * @property {Boolean}  devLog=false               If shows log.  显示日志
 */

const defaultConfig = {
  'devLog': false,
  'devMouseLog': false,
  'displayFunc': sampleDisplayFunc,
  'displayHeight': '300px',
  'displayMotion': true,
  'displayOffsetH': 0,
  'displayOffsetV': -20,
  'displayOpacityDefault': 0.7,
  'displayOpacityOnHover': 0.2,
  'displaySampleLevel': 2,
  'displayShow': true,
  'displaySide': 'right',
  'displayWidth': '150px',
  'modelHeadPosH': 0.5,
  'modelHeadPosV': 0.618,
  'modelJsonPath': 'https://cdn.jsdelivr.net/npm/live2d-widget-model-shizuku/assets/shizuku.model.json',
  'z-index': 2333,
}

const configType = {
  'devLog': 'boolean',
  'devMouseLog': 'boolean',
  'displayHeight': 'string',
  'displayOffsetH': 'number',
  'displayOffsetV': 'number',
  'displaySampleLevel': 'number',
  'displaySide': 'string',
  'displayWidth': 'string',
  'mobileMotion': 'boolean',
  'mobileScale': 'number',
  'mobileShow': 'boolean',
  'modelHeadPosH': 'number',
  'modelHeadPosV': 'number',
  'modelJsonPath': 'string',
  'modelScale': 'number',
  'reactOpacityDefault': 'number',
  'reactOpacityOnHover': 'number',
};

export {
  defaultConfig,
};
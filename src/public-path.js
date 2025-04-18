/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-04-11 15:02:58
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-04-18 17:56:53
 * @FilePath: /micro-child-vue2-job/src/public-path.js
 * @Description: 微前端环境判断，设置webpack publicPath
 */

if (window.__MICRO_APP_ENVIRONMENT) {
  // 微前端环境 
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__MICRO_APP_PUBLIC_PATH || '/';
} else {
    // 独立运行环境
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = process.env.BASE_URL;
}

if (window.__POWERED_BY_QIANKUN__) {
  // 动态设置 webpack publicPath，防止资源加载出错
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} 
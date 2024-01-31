/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["$"] = factory();
	else
		root["$"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addDOMContent.js":
/*!******************************!*\
  !*** ./src/addDOMContent.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addDOMContent(string) {\n  var node = document.createElement('p');\n  node.textContent = string;\n  document.body.appendChild(node);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDOMContent);\n\n//# sourceURL=webpack://$/./src/addDOMContent.js?");

/***/ }),

/***/ "./src/capital.js":
/*!************************!*\
  !*** ./src/capital.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction capital(string) {\n  return string.substring(0, 1).toUpperCase() + string.substring(1);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (capital);\n\n//# sourceURL=webpack://$/./src/capital.js?");

/***/ }),

/***/ "./src/customBlock.js":
/*!****************************!*\
  !*** ./src/customBlock.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction customBlock() {\n  return \"<div class=\\\"overflow-hidden bg-white py-32\\\">\\n    <div class=\\\"mx-auto max-w-7xl px-6 lg:flex lg:px-8\\\">\\n      <div class=\\\"mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8\\\">\\n        <div class=\\\"lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8\\\">\\n          <h2 class=\\\"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl\\\">Our people</h2>\\n          <p class=\\\"mt-6 text-xl leading-8 text-gray-600\\\">Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.</p>\\n          <p class=\\\"mt-6 text-base leading-7 text-gray-600\\\">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.</p>\\n          <div class=\\\"mt-10 flex\\\">\\n            <a href=\\\"#\\\" class=\\\"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\\\">Join our team <span aria-hidden=\\\"true\\\">&rarr;</span></a>\\n          </div>\\n        </div>\\n        <div class=\\\"flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents\\\">\\n          <div class=\\\"w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end\\\">\\n            <img src=\\\"https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80\\\" alt=\\\"\\\" class=\\\"aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover\\\">\\n          </div>\\n          <div class=\\\"contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8\\\">\\n            <div class=\\\"order-first flex w-64 flex-none justify-end self-end lg:w-auto\\\">\\n              <img src=\\\"https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80\\\" alt=\\\"\\\" class=\\\"aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover\\\">\\n            </div>\\n            <div class=\\\"flex w-96 flex-auto justify-end lg:w-auto lg:flex-none\\\">\\n              <img src=\\\"https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80\\\" alt=\\\"\\\" class=\\\"aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover\\\">\\n            </div>\\n            <div class=\\\"hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none\\\">\\n              <img src=\\\"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80\\\" alt=\\\"\\\" class=\\\"aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover\\\">\\n            </div>\\n          </div>\\n        </div>\\n      </div>\\n    </div>\\n  </div>\";\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customBlock);\n\n//# sourceURL=webpack://$/./src/customBlock.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addDOMContent: () => (/* reexport safe */ _addDOMContent__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   capital: () => (/* reexport safe */ _capital__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   customBlock: () => (/* reexport safe */ _customBlock__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _capital__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capital */ \"./src/capital.js\");\n/* harmony import */ var _addDOMContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDOMContent */ \"./src/addDOMContent.js\");\n/* harmony import */ var _customBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customBlock */ \"./src/customBlock.js\");\n\n\n\n\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
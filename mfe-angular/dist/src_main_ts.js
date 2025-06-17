"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmfe_angular"] = self["webpackChunkmfe_angular"] || []).push([["src_main_ts"],{

/***/ "./src/app.component.ts":
/*!******************************!*\
  !*** ./src/app.component.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppComponent: () => (/* binding */ AppComponent)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm2020/core.mjs\");\n\n\nvar AppComponent = /** @class */ (function () {\n    function AppComponent() {\n        this.message = \"Angular waiting...\";\n        this.lastUpdate = null;\n        console.log(\"Angular: Component constructed\");\n        this.ngZone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone({ enableLongStackTrace: false });\n    }\n    AppComponent.prototype.ngOnInit = function () {\n        var _this = this;\n        console.log(\"Angular: Component initialized\");\n        window.addEventListener(\"user:updated\", function (e) {\n            console.log(\"Angular: Raw event:\", e);\n            console.log(\"Angular: Event detail:\", e.detail);\n            _this.ngZone.run(function () {\n                try {\n                    var _a = e.detail || {}, id = _a.id, name = _a.name;\n                    console.log(\"Angular: Parsed detail - id:\", id, \"name:\", name);\n                    if (id !== 3) {\n                        // Only update if not from Angular\n                        _this.message = \"Angular received: \".concat(id, \" \").concat(name);\n                        _this.lastUpdate = new Date().toLocaleTimeString();\n                    }\n                }\n                catch (error) {\n                    console.error(\"Angular: Error processing event:\", error);\n                }\n            });\n        });\n    };\n    AppComponent.prototype.send = function () {\n        var _this = this;\n        console.log(\"Angular: Sending update...\");\n        var event = new CustomEvent(\"user:updated\", {\n            detail: { id: 3, name: \"Angular User\" },\n        });\n        window.dispatchEvent(event);\n        this.message = \"Angular - Update sent!\";\n        setTimeout(function () {\n            _this.message = \"Angular waiting...\";\n        }, 2000);\n    };\n    AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([\n        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({\n            selector: \"app-root\",\n            template: \"\\n    <div style=\\\"padding: 20px;\\\">\\n      <div style=\\\"margin-bottom: 10px;\\\">{{ message }}</div>\\n      <div *ngIf=\\\"lastUpdate\\\" style=\\\"font-size: 0.8em; color: #666;\\\">\\n        Last update: {{ lastUpdate }}\\n      </div>\\n      <button (click)=\\\"send()\\\" style=\\\"padding: 8px 16px; margin-top: 10px;\\\">\\n        Update from Angular using CustomEvents\\n      </button>\\n    </div>\\n  \",\n        }),\n        (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)(\"design:paramtypes\", [])\n    ], AppComponent);\n    return AppComponent;\n}());\n\n\n\n//# sourceURL=webpack://mfe-angular/./src/app.component.ts?");

/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppModule: () => (/* binding */ AppModule)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm2020/core.mjs\");\n/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ \"./node_modules/@angular/platform-browser/fesm2020/platform-browser.mjs\");\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ \"./src/app.component.ts\");\n\n\n\n\nvar AppModule = /** @class */ (function () {\n    function AppModule() {\n    }\n    AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([\n        (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({\n            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],\n            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule],\n            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],\n        })\n    ], AppModule);\n    return AppModule;\n}());\n\n\n\n//# sourceURL=webpack://mfe-angular/./src/app.module.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mount)\n/* harmony export */ });\n/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ \"./node_modules/zone.js/dist/zone.js\");\n/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ \"./node_modules/@angular/platform-browser-dynamic/fesm2020/platform-browser-dynamic.mjs\");\n/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ \"./src/app.module.ts\");\n\n\n\n// Export mount function for Module Federation\nfunction mount(selector) {\n    if (selector === void 0) { selector = \"body\"; }\n    console.log(\"Angular: Mounting to selector:\", selector);\n    var container = document.createElement(\"app-root\");\n    document.querySelector(selector).appendChild(container);\n    (0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__.platformBrowserDynamic)()\n        .bootstrapModule(_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)\n        .catch(function (err) { return console.error(\"Angular: Bootstrap error:\", err); });\n}\n\n\n//# sourceURL=webpack://mfe-angular/./src/main.ts?");

/***/ })

}]);
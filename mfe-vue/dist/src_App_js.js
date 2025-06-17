"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmfe_vue"] = self["webpackChunkmfe_vue"] || []).push([["src_App_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mount)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nfunction mount(selector = \"body\") {\n  console.log(\"Vue: Mounting to selector:\", selector);\n\n  const state = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({\n    message: \"Vue waiting...\",\n    lastUpdate: null,\n  });\n\n  const App = {\n    setup() {\n      console.log(\"Vue: Component setup\");\n\n      const send = () => {\n        console.log(\"Vue: Sending update...\");\n        const event = new CustomEvent(\"user:updated\", {\n          detail: { id: 2, name: \"Vue User\" },\n        });\n        window.dispatchEvent(event);\n        state.message = \"Vue - Update sent!\";\n        setTimeout(() => {\n          state.message = \"Vue waiting...\";\n        }, 2000);\n      };\n\n      // Add event listener\n      console.log(\"Vue: Adding event listener\");\n      window.addEventListener(\"user:updated\", (e) => {\n        console.log(\"Vue: Raw event:\", e);\n        console.log(\"Vue: Event detail:\", e.detail);\n\n        try {\n          const { id, name } = e.detail || {};\n          console.log(\"Vue: Parsed detail - id:\", id, \"name:\", name);\n          if (id !== 2) {\n            // Only update if not from Vue\n            state.message = `Vue received: ${id} ${name}`;\n            state.lastUpdate = new Date().toLocaleTimeString();\n          }\n        } catch (error) {\n          console.error(\"Vue: Error processing event:\", error);\n        }\n      });\n\n      return () =>\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(\"div\", { style: { padding: \"20px\" } }, [\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(\"div\", { style: { marginBottom: \"10px\" } }, state.message),\n          state.lastUpdate\n            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(\n                \"div\",\n                { style: { fontSize: \"0.8em\", color: \"#666\" } },\n                `Last update: ${state.lastUpdate}`\n              )\n            : null,\n          (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(\n            \"button\",\n            {\n              style: { padding: \"8px 16px\", marginTop: \"10px\" },\n              onClick: send,\n            },\n            \"Update from Vue using CustomEvents\"\n          ),\n        ]);\n    },\n  };\n\n  const el = document.createElement(\"div\");\n  el.id = \"vue-root\";\n  document.querySelector(selector).appendChild(el);\n\n  const app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(App);\n  app.mount(el);\n  console.log(\"Vue: Component mounted\");\n}\n\n\n//# sourceURL=webpack://mfe-vue/./src/App.js?");

/***/ })

}]);
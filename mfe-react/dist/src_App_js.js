"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmfe_react"] = self["webpackChunkmfe_react"] || []).push([["src_App_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mount)\n/* harmony export */ });\nfunction mount() {\n  var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"body\";\n  var container = document.createElement(\"div\");\n  container.style.padding = \"20px\";\n  var status = document.createElement(\"div\");\n  status.textContent = \"React waiting...\";\n  status.style.marginBottom = \"10px\";\n  container.appendChild(status);\n  var lastUpdate = document.createElement(\"div\");\n  lastUpdate.style.fontSize = \"0.8em\";\n  lastUpdate.style.color = \"#666\";\n  container.appendChild(lastUpdate);\n  var button = document.createElement(\"button\");\n  button.textContent = \"Update from React using CustomEvents\";\n  button.style.padding = \"8px 16px\";\n  button.style.marginTop = \"10px\";\n\n  // Listen for events from other micro frontends\n  window.addEventListener(\"user:updated\", function (e) {\n    console.log(\"React: Received event:\", e.detail);\n    var _ref = e.detail || {},\n      id = _ref.id,\n      name = _ref.name;\n    if (id !== 1) {\n      // Only update if not from React\n      status.textContent = \"React received: \".concat(id, \" \").concat(name);\n      lastUpdate.textContent = \"Last update: \".concat(new Date().toLocaleTimeString());\n    }\n  });\n  button.addEventListener(\"click\", function () {\n    console.log(\"React: Sending update...\");\n    var event = new CustomEvent(\"user:updated\", {\n      detail: {\n        id: 1,\n        name: \"React User\"\n      }\n    });\n    window.dispatchEvent(event);\n    status.textContent = \"React - Update sent!\";\n    setTimeout(function () {\n      status.textContent = \"React waiting...\";\n    }, 2000);\n  });\n  container.appendChild(button);\n  document.querySelector(selector).appendChild(container);\n}\n\n//# sourceURL=webpack://mfe-react/./src/App.js?");

/***/ })

}]);
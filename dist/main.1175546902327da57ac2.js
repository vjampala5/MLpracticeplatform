/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./css/style.css\");\n\r\nconst problems = [\r\n    {\r\n        id: 1,\r\n        title: \"Linear Regression\",\r\n        difficulty: \"Easy\",\r\n        description: \"Implement a simple linear regression model.\"\r\n    },\r\n    {\r\n        id: 2,\r\n        title: \"K-Means Clustering\",\r\n        difficulty: \"Medium\",\r\n        description: \"Cluster a dataset using the K-means algorithm.\"\r\n    },\r\n    {\r\n        id: 3,\r\n        title: \"Support Vector Machines\",\r\n        difficulty: \"Hard\",\r\n        description: \"Classify data using an SVM model with an RBF kernel.\"\r\n    }\r\n];\r\n\r\n// Function to display the list of problems\r\nfunction displayProblems() {\r\n    const problemList = document.getElementById('problem-list');\r\n\r\n    problems.forEach(problem => {\r\n        const problemItem = document.createElement('div');\r\n        problemItem.classList.add('problem-item');\r\n        problemItem.innerHTML = `\r\n            <h4>${problem.title}</h4>\r\n            <p><strong>Difficulty:</strong> ${problem.difficulty}</p>\r\n            <p>${problem.description}</p>\r\n            <button onclick=\"window.location.href='compiler.html?problemId=${problem.id}'\">Solve</button>\r\n        `;\r\n        problemList.appendChild(problemItem);\r\n    });\r\n}\r\n\r\n// Function to handle problem solving (for future implementation)\r\nfunction solveProblem(id) {\r\n    alert(`Problem ${id} clicked!`);\r\n}\r\n\r\n// Execute when the page loads\r\nwindow.onload = displayProblems;\r\n\n\n//# sourceURL=webpack://public/./js/main.js?");

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://public/./css/style.css?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;
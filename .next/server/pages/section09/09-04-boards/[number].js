"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/section09/09-04-boards/[number]";
exports.ids = ["pages/section09/09-04-boards/[number]"];
exports.modules = {

/***/ "./pages/section09/09-04-boards/[number]/index.js":
/*!********************************************************!*\
  !*** ./pages/section09/09-04-boards/[number]/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StaticRoutingBoardMovePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FETCH_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    query fetchBoard($number: Int){\n        fetchBoard(number:$number){\n            number\n            writer\n            title\n            contents\n        }\n    }\n`;\nfunction StaticRoutingBoardMovePage() {\n    var ref, ref1, ref2;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARD, {\n        variables: {\n            number: Number(router.query.number)\n        }\n    });\n    console.log(data);\n    const onClickMove = ()=>{\n        router.push(`/section09/09-04-boards/${router.query.number}/edit`);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    router.query.number,\n                    \"번 게시글 이동 완료\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\inflearn\\\\codecamp-frontend\\\\class\\\\pages\\\\section09\\\\09-04-boards\\\\[number]\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"작성자: \",\n                    data === null || data === void 0 ? void 0 : (ref = data.fetchBoard) === null || ref === void 0 ? void 0 : ref.writer\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\inflearn\\\\codecamp-frontend\\\\class\\\\pages\\\\section09\\\\09-04-boards\\\\[number]\\\\index.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"제목: \",\n                    data === null || data === void 0 ? void 0 : (ref1 = data.fetchBoard) === null || ref1 === void 0 ? void 0 : ref1.title\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\inflearn\\\\codecamp-frontend\\\\class\\\\pages\\\\section09\\\\09-04-boards\\\\[number]\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"내용: \",\n                    data === null || data === void 0 ? void 0 : (ref2 = data.fetchBoard) === null || ref2 === void 0 ? void 0 : ref2.contents\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\inflearn\\\\codecamp-frontend\\\\class\\\\pages\\\\section09\\\\09-04-boards\\\\[number]\\\\index.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickMove,\n                children: \"수정하러가기\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\inflearn\\\\codecamp-frontend\\\\class\\\\pages\\\\section09\\\\09-04-boards\\\\[number]\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lenovo\\\\Desktop\\\\inflearn\\\\codecamp-frontend\\\\class\\\\pages\\\\section09\\\\09-04-boards\\\\[number]\\\\index.js\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWN0aW9uMDkvMDktMDQtYm9hcmRzL1tudW1iZXJdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1A7QUFFdkMsS0FBSyxDQUFDRyxXQUFXLEdBQUdGLCtDQUFHLENBQUM7Ozs7Ozs7OztBQVN4QjtBQUdlLFFBQVEsQ0FBQ0csMEJBQTBCLEdBQUUsQ0FBQztRQWU5QkMsR0FBc0IsRUFDakJBLElBQWMsRUFDaEJBLElBQWdCO0lBaEJ0QyxLQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFFeEIsS0FBSyxDQUFDLENBQUMsQ0FBQ0csSUFBSSxFQUFDLENBQUMsR0FBR0wsd0RBQVEsQ0FBQ0csV0FBVyxFQUFFLENBQUM7UUFDcENJLFNBQVMsRUFBRSxDQUFDO1lBQUNDLE1BQU0sRUFBRUMsTUFBTSxDQUFDSCxNQUFNLENBQUNJLEtBQUssQ0FBQ0YsTUFBTTtRQUFFLENBQUM7SUFDdEQsQ0FBQztJQUNERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSTtJQUVoQixLQUFLLENBQUNRLFdBQVcsT0FBUyxDQUFDO1FBQ3ZCUCxNQUFNLENBQUNRLElBQUksRUFBRSx3QkFBd0IsRUFBRVIsTUFBTSxDQUFDSSxLQUFLLENBQUNGLE1BQU0sQ0FBQyxLQUFLO0lBQ3BFLENBQUM7SUFFRCxNQUFNLDZFQUNETyxDQUFHOzt3RkFDQ0EsQ0FBRzs7b0JBQUVULE1BQU0sQ0FBQ0ksS0FBSyxDQUFDRixNQUFNO29CQUFDLENBQTJCOzs7Ozs7O3dGQUNwRE8sQ0FBRzs7b0JBQUMsQ0FBVztvQkFBQ1YsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsSUFBaEJBLEdBQWdCLEdBQWhCQSxJQUFJLENBQUVXLFVBQVUsY0FBaEJYLEdBQWdCLEtBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxHQUFnQixDQUFFWSxNQUFNOzs7Ozs7O3dGQUN4Q0YsQ0FBRzs7b0JBQUMsQ0FBUTtvQkFBQ1YsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsSUFBaEJBLElBQWdCLEdBQWhCQSxJQUFJLENBQUVXLFVBQVUsY0FBaEJYLElBQWdCLEtBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFnQixDQUFFYSxLQUFLOzs7Ozs7O3dGQUNwQ0gsQ0FBRzs7b0JBQUMsQ0FBUTtvQkFBQ1YsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsSUFBaEJBLElBQWdCLEdBQWhCQSxJQUFJLENBQUVXLFVBQVUsY0FBaEJYLElBQWdCLEtBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFnQixDQUFFYyxRQUFROzs7Ozs7O3dGQUNuQ0MsQ0FBRTtnQkFBQ0MsT0FBTyxFQUFFUixXQUFXOzBCQUFFLENBQU07Ozs7Ozs7Ozs7OztBQUdoRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy9zZWN0aW9uMDkvMDktMDQtYm9hcmRzL1tudW1iZXJdL2luZGV4LmpzPzQyMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBGRVRDSF9CT0FSRCA9IGdxbGBcclxuICAgIHF1ZXJ5IGZldGNoQm9hcmQoJG51bWJlcjogSW50KXtcclxuICAgICAgICBmZXRjaEJvYXJkKG51bWJlcjokbnVtYmVyKXtcclxuICAgICAgICAgICAgbnVtYmVyXHJcbiAgICAgICAgICAgIHdyaXRlclxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBjb250ZW50c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRpY1JvdXRpbmdCb2FyZE1vdmVQYWdlKCl7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfQk9BUkQsIHtcclxuICAgICAgICB2YXJpYWJsZXM6IHsgbnVtYmVyOiBOdW1iZXIocm91dGVyLnF1ZXJ5Lm51bWJlcikgfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG4gICAgY29uc3Qgb25DbGlja01vdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnB1c2goYC9zZWN0aW9uMDkvMDktMDQtYm9hcmRzLyR7cm91dGVyLnF1ZXJ5Lm51bWJlcn0vZWRpdGApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+e3JvdXRlci5xdWVyeS5udW1iZXJ967KIIOqyjOyLnOq4gCDsnbTrj5kg7JmE66OMPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+7J6R7ISx7J6QOiB7ZGF0YT8uZmV0Y2hCb2FyZD8ud3JpdGVyfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PuygnOuqqToge2RhdGE/LmZldGNoQm9hcmQ/LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PuuCtOyaqToge2RhdGE/LmZldGNoQm9hcmQ/LmNvbnRlbnRzfTwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tNb3ZlfT7siJjsoJXtlZjrn6zqsIDquLA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdxbCIsInVzZVJvdXRlciIsIkZFVENIX0JPQVJEIiwiU3RhdGljUm91dGluZ0JvYXJkTW92ZVBhZ2UiLCJkYXRhIiwicm91dGVyIiwidmFyaWFibGVzIiwibnVtYmVyIiwiTnVtYmVyIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwib25DbGlja01vdmUiLCJwdXNoIiwiZGl2IiwiZmV0Y2hCb2FyZCIsIndyaXRlciIsInRpdGxlIiwiY29udGVudHMiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/section09/09-04-boards/[number]/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/section09/09-04-boards/[number]/index.js"));
module.exports = __webpack_exports__;

})();
"use strict";
(self["webpackChunk_lovisa_app_b"] = self["webpackChunk_lovisa_app_b"] || []).push([["client1"],{

/***/ "./src/Nav.js":
/*!********************!*\
  !*** ./src/Nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarNoteContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@18.3.0-next-1308e49a6-20230330/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "../../node_modules/.pnpm/react@18.3.0-next-1308e49a6-20230330/node_modules/react/jsx-runtime.js");
'use client';





function SidebarNoteContent({}) {
  const {
    navigate
  } = (0,_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("nav", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      onClick: () => {
        (0,react__WEBPACK_IMPORTED_MODULE_0__.startTransition)(() => {
          navigate('one');
        });
      },
      children: "Page One"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      onClick: () => {
        (0,react__WEBPACK_IMPORTED_MODULE_0__.startTransition)(() => {
          navigate('two');
        });
      },
      children: "Page Two"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      onClick: () => {
        (0,react__WEBPACK_IMPORTED_MODULE_0__.startTransition)(() => {
          navigate('three');
        });
      },
      children: ["Page with ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
        children: "Suspense"
      })]
    })]
  });
}

/***/ })

}]);
//# sourceMappingURL=client1.main.js.map
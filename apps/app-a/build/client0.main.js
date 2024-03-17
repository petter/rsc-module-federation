"use strict";
(self["webpackChunk_lovisa_app_a"] = self["webpackChunk_lovisa_app_a"] || []).push([["client0"],{

/***/ "./src/MicroFrontend.js":
/*!******************************!*\
  !*** ./src/MicroFrontend.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MicroFrontend": () => (/* binding */ MicroFrontend)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/.pnpm/react@18.3.0-next-1308e49a6-20230330/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_server_dom_webpack_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-server-dom-webpack/client */ "../../node_modules/.pnpm/react-server-dom-webpack@18.3.0-next-1308e49a6-20230330_react-dom@18.3.0-next-1308e49a6-20230_gqbmvascptpapb5oxyebee3gom/node_modules/react-server-dom-webpack/client.browser.js");
"use client";



function MicroFrontend({
  url
}) {
  console.log("hello from ");
  const content = (0,react_server_dom_webpack_client__WEBPACK_IMPORTED_MODULE_1__.createFromFetch)(fetch(url));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.use)(content);
}

/***/ })

}]);
//# sourceMappingURL=client0.main.js.map
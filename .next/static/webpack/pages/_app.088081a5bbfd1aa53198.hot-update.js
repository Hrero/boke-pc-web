webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/images */ \"./images/images.js\");\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/header.module.scss */ \"./styles/header.module.scss\");\n/* harmony import */ var _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/app/code/boke-pc-web/components/Header.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  var labelPage = _ref.labelPage,\n      sortList = _ref.sortList;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.headLogoImg,\n        src: _images_images__WEBPACK_IMPORTED_MODULE_4__[\"default\"].headerLogo\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sortList,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: (_styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.span, _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.spanShow),\n          children: \"\\u9996\\u9875\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 21\n      }, _this), sortList.map(function (show) {\n        console.log(labelPage, show.value, 'labelPage');\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          as: \"/load/\".concat(show.value),\n          href: \"/post?id=\".concat(show.value, \"&name=\").concat(show.name),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: [labelPage === show.value ? _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.spanShow : _styles_header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.span].join(''),\n            children: show.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 33\n          }, _this)\n        }, show.value, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 29\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = Header;\n\nfunction mapStateToProps(state) {\n  var labelPage = state.labelPage;\n  return {\n    labelPage: labelPage\n  };\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    handleLabelPage: function handleLabelPage() {\n      dispatch({\n        type: 'handleLabelPage'\n      });\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(mapStateToProps, mapDispatchToProps)(Header)); // export default Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJsYWJlbFBhZ2UiLCJzb3J0TGlzdCIsInN0eWxlcyIsImhlYWRlciIsImhlYWRMb2dvSW1nIiwiaW1ncyIsImhlYWRlckxvZ28iLCJzcGFuIiwic3BhblNob3ciLCJtYXAiLCJzaG93IiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwibmFtZSIsImpvaW4iLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIiwiaGFuZGxlTGFiZWxQYWdlIiwidHlwZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTRCO0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUN2QyxzQkFDSTtBQUFRLGFBQVMsRUFBRUMsaUVBQU0sQ0FBQ0MsTUFBMUI7QUFBQSw0QkFDSTtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBRUQsaUVBQU0sQ0FBQ0UsV0FBdkI7QUFBb0MsV0FBRyxFQUFHQyxzREFBSSxDQUFDQztBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSUk7QUFBSyxlQUFTLEVBQUVKLGlFQUFNLENBQUNELFFBQXZCO0FBQUEsOEJBQ1EscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUNJO0FBQUssbUJBQVMsR0FBRUMsaUVBQU0sQ0FBQ0ssSUFBUCxFQUFhTCxpRUFBTSxDQUFDTSxRQUF0QixDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURSLEVBSVNQLFFBQVEsQ0FBQ1EsR0FBVCxDQUFhLFVBQUFDLElBQUksRUFBSTtBQUN0Q0MsZUFBTyxDQUFDQyxHQUFSLENBQVlaLFNBQVosRUFBdUJVLElBQUksQ0FBQ0csS0FBNUIsRUFBbUMsV0FBbkM7QUFDb0IsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBdUIsWUFBRSxrQkFBV0gsSUFBSSxDQUFDRyxLQUFoQixDQUF6QjtBQUFrRCxjQUFJLHFCQUFjSCxJQUFJLENBQUNHLEtBQW5CLG1CQUFpQ0gsSUFBSSxDQUFDSSxJQUF0QyxDQUF0RDtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBRSxDQUFFZCxTQUFTLEtBQU1VLElBQUksQ0FBQ0csS0FBcEIsR0FBMkJYLGlFQUFNLENBQUNNLFFBQWxDLEdBQTZDTixpRUFBTSxDQUFDSyxJQUF0RCxFQUE0RFEsSUFBNUQsQ0FBaUUsRUFBakUsQ0FBaEI7QUFBQSxzQkFBdUZMLElBQUksQ0FBQ0k7QUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBQVdKLElBQUksQ0FBQ0csS0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUtILE9BUEEsQ0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXJCRDs7S0FBTWQsTTs7QUF1Qk4sU0FBU2lCLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUEsTUFDcEJqQixTQURvQixHQUNOaUIsS0FETSxDQUNwQmpCLFNBRG9CO0FBRTVCLFNBQU87QUFDSEEsYUFBUyxFQUFUQTtBQURHLEdBQVA7QUFHSDs7QUFFRCxTQUFTa0Isa0JBQVQsQ0FBNEJDLFFBQTVCLEVBQXNDO0FBQ2xDLFNBQU87QUFDSEMsbUJBREcsNkJBQ2U7QUFDZEQsY0FBUSxDQUFDO0FBQUVFLFlBQUksRUFBRTtBQUFSLE9BQUQsQ0FBUjtBQUNIO0FBSEUsR0FBUDtBQUtIOztBQUVjQywwSEFBTyxDQUNsQk4sZUFEa0IsRUFFbEJFLGtCQUZrQixDQUFQLENBR1huQixNQUhXLENBQWYsRSxDQUlBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBpbWdzIGZyb20gJy4uL2ltYWdlcy9pbWFnZXMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvaGVhZGVyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgSGVhZGVyID0gKHsgbGFiZWxQYWdlLCBzb3J0TGlzdH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZExvZ29JbWd9IHNyYz17IGltZ3MuaGVhZGVyTG9nbyB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29ydExpc3R9PlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGFuLCBzdHlsZXMuc3BhblNob3d9PummlumhtTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIHtzb3J0TGlzdC5tYXAoc2hvdyA9PiB7XG4gICAgY29uc29sZS5sb2cobGFiZWxQYWdlLCBzaG93LnZhbHVlLCAnbGFiZWxQYWdlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGtleT17c2hvdy52YWx1ZX0gYXM9e2AvbG9hZC8ke3Nob3cudmFsdWV9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy52YWx1ZX0mbmFtZT0ke3Nob3cubmFtZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1sgbGFiZWxQYWdlID09PSAgc2hvdy52YWx1ZT8gc3R5bGVzLnNwYW5TaG93IDogc3R5bGVzLnNwYW5dLmpvaW4oJycpfT57c2hvdy5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gICAgY29uc3QgeyBsYWJlbFBhZ2UgfSA9IHN0YXRlXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGFiZWxQYWdlXG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoYW5kbGVMYWJlbFBhZ2UoKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdoYW5kbGVMYWJlbFBhZ2UnIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gICAgbWFwU3RhdGVUb1Byb3BzLFxuICAgIG1hcERpc3BhdGNoVG9Qcm9wc1xuICApKEhlYWRlcilcbi8vIGV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+aPr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Meta; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YSmr");




function Meta({
  html_head_info
}) {
  const {
    headTitle,
    headKeywords,
    headDescription,
    author
  } = html_head_info;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#000000"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("link", {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "msapplication-TileColor",
      content: "#000000"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "theme-color",
      content: "#000"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "description",
      content: headDescription ? headDescription : 'js和java的博客分享'
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "keywords",
      content: headKeywords ? headKeywords : 'js和java的博客分享'
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      property: "og:image",
      content: _lib_constants__WEBPACK_IMPORTED_MODULE_2__[/* HOME_OG_IMAGE_URL */ "d"]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("meta", {
      name: "author",
      content: author ? author : 'ELEVEN'
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
      children: headTitle ? headTitle : "ELEVEN"
    })]
  });
}

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EhLH");


/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _others_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+aPr");




const Layout = ({
  children,
  html_head_info
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_others_meta__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      html_head_info: html_head_info
    }), children]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "AKVn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const httpAgent = async ({
  url,
  method,
  params
}) => {
  const res = await fetch('http://127.0.0.1:7000/api/agent', {
    headers: {
      'content-type': 'application/json',
      'api-url': url,
      'api-method': method
    },
    method: 'POST',
    body: JSON.stringify(params)
  });
  return await res.json();
};

/* harmony default export */ __webpack_exports__["a"] = (httpAgent);

/***/ }),

/***/ "EhLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// CONCATENATED MODULE: ./components/LeavingMessage.js




const LeavingMessage = ({
  message_list
}) => {
  console.log(message_list, 'message_list');
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "jsx-3687554801" + " " + "visitorList",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "jsx-3687554801" + " " + "visitorTitle",
      children: "\u7559\u8A00\u5217\u8868"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      className: "jsx-3687554801",
      children: message_list.map(mess => {
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
          className: "jsx-3687554801" + " " + "visitorInfo",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "jsx-3687554801",
            children: mess.name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "jsx-3687554801",
            children: mess.content
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: "jsx-3687554801",
            children: mess.createTime
          })]
        }, mess.id);
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "3687554801",
      children: [".visitorList.jsx-3687554801{margin-bottom:10px;padding:16px;background:#ffffff;}", ".homeRight.jsx-3687554801 .visitorList.jsx-3687554801 li.jsx-3687554801{margin-bottom:5px;}", ".visitorTitle.jsx-3687554801{font-size:12px;color:#333333;font-weight:bold;margin-bottom:10px;}", ".visitorInfo.jsx-3687554801{margin-top:5px;margin-bottom:5px;}", ".visitorInfo.jsx-3687554801 span.jsx-3687554801{font-size:12px;color:#666666;margin-right:10px;}", "ul.jsx-3687554801{margin-bottom:0rem;}"]
    })]
  });
};

/* harmony default export */ var components_LeavingMessage = (LeavingMessage);
// EXTERNAL MODULE: ./components/VisitorList.js
var VisitorList = __webpack_require__("Huq9");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: external "zgl-utils-js"
var external_zgl_utils_js_ = __webpack_require__("TYEs");

// EXTERNAL MODULE: ./lib/constants.js
var constants = __webpack_require__("YSmr");

// EXTERNAL MODULE: ./styles/articleList.module.scss
var articleList_module = __webpack_require__("eNH1");
var articleList_module_default = /*#__PURE__*/__webpack_require__.n(articleList_module);

// CONCATENATED MODULE: ./components/ArticleList.js








const ArticleList = props => {
  const {
    article_list
  } = props;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
      children: article_list === null || article_list === void 0 ? void 0 : article_list.map(item => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          as: `/infos/${item.id}`,
          href: "/infos/[item.id]",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("li", {
            className: articleList_module_default.a.articleLi,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: articleList_module_default.a.ArticleBannerImg,
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                src: item.picture ? item.picture : constants["a" /* ARTICLE_BANNER_DEFAULT */],
                alt: ""
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: articleList_module_default.a.articleTitle,
                children: item.title
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
                className: articleList_module_default.a.articleTxt,
                children: item.summary
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
                className: articleList_module_default.a.articleInfo,
                children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
                  className: articleList_module_default.a.spanMargin,
                  children: item.author
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  className: articleList_module_default.a.spanMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                      t: "1609077158722",
                      className: external_classnames_default()(articleList_module_default.a.icon, articleList_module_default.a.point, {}),
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "11843",
                      width: "200",
                      height: "200",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                        d: "M987.52 367.36c-108.16-146.56-266.88-239.36-444.16-239.36-177.28 0-335.36 92.8-444.16 239.36-48 64.64-48 160.64 0 225.28C208 739.2 366.72 832 543.36 832c177.28 0 335.36-92.8 444.16-239.36C1035.52 528 1035.52 432 987.52 367.36zM544 704C420.48 704 320 603.52 320 480S420.48 256 544 256C667.52 256 768 356.48 768 480S667.52 704 544 704zM544 320C455.68 320 384 391.68 384 480S455.68 640 544 640C632.32 640 704 568.32 704 480S632.32 320 544 320z",
                        "p-id": "11844",
                        fill: "#b4b4b4"
                      })
                    })
                  }), item.lookNum ? item.lookNum : 0]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  className: articleList_module_default.a.spanMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                      t: "1609076656536",
                      className: articleList_module_default.a.icon,
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "7997",
                      width: "200",
                      height: "200",
                      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                        d: "M337.36192 914.688c-3.5584 0-7.13728-0.75776-10.496-2.304-8.89856-4.096-14.61248-12.99968-14.61248-22.8096L312.25344 782.5408c0-13.29152-10.81344-24.09984-24.12544-24.09984l-122.88 0c-41.00096 0-74.35264-33.3568-74.35264-74.33216L90.89536 235.6992c0-40.9856 33.35168-74.33728 74.35264-74.33728l708.80768 0c40.97536 0 74.32704 33.35168 74.32704 74.33728l0 448.41472c0 40.97536-33.35168 74.33216-74.32704 74.33216l-336.19968 0c-5.76 0-11.35104 2.048-15.73888 5.8368l-168.41728 144.3584C349.06112 912.62464 343.24992 914.688 337.36192 914.688z",
                        "p-id": "7998",
                        fill: "#b4b4b4"
                      })
                    })
                  }), item.thumdsSum ? item.thumdsSum : 0]
                }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
                  className: articleList_module_default.a.spanMargin,
                  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
                    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("svg", {
                      t: "1609077200719",
                      className: external_classnames_default()(articleList_module_default.a.icon),
                      viewBox: "0 0 1024 1024",
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "p-id": "12657",
                      width: "200",
                      height: "200",
                      children: item.thumdsStatus === 1 ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                        d: "M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542",
                        "p-id": "3137",
                        fill: "#e53a31"
                      }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                        d: "M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542",
                        "p-id": "3137",
                        fill: "#b4b4b4"
                      })
                    })
                  }), item.thumdsStatus ? item.thumdsStatus : 0]
                })]
              })]
            })]
          })
        }, item.id);
      })
    })
  });
};

/* harmony default export */ var components_ArticleList = (ArticleList);
// EXTERNAL MODULE: ./store/store.js + 4 modules
var store = __webpack_require__("QqKt");

// EXTERNAL MODULE: ./httpServer.js
var httpServer = __webpack_require__("JuFd");

// EXTERNAL MODULE: ./httpAgent.js
var httpAgent = __webpack_require__("AKVn");

// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__("LU1S");
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./components/Header.js + 1 modules
var Header = __webpack_require__("b0oO");

// EXTERNAL MODULE: ./styles/post.module.scss
var post_module = __webpack_require__("F92n");
var post_module_default = /*#__PURE__*/__webpack_require__.n(post_module);

// EXTERNAL MODULE: external "antd/lib/tree"
var tree_ = __webpack_require__("dsyZ");
var tree_default = /*#__PURE__*/__webpack_require__.n(tree_);

// EXTERNAL MODULE: ./styles/articleTrees.module.scss
var articleTrees_module = __webpack_require__("JjQ8");
var articleTrees_module_default = /*#__PURE__*/__webpack_require__.n(articleTrees_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/others/ArticleTrees.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const {
  DirectoryTree
} = tree_default.a;
function ArticleTrees({
  com_class_list,
  user_ip
}) {
  const com_classList = !Object(external_zgl_utils_js_["isEmpty"])(com_class_list) && com_class_list.map(item => {
    if (item.isLeaf) {
      return {
        title: item.name,
        key: item.value
      };
    } else {
      return {
        title: item.name,
        key: item.value,
        children: getItemChild(item.children)
      };
    }
  });
  const {
    0: treeData,
    1: setTreeData
  } = Object(external_react_["useState"])(com_classList);
  const router = Object(router_["useRouter"])();

  function getItemChild(item) {
    return item.map(child => {
      if (child.isLeaf) {
        return {
          title: child.name,
          key: child.value
        };
      } else {
        return {
          title: child.name,
          key: child.value,
          children: getItemChild(child.children)
        };
      }
    });
  }

  function updateTreeData(list, key, children) {
    return list.map(node => {
      if (node.key === key) {
        return _objectSpread(_objectSpread({}, node), {}, {
          children
        });
      } else if (node.children) {
        return _objectSpread(_objectSpread({}, node), {}, {
          children: updateTreeData(node.children, key, children)
        });
      }

      return node;
    });
  }

  function onSelect(keys, event) {
    if (keys) {
      router.push('/infos/' + keys[0]);
    }
  }

  ;

  function onExpand() {
    console.log('Trigger Expand');
  }

  ;

  function onLoadData({
    key,
    children
  }) {
    return new Promise(resolve => {
      if (children) {
        resolve();
        return;
      }

      const params = {
        articleId: key,
        // 文章id
        ip: user_ip
      };
      Object(httpAgent["a" /* default */])({
        url: '/article/getArticleList',
        method: 'post',
        params
      }).then(res => {
        if (res.code == 0) {
          setTreeData(origin => updateTreeData(origin, key, res.data.list.map(item => ({
            title: item.title,
            key: item.id,
            isLeaf: true
          }))));
          resolve();
        }
      });
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: articleTrees_module_default.a.trees,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: articleTrees_module_default.a.visitorTitle,
      children: "\u5206\u7C7B\u5217\u8868"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(DirectoryTree, {
      multiple: true,
      loadData: onLoadData,
      onSelect: onSelect,
      onExpand: onExpand,
      treeData: treeData
    })]
  });
}
// EXTERNAL MODULE: ./components/HotArtcle.js
var HotArtcle = __webpack_require__("PSAe");

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "antd/lib/notification"
var notification_ = __webpack_require__("Gss8");
var notification_default = /*#__PURE__*/__webpack_require__.n(notification_);

// EXTERNAL MODULE: ./styles/MessageIcon.module.scss
var MessageIcon_module = __webpack_require__("Lq3z");
var MessageIcon_module_default = /*#__PURE__*/__webpack_require__.n(MessageIcon_module);

// CONCATENATED MODULE: ./components/others/MessageIcon.js








function MessageIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function MessageIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { MessageIcon_ownKeys(Object(source), true).forEach(function (key) { MessageIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { MessageIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function MessageIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class MessageIcon_MessageIcon extends external_React_default.a.Component {
  constructor(props) {
    super(props);

    MessageIcon_defineProperty(this, "layout", {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      }
    });

    MessageIcon_defineProperty(this, "validateMessages", {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!'
      },
      number: {
        range: '${label} must be between ${min} and ${max}'
      }
    });

    MessageIcon_defineProperty(this, "openNotification", () => {
      notification_default.a.open({
        message: '留言成功',
        description: '您好，我稍后会以邮件回复您',
        onClick: () => {
          console.log('您好，我稍后会以邮件回复您');
        }
      });
    });

    MessageIcon_defineProperty(this, "onFinish", values => {
      this.setState({
        visible: false
      });

      if (this.state.name) {
        values.name = this.state.name;
      }

      if (this.state.email) {
        values.email = this.state.email;
      }

      const params = MessageIcon_objectSpread(MessageIcon_objectSpread({
        ip: this.state.ip
      }, values), {}, {
        headPicture: constants["c" /* HEAD_PIC */][Object(external_zgl_utils_js_["mathFloor"])(5, 0)],
        agent: Object(external_zgl_utils_js_["allAgentInfo"])()
      });

      Object(httpAgent["a" /* default */])({
        url: '/message/addMessage',
        method: 'post',
        params
      }).then(res => {
        if (res.code === 0) {
          this.openNotification();
        }

        this.setState({
          visible: false
        });
      });
    });

    MessageIcon_defineProperty(this, "handleZanshangVo", () => {
      this.setState({
        visible: true
      });
    });

    MessageIcon_defineProperty(this, "handleOk", () => {
      setTimeout(() => {
        this.setState({
          visible: false
        });
      }, 2000);
    });

    MessageIcon_defineProperty(this, "handleCancel", () => {
      this.setState({
        visible: false
      });
    });

    this.state = {
      visible: false,
      thumdsStatus: this.props.thumdsStatus,
      thumdsSum: this.props.thumdsSum,
      articleId: this.props.articleId,
      ip: this.props.user_ip,
      name: '',
      email: '',
      changeNum: 0
    };
  }

  componentDidMount() {
    const params = {
      ip: this.state.ip,
      agent: Object(external_zgl_utils_js_["allAgentInfo"])()
    };
    Object(httpAgent["a" /* default */])({
      url: '/user/getUserInfo',
      method: 'post',
      params
    }).then(res => {
      if (res.code === 0) {
        console.log('this.openNotification(): ', res);
        this.setState({
          name: res.data.nickname,
          email: res.data.email
        });
      }
    });
  }

  render() {
    const {
      visible,
      name,
      email
    } = this.state;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: MessageIcon_module_default.a._3Pnjry,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: MessageIcon_module_default.a._1pUUKr,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: MessageIcon_module_default.a.svgZan,
          onClick: this.handleZanshangVo,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("i", {
            className: MessageIcon_module_default.a.anticon,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
              t: "1609649450678",
              className: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "3673",
              width: "24",
              height: "24",
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M829.487911 488.777089c-29.217439 1.107217-43.718711 23.069415-43.980677 69.125357-0.424672 74.618465 0.25992 149.247162-0.275269 223.865627-0.418532 58.217936-11.900028 70.305229-70.793346 70.569242-149.243069 0.667196-298.490232 0.629333-447.733301 0.031722-61.683874-0.248663-72.132854-11.446703-72.234161-74.29817-0.287549-178.364317-0.10847-356.731704-0.077771-535.096021 0.001023-9.096169-0.13917-18.23327 0.583285-27.284413 2.218528-27.76946 17.714454-43.033096 45.226041-45.196365 14.479783-1.136893 29.103852-0.544399 43.662429-0.552585 101.923344-0.061398 203.849758 0.443092 305.767985-0.36225 37.81935-0.298805 56.615439-15.948227 57.853639-43.61024 1.286296-28.77844-16.582677-45.778626-54.342676-45.99966-127.396505-0.750083-254.82371-1.537006-382.192585 0.571005-60.902068 1.004887-100.435457 42.084491-106.665345 103.205547-1.654686 16.240893-1.251503 32.718169-1.269923 49.086975-0.105401 92.823082-0.051165 185.647187-0.051165 278.469246 0.029676 0 0.057305 0 0.084934 0 0 101.925391-1.02126 203.859991 0.317225 305.764915 1.111311 84.644819 44.12394 126.740566 129.545448 127.143749 171.081447 0.803295 342.172103 0.818645 513.25355 0.00921 85.549421-0.403183 128.425951-42.699498 129.504516-126.977973 1.11745-87.34737 0.671289-174.72544 0.104377-262.084067C875.478362 509.525646 859.378685 487.645312 829.487911 488.777089z",
                "p-id": "3674",
                fill: "#bfbfbf"
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
                d: "M905.789715 134.822638c-17.720593-14.248516-37.137829-14.317077-55.447846-1.790786-10.380418 7.103792-19.064194 16.811898-28.058033 25.799596C662.621463 318.363861 502.968299 477.908554 343.549473 637.684514c-11.455913 11.481496-23.734564 23.405059-31.019481 37.509289-14.547321 28.16855 6.831592 61.061704 48.710398 62.711274 10.386558-7.755638 28.999474-18.48705 43.719734-33.126468C566.282301 544.329313 727.011982 383.287523 887.827621 222.332714c8.986675-8.994861 18.790972-17.699104 25.590841-28.234041C926.537248 173.776835 922.870742 148.557454 905.789715 134.822638z",
                "p-id": "3675",
                fill: "#bfbfbf"
              })]
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: MessageIcon_module_default.a.P63n6G,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: MessageIcon_module_default.a._2LKTFF,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              className: MessageIcon_module_default.a._1GPnWJ,
              role: "button",
              "aria-label": "\u67E5\u770B\u70B9\u8D5E\u5217\u8868",
              children: "\u7559\u8A00"
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modal_default.a, {
          visible: visible,
          onOk: this.handleOk,
          onCancel: this.handleCancel,
          footer: null,
          closable: false,
          okText: "\u786E\u8BA4",
          cancelText: "\u53D6\u6D88",
          children: name && email ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: MessageIcon_module_default.a.wrapImg,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(form_default.a, MessageIcon_objectSpread(MessageIcon_objectSpread({
              className: MessageIcon_module_default.a.formwrap
            }, this.layout), {}, {
              name: "nest-messages",
              onFinish: this.onFinish,
              validateMessages: this.validateMessages,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(form_default.a.Item, {
                name: "name",
                label: "\u6635\u79F0",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input_default.a, {
                  disabled: name,
                  defaultValue: name
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(form_default.a.Item, {
                name: "email",
                label: "\u90AE\u7BB1",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input_default.a, {
                  disabled: email,
                  defaultValue: email
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(form_default.a.Item, {
                name: "content",
                label: "\u5185\u5BB9",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input_default.a, {})
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(form_default.a.Item, {
                wrapperCol: {
                  span: 2,
                  offset: 20
                },
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_default.a, {
                  type: "primary",
                  htmlType: "submit",
                  children: "\u63D0\u4EA4"
                })
              })]
            }))
          }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: MessageIcon_module_default.a.wrapImg,
            children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(form_default.a, MessageIcon_objectSpread(MessageIcon_objectSpread({}, this.layout), {}, {
              name: "nest-messages",
              onFinish: this.onFinish,
              validateMessages: this.validateMessages,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(form_default.a.Item, {
                name: "name",
                label: "\u6635\u79F0",
                rules: [{
                  required: true
                }],
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input_default.a, {
                  disabled: name,
                  defaultValue: name
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(form_default.a.Item, {
                name: "email",
                label: "\u90AE\u7BB1",
                rules: [{
                  type: 'email'
                }],
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input_default.a, {
                  disabled: email,
                  defaultValue: email
                })
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(form_default.a.Item, {
                name: "content",
                label: "\u5185\u5BB9",
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(input_default.a, {})
              }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(form_default.a.Item, {
                wrapperCol: MessageIcon_objectSpread(MessageIcon_objectSpread({}, this.layout.wrapperCol), {}, {
                  offset: 8
                }),
                children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(button_default.a, {
                  type: "primary",
                  htmlType: "submit",
                  children: "\u63D0\u4EA4"
                })
              })]
            }))
          })
        })]
      })
    });
  }

}

/* harmony default export */ var others_MessageIcon = (MessageIcon_MessageIcon);
// CONCATENATED MODULE: ./pages/post.js

















class post_Post extends external_React_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      post_article_list,
      post_message_list,
      com_sort_list,
      html_head_info,
      com_label_integer,
      post_view_list,
      com_class_list,
      user_ip,
      com_hot_article
    } = this.props.initialReduxState;
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Layout["a" /* default */], {
      html_head_info: html_head_info,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Header["a" /* default */], {
        com_sort_list: com_sort_list.data,
        com_label_integer: com_label_integer
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: post_module_default.a.homeWrap,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: post_module_default.a.homeLeft,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_ArticleList, {
            article_list: post_article_list.data.list
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: post_module_default.a.homeRight,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(VisitorList["a" /* default */], {
            view_list: post_view_list === null || post_view_list === void 0 ? void 0 : post_view_list.data
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(HotArtcle["a" /* default */], {
            title: "\u70ED\u95E8\u6587\u7AE0",
            com_hot_article: com_hot_article === null || com_hot_article === void 0 ? void 0 : com_hot_article.data
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_LeavingMessage, {
            message_list: post_message_list === null || post_message_list === void 0 ? void 0 : post_message_list.data
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ArticleTrees, {
            com_class_list: com_class_list.data,
            user_ip: user_ip
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(others_MessageIcon, {
        user_ip: user_ip
      })]
    });
  }

}

async function getServerSideProps(context) {
  const reduxStore = Object(store["a" /* default */])();
  const initialReduxState = await Object(httpServer["a" /* default */])({
    url: '/api/post',
    method: 'post',
    params: {
      sortId: Number(15)
    }
  });
  return {
    props: {
      initialReduxState: initialReduxState.data
    }
  };
}
/* harmony default export */ var post = __webpack_exports__["default"] = (post_Post);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "F92n":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"homeWrap": "post_homeWrap__3Vcw5",
	"homeRight": "post_homeRight__2rMim",
	"homeLeft": "post_homeLeft__GT3Do"
};


/***/ }),

/***/ "Gss8":
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Huq9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zgl_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TYEs");
/* harmony import */ var zgl_utils_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(zgl_utils_js__WEBPACK_IMPORTED_MODULE_2__);





const VisitorList = ({
  view_list
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "jsx-294245335" + " " + "visitorList borderNone",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "jsx-294245335" + " " + "visitorTitle",
      children: "\u8BBF\u5BA2\u5217\u8868"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
      className: "jsx-294245335",
      children: view_list.map(mess => {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("li", {
          className: "jsx-294245335" + " " + "visitorInfo",
          children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "jsx-294245335",
            children: mess.nickname ? mess.nickname : mess.ip
          }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
            className: "jsx-294245335",
            children: mess.gmtCreated
          })]
        }, mess.id);
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "294245335",
      children: [".visitorList.jsx-294245335{margin-bottom:10px;padding:16px;}", ".homeRight.jsx-294245335 .visitorList.jsx-294245335 li.jsx-294245335{margin-bottom:5px;}", ".visitorTitle.jsx-294245335{font-size:12px;font-weight:bold;color:#333333;margin-bottom:10px;}", ".visitorInfo.jsx-294245335{margin-top:5px;margin-bottom:5px;}", ".visitorInfo.jsx-294245335 span.jsx-294245335{font-size:12px;color:#666666;margin-right:10px;}", ".borderNone.jsx-294245335{background:#ffffff;}", "ul.jsx-294245335{margin-bottom:0rem;}"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (VisitorList);

/***/ }),

/***/ "JjQ8":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"trees": "articleTrees_trees__3Ij7z",
	"visitorTitle": "articleTrees_visitorTitle__5k4ei"
};


/***/ }),

/***/ "JuFd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (async ({
  url,
  method,
  params
}) => {
  const res = await fetch("http://127.0.0.1:7000" + url, {
    headers: {
      "content-type": "application/json",
      "api-url": url,
      "api-method": method
    },
    method: "POST",
    body: JSON.stringify(params)
  });
  return await res.json();
});

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "LU1S":
/***/ (function(module, exports) {

module.exports = require("React");

/***/ }),

/***/ "Lq3z":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrapImg": "MessageIcon_wrapImg__2wdjN",
	"payCode": "MessageIcon_payCode__30F57",
	"_1pUUKr": "MessageIcon__1pUUKr__3tVmP",
	"_3Pnjry": "MessageIcon__3Pnjry__1QFl2",
	"svgZan": "MessageIcon_svgZan__2Bw8-",
	"anticon": "MessageIcon_anticon__15A0f",
	"P63n6G": "MessageIcon_P63n6G__1YUcg",
	"_2LKTFF": "MessageIcon__2LKTFF__29G4r",
	"_1GPnWJ": "MessageIcon__1GPnWJ___l0Sj",
	"_2LKTFFSHOW": "MessageIcon__2LKTFFSHOW__229VF",
	"P63n6GSHOW": "MessageIcon_P63n6GSHOW__2EG3z",
	"_2VdqdF": "MessageIcon__2VdqdF__-aiUY",
	"formwrap": "MessageIcon_formwrap__3jKTL"
};


/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PSAe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);





const HotArtcle = ({
  com_hot_article,
  title
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: "jsx-1992176359" + " " + "visitorList",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "jsx-1992176359" + " " + "visitorTitle",
      children: title
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("ul", {
      className: "jsx-1992176359",
      children: com_hot_article === null || com_hot_article === void 0 ? void 0 : com_hot_article.map((mess, index) => {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          as: `/infos/${mess.id}`,
          href: `/infos?id=` + mess.id,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("li", {
            className: "jsx-1992176359" + " " + "visitorInfo",
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("span", {
              className: "jsx-1992176359",
              children: mess.title
            })
          }, mess.id)
        }, mess.id);
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1992176359",
      children: [".visitorList.jsx-1992176359{margin-bottom:10px;padding:16px;background:#ffffff;}", ".homeRight.jsx-1992176359 .visitorList.jsx-1992176359 li.jsx-1992176359{margin-bottom:5px;}", ".visitorTitle.jsx-1992176359{font-size:12px;color:#333333;font-weight:bold;margin-bottom:10px;}", ".visitorInfo.jsx-1992176359{margin-top:5px;margin-bottom:5px;cursor:pointer;}", ".visitorInfo.jsx-1992176359 span.jsx-1992176359{font-size:12px;color:#666666;margin-right:10px;}", "ul.jsx-1992176359{margin-bottom:0rem;}"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["a"] = (HotArtcle);

/***/ }),

/***/ "QqKt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ initializeStore; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./store/index.js
/**
 * 页面名_模块名_类型名
 */
/* harmony default export */ var store_0 = ({
  index_article_list: action => {
    return {
      default: {},
      type: 'indexArticleList',
      data: {
        index_article_list: action ? action.data : {}
      }
    };
  },
  index_message_list: action => {
    return {
      default: {},
      type: 'indexMessageList',
      data: {
        index_message_list: action ? action.data : {}
      }
    };
  },
  index_view_list: action => {
    return {
      default: {},
      type: 'indexViewList',
      data: {
        index_view_list: action ? action.data : {}
      }
    };
  }
});
// CONCATENATED MODULE: ./store/post.js
/**
 * 页面名_模块名_类型名
 */
/* harmony default export */ var post = ({
  post_article_list: action => {
    return {
      default: {},
      type: 'postArticleList',
      data: {
        post_article_list: action ? action.data : {}
      }
    };
  },
  post_message_list: action => {
    return {
      default: {},
      type: 'postMessageList',
      data: {
        post_message_list: action ? action.data : {}
      }
    };
  },
  post_view_list: async action => {
    return {
      default: {},
      type: 'postViewList',
      data: {
        post_view_list: action ? action.data : {}
      }
    };
  }
});
// EXTERNAL MODULE: ./httpAgent.js
var httpAgent = __webpack_require__("AKVn");

// CONCATENATED MODULE: ./store/com.js

/**
 * 页面名_模块名_类型名
 */

const comState = {
  com_label_integer: action => {
    return {
      default: 0,
      type: 'comLabelInteger',
      data: {
        com_label_integer: Number(action ? action.com_label_integer : 0)
      }
    };
  },
  com_sort_list: action => {
    return {
      default: 0,
      type: 'comSortList',
      data: {
        com_sort_list: action ? action.data : {}
      }
    };
  },
  com_user_info: action => {
    return {
      default: {},
      type: 'comUserInfo',
      data: {
        com_user_info: (action === null || action === void 0 ? void 0 : action.userinfo) ? action === null || action === void 0 ? void 0 : action.userinfo : {}
      }
    };
  }
};
/* harmony default export */ var com = (comState);
// CONCATENATED MODULE: ./store/info.js
/**
 * 页面名_模块名_类型名
 */
/* harmony default export */ var info = ({
  info_message_list: action => {
    return {
      default: {},
      type: 'infoMessageList',
      data: {
        index_message_list: action ? action.data : {}
      }
    };
  },
  info_view_list: action => {
    return {
      default: {},
      type: 'infoViewList',
      data: {
        index_view_list: action ? action.data : {}
      }
    };
  }
});
// CONCATENATED MODULE: ./store/store.js






const allState = Object.assign(store_0, post, com, info);
const initialState = Object.keys(allState).map(key => {
  return {
    [key]: allState[key]()['default']
  };
}); // 这里暴露出的是创建store的工厂方法
// 每次渲染都需要重新创建一个store实例
// 防止服务端一直复用旧实例 无法和客户端状态同步

function initializeStore(state) {
  const store = Object(external_redux_["createStore"])((state = initialState, action) => {
    let backState = null;
    Object.keys(allState).forEach(item => {
      const fn = allState[item](action);

      if (action.type === fn['type']) {
        backState = fn['data'];
      }
    });
    return backState ? backState : state;
  }, Object.assign({}, initialState, state), Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a));
  return store;
}

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TYEs":
/***/ (function(module, exports) {

module.exports = require("zgl-utils-js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YSmr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CMS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HOME_OG_IMAGE_URL; });
/* unused harmony export ADMIN_HEAD_PIC */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HEAD_PIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PAY_CODE; });
/* unused harmony export ARTICLE_BANNER_PICTURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARTICLE_BANNER_DEFAULT; });
const CMS_NAME = 'ELEVEN';
const HOME_OG_IMAGE_URL = 'https://static2.zugeliang.com/lease/img/55ca7ec0-46ae-11eb-942f-df0c36395158.jpg';
const ADMIN_HEAD_PIC = 'https://static2.zugeliang.com/lease/img/e70d2cb0-46b4-11eb-804e-e7d3fb3f1f4b.png';
const HEAD_PIC = ['https://static2.zugeliang.com/lease/img/c18790f0-4b0c-11eb-942f-df0c36395158.jpeg', 'https://static2.zugeliang.com/lease/img/d49298c0-4b0c-11eb-942f-df0c36395158.jpeg', 'https://static2.zugeliang.com/lease/img/de8d3920-4b0c-11eb-942f-df0c36395158.jpg', 'https://static2.zugeliang.com/lease/img/ea82bf20-4b0c-11eb-942f-df0c36395158.jpg', 'https://static2.zugeliang.com/lease/img/f4617310-4b0c-11eb-ae90-614ce6e0f14d.jpg', 'https://static2.zugeliang.com/lease/img/ff663070-4b0c-11eb-ae90-614ce6e0f14d.jpg'];
const PAY_CODE = 'https://static2.zugeliang.com/lease/img/e866be10-4bea-11eb-942f-df0c36395158.jpeg';
const ARTICLE_BANNER_PICTURE = ['https://static2.zugeliang.com/lease/img/ed1c0d80-4c52-11eb-ae90-614ce6e0f14d.jpg', 'https://static2.zugeliang.com/lease/img/fe333490-4c52-11eb-ae90-614ce6e0f14d.jpg', 'https://static2.zugeliang.com/lease/img/07c91fb0-4c53-11eb-942f-df0c36395158.png', 'https://static2.zugeliang.com/lease/img/0ff9d580-4c53-11eb-942f-df0c36395158.jpg', 'https://static2.zugeliang.com/lease/img/18ab2d00-4c53-11eb-ae90-614ce6e0f14d.jpg', 'https://static2.zugeliang.com/lease/img/200224a0-4c53-11eb-ae90-614ce6e0f14d.jpg', 'https://static2.zugeliang.com/lease/img/2db7f840-4c53-11eb-942f-df0c36395158.jpg', 'https://static2.zugeliang.com/lease/img/367a66c0-4c53-11eb-942f-df0c36395158.jpg', 'https://static2.zugeliang.com/lease/img/4f6fb6d0-4c53-11eb-ae90-614ce6e0f14d.jpg', 'https://static2.zugeliang.com/lease/img/575b2640-4c53-11eb-942f-df0c36395158.jpg'];
const ARTICLE_BANNER_DEFAULT = 'https://static2.zugeliang.com/lease/img/07c91fb0-4c53-11eb-942f-df0c36395158.png';

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./images/images.js
/* harmony default export */ var images_images = ({
  // headerLogo: 'https://static2.zugeliang.com/lease/img/b186f170-3cff-11eb-8ee0-4746f392b8db.png'
  headerLogo: 'https://static2.zugeliang.com/lease/img/f19f2d00-4c44-11eb-ae90-614ce6e0f14d.png'
});
// EXTERNAL MODULE: ./styles/header.module.scss
var header_module = __webpack_require__("ffJT");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// CONCATENATED MODULE: ./components/Header.js







const Header = ({
  com_sort_list,
  com_label_integer
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
    className: "jsx-2441703181" + " " + (header_module_default.a.header || ""),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "jsx-2441703181" + " " + "logo",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: "/",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          src: images_images.headerLogo,
          className: "jsx-2441703181" + " " + (header_module_default.a.headLogoImg || "")
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "jsx-2441703181" + " " + (header_module_default.a.sortList || ""),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        as: `/load/1`,
        href: `/post?id=1&name=开发者手册`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "jsx-2441703181" + " " + ([com_label_integer === 1 ? header_module_default.a.spanShow : header_module_default.a.span].join('') || ""),
          children: "\u5F00\u53D1\u8005\u624B\u518C"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        as: `/load/2`,
        href: `/special?id=2&name=专题`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "jsx-2441703181" + " " + ([com_label_integer === 2 ? header_module_default.a.spanShow : header_module_default.a.span].join('') || ""),
          children: "\u4E13\u9898"
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "2441703181",
      children: [".logo.jsx-2441703181{cursor:pointer;}"]
    })]
  });
};

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dsyZ":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tree");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eNH1":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ArticleBannerImg": "articleList_ArticleBannerImg__lV4S8",
	"articleTitle": "articleList_articleTitle__2o8jB",
	"articleTxt": "articleList_articleTxt__1fs-L",
	"articleLi": "articleList_articleLi__2vue6",
	"articleInfo": "articleList_articleInfo__9qN1B",
	"spanMargin": "articleList_spanMargin__1Yj9W",
	"icon": "articleList_icon__T9JeI",
	"point": "articleList_point__3rRx8"
};


/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "ffJT":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__2q1wF",
	"headLogoImg": "header_headLogoImg__3Rvkp",
	"sortList": "header_sortList__3ZJ2N",
	"span": "header_span__1uAIW",
	"spanShow": "header_spanShow__HXW0r"
};


/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
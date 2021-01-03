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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./store/store.js + 4 modules
var store = __webpack_require__("QqKt");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./lib/with-redux-app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  if (isServer) {
    // 服务端每次执行都重新创建一个store
    return Object(store["a" /* default */])(initialState);
  } // 在客户端执行这个方法的时候 优先返回window上已有的store
  // 而不能每次执行都重新创建一个store 否则状态就无限重置了


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(store["a" /* default */])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var with_redux_app = (Comp => {
  class withReduxApp extends external_react_default.a.Component {
    constructor(props) {
      super(props); // getInitialProps创建了store 这里为什么又重新创建一次？
      // 因为服务端执行了getInitialProps之后 返回给客户端的是序列化后的字符串
      // redux里有很多方法 不适合序列化存储
      // 所以选择在getInitialProps返回initialReduxState初始的状态
      // 再在这里通过initialReduxState去创建一个完整的store

      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      const _this$props = this.props,
            {
        Component,
        pageProps
      } = _this$props,
            rest = _objectWithoutProperties(_this$props, ["Component", "pageProps"]);

      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Comp, _objectSpread(_objectSpread({}, rest), {}, {
        Component: Component,
        pageProps: pageProps,
        reduxStore: this.reduxStore
      }));
    }

  } // 这个其实是_app.js的getInitialProps
  // 在服务端渲染和客户端路由跳转时会被执行
  // 所以非常适合做redux-store的初始化


  withReduxApp.getInitialProps = async ctx => {
    const reduxStore = getOrCreateStore();
    ctx.reduxStore = reduxStore;
    let appProps = {};

    if (typeof Comp.getInitialProps === "function") {
      appProps = await Comp.getInitialProps(ctx);
    }

    return _objectSpread(_objectSpread({}, appProps), {}, {
      initialReduxState: reduxStore.getState()
    });
  };

  return withReduxApp;
});
// EXTERNAL MODULE: ./styles/table.scss
var table = __webpack_require__("C1U0");

// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__("TpwP");

// EXTERNAL MODULE: ./styles/layoutStyle.scss
var layoutStyle = __webpack_require__("P/ek");

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./node_modules/font-awesome/css/font-awesome.min.css
var font_awesome_min = __webpack_require__("H1Ta");

// CONCATENATED MODULE: ./pages/_app.js


function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class _app_MyApp extends app_default.a {
  // App组件的getInitialProps比较特殊
  // 能拿到一些额外的参数
  // Component: 被包裹的组件
  static async getInitialProps(ctx) {
    const {
      Component
    } = ctx;
    let pageProps = {}; // 拿到Component上定义的getInitialProps

    if (Component.getInitialProps) {
      // 执行拿到返回结果
      pageProps = await Component.getInitialProps(ctx);
    } // 返回给组件


    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_redux_["Provider"], {
      store: Object(store["a" /* default */])(),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
    });
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_redux_app(_app_MyApp));

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "C1U0":
/***/ (function(module, exports) {



/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "H1Ta":
/***/ (function(module, exports) {



/***/ }),

/***/ "P/ek":
/***/ (function(module, exports) {



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

/***/ "TpwP":
/***/ (function(module, exports) {



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

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
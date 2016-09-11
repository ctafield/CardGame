/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__players_jsx__);


module.exports = class Index extends React.Component {

  render() {
    return React.createElement(__WEBPACK_IMPORTED_MODULE_0__players_jsx___default.a, null);
  }
};

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = class Player extends React.Component {

  _joinGame(event) {
    console.log('gonna join');
  }

  render() {
    var state = '';
    if (this.props.joined !== true) {
      state = 'Join ' + this.props.name;
    } else {
      state = 'Ready ' + this.props.name;
    }

    return React.createElement(
      'button',
      { onClick: this._joinGame.bind(this) },
      state
    );
  }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_jsx__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__player_jsx__);


module.exports = class Players extends React.Component {

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__player_jsx___default.a, { name: 'Player 1' }),
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__player_jsx___default.a, { name: 'Player 2' }),
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__player_jsx___default.a, { name: 'Player 3' }),
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__player_jsx___default.a, { name: 'Player 4' })
    );
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var Index = __webpack_require__(0);

ReactDOM.render(React.createElement(Index, null), document.getElementById('app'));

/***/ }
/******/ ]);
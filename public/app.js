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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = class GameClient {

  startGame() {
    $.post('http://localhost:8080/api/game/start').done(result => {
      console.log('startGame done: ' + JSON.stringify(result));
    }).fail(result => {
      console.log('startGame failed: ' + JSON.stringify(result));
    });
  }

  playerJoin(name, finished) {
    console.log('player is joining: ' + name);
    var data = {
      name: name
    };
    $.ajax({
      method: 'PUT',
      url: 'http://localhost:8080/api/player',
      data: data
    }).done(result => {
      console.log('done: ' + JSON.stringify(result));
      if (finished) finished(true);
    }).fail(result => {
      console.log('failed: ' + JSON.stringify(result));
      if (finished) finished(false);
    });
  }

};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__players_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__players_jsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__client_js__);



module.exports = class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
    this.joinedPlayers = [];
    this.client = new __WEBPACK_IMPORTED_MODULE_1__client_js___default.a();
  }

  _playedJoined(player) {
    console.log('player joined:' + player);
    this.joinedPlayers.push(player);
    this.setState({ ready: this.joinedPlayers.length === 4 });
  }

  startGame() {
    console.log('starting game');
    this.client.startGame();
  }

  render() {
    var startButton = null;
    if (this.state.ready) {
      startButton = React.createElement(
        'button',
        { onClick: this.startGame.bind(this) },
        'Start!'
      );
    }

    return React.createElement(
      'div',
      null,
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__players_jsx___default.a, { joined: this._playedJoined.bind(this) }),
      startButton
    );
  }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__client_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__client_js__);


module.exports = class Player extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasJoined: false,
      name: this.props.name
    };
    this.client = new __WEBPACK_IMPORTED_MODULE_0__client_js___default.a();
  }

  _joined(result) {
    if (result) {
      this.setState({ hasJoined: true }, () => {
        if (this.props.joined) {
          this.props.joined();
        }
      });
    }
  }

  _joinGame(event) {
    this.client.playerJoin(this.props.name, this._joined.bind(this));
  }

  render() {
    var state = '';
    var disabled = false;

    if (this.state.hasJoined !== true) {
      state = 'Join ' + this.state.name;
    } else {
      state = 'Ready ' + this.state.name;
      disabled = true;
    }

    return React.createElement(
      'button',
      { onClick: this._joinGame.bind(this), disabled: disabled },
      state
    );
  }
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_jsx__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__player_jsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__player_jsx__);


module.exports = class Players extends React.Component {

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__player_jsx___default.a, { name: 'Player 1', joined: () => this.props.joined(1) }),
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__player_jsx___default.a, { name: 'Player 2', joined: () => this.props.joined(2) }),
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__player_jsx___default.a, { name: 'Player 3', joined: () => this.props.joined(3) }),
      React.createElement(__WEBPACK_IMPORTED_MODULE_0__player_jsx___default.a, { name: 'Player 4', joined: () => this.props.joined(4) })
    );
  }
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var Index = __webpack_require__(1);

ReactDOM.render(React.createElement(Index, null), document.getElementById('app'));

/***/ }
/******/ ]);
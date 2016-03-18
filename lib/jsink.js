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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.deepMerge = undefined;

	var _deepMerge2 = __webpack_require__(1);

	var _deepMerge3 = _interopRequireDefault(_deepMerge2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var jsink = {
		deepMerge: _deepMerge3.default
	};

	exports.default = jsink;
	var deepMerge = exports.deepMerge = _deepMerge3.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = function (a, b) {
		if (a === undefined) {
			return clone(b);
		}
		if (b === undefined) {
			return clone(a);
		}
		if (isPrimitiveType(a)) {
			if (isArray(b)) {
				return b.concat(a);
			}
			return clone(a);
		}
		if (isObject(a)) {
			if (isObject(b)) {
				return mergeObject(a, b);
			}
			if (isArray(b)) {
				return b.concat(a);
			}
			return clone(a);
		}
		if (isArray(a)) {
			return a.concat(b);
		}
		throw "Not handled type!";

		function clone(a) {
			if (isObject(a)) {
				return deepMerge({}, a);
			}
			if (isArray(a)) {
				return deepMerge([], a);
			}
			return a;
		}

		function mergeObject(a, b) {
			var propsSet = getPropsSet(a, b);
			return propsSet.reduce(function (merge, prop) {
				if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop)) {
					merge[prop] = deepMerge(a[prop], b[prop]);
				} else if (a.hasOwnProperty(prop)) {
					merge[prop] = a[prop];
				} else {
					merge[prop] = b[prop];
				}
				return merge;
			}, {});
		}

		function getPropsSet(a, b) {
			var aProps = Object.getOwnPropertyNames(a);
			var bProps = Object.getOwnPropertyNames(b);
			var propsSetMap = {};
			aProps.forEach(function (prop) {
				propsSetMap[prop] = true;
			});
			bProps.forEach(function (prop) {
				propsSetMap[prop] = true;
			});
			return Object.getOwnPropertyNames(propsSetMap);
		}

		function isObject(a) {
			return (typeof a === "undefined" ? "undefined" : _typeof(a)) === "object" && a !== null && !Array.isArray(a);
		}

		function isArray(a) {
			return Array.isArray(a);
		}

		function isPrimitiveType(a) {
			return !isObject(a) && !isArray(a);
		}
	};

/***/ }
/******/ ]);
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("jsink", [], factory);
	else if(typeof exports === 'object')
		exports["jsink"] = factory();
	else
		root["jsink"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
	var jsink = {
		deepMerge: __webpack_require__(1).default,
		uuid: __webpack_require__(2).default,
		date: __webpack_require__(3).default
	};
	
	exports.default = jsink;
	var deepMerge = exports.deepMerge = jsink.deepMerge;
	var uuid = exports.uuid = jsink.uuid;
	var date = exports.date = jsink.date;

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	function _deepMerge(a, b) {
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
	}
	
	function clone(a) {
		if (isObject(a)) {
			return _deepMerge({}, a);
		}
		if (isArray(a)) {
			return _deepMerge([], a);
		}
		return a;
	}
	
	function mergeObject(a, b) {
		var propsSet = getPropsSet(a, b);
		return propsSet.reduce(function (merge, prop) {
			if (a.hasOwnProperty(prop) && b.hasOwnProperty(prop)) {
				merge[prop] = _deepMerge(a[prop], b[prop]);
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
	
	exports.default = _deepMerge;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function uuid() {
	    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
	        var r = Math.random() * 16 | 0;
	        var v = c == "x" ? r : r & 0x3 | 0x8;
	        return v.toString(16);
	    });
	}
	
	exports.default = uuid;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _date = __webpack_require__(4);
	
	var _date2 = _interopRequireDefault(_date);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		areSameDay: _areSameDay,
		isDate: _isDate,
		monthName: _monthName
	};
	
	
	function _monthName(date, locale) {
		var monthNameLocale;
		var monthName;
		if (!_isDate(date)) {
			throw "First argument must be a date";
		}
		if (typeof locale === "string") {
			monthNameLocale = _date2.default["monthNames"][locale];
		} else {
			monthNameLocale = _date2.default["monthNames"]["en"];
		}
		if (monthNameLocale !== undefined) {
			monthName = monthNameLocale[date.getMonth()];
		}
		return monthName;
	}
	
	function _isDate(o) {
		return Object.prototype.toString.call(o) === "[object Date]";
	}
	
	function _areSameDay(a, b) {
		return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
		"monthNames": {
			"en": {
				"0": "January",
				"1": "February",
				"2": "March",
				"3": "April",
				"4": "May",
				"5": "June",
				"6": "July",
				"7": "August",
				"8": "September",
				"9": "October",
				"10": "November",
				"11": "December"
			},
			"it": {
				"0": "Gennaio",
				"1": "Febbraio",
				"2": "Marzo",
				"3": "Aprile",
				"4": "Maggio",
				"5": "Giugno",
				"6": "Luglio",
				"7": "Agosto",
				"8": "Settembre",
				"9": "Ottobre",
				"10": "Novembre",
				"11": "Dicembre"
			}
		}
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=jsink.js.map
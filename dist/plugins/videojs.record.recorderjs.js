/*!
 * recorderjs plugin for videojs-record
 * @version 3.6.0
 * @see https://github.com/collab-project/videojs-record
 * @copyright 2014-2019 Collab
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("recorderjs", [], factory);
	else if(typeof exports === 'object')
		exports["recorderjs"] = factory();
	else
		root["VideojsRecord"] = root["VideojsRecord"] || {}, root["VideojsRecord"]["recorderjs"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/plugins/recorderjs-plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/plugins/recorderjs-plugin.js":
/*!*********************************************!*\
  !*** ./src/js/plugins/recorderjs-plugin.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst RecordEngine = videojs.getComponent('RecordEngine');\n\nclass RecorderjsEngine extends RecordEngine {\n  setup(stream, mediaType, debug) {\n    this.inputStream = stream;\n    this.mediaType = mediaType;\n    this.debug = debug;\n    let AudioContext = window.AudioContext || window.webkitAudioContext;\n    this.audioContext = new AudioContext();\n    this.audioSourceNode = this.audioContext.createMediaStreamSource(this.inputStream);\n    this.engine = new Recorder(this.audioSourceNode, {\n      bufferLen: this.bufferSize,\n      numChannels: this.audioChannels\n    });\n  }\n\n  start() {\n    this.engine.record();\n  }\n\n  stop() {\n    this.engine.stop();\n\n    if (this.engine.exportWAV !== undefined) {\n      this.engine.exportWAV(this.onStopRecording.bind(this));\n    }\n\n    if (this.engine.clear !== undefined) {\n      this.engine.clear();\n    }\n  }\n\n}\n\nvideojs.RecorderjsEngine = RecorderjsEngine;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RecorderjsEngine);\n\n//# sourceURL=webpack://VideojsRecord.%5Bname%5D/./src/js/plugins/recorderjs-plugin.js?");

/***/ })

/******/ });
});
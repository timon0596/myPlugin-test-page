/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller/controller2.ts":
/*!***************************************!*\
  !*** ./src/controller/controller2.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var model_1 = __webpack_require__(/*! ./../model/model */ "./src/model/model.ts");
var view_1 = __webpack_require__(/*! ./../view/view */ "./src/view/view.ts");
var jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
var Controller = /** @class */ (function () {
    function Controller(options) {
        var _this = this;
        this.options = options;
        this.currentHandle = 0;
        this.mousedown = false;
        this.model = new model_1.Model(this.options);
        this.view = new view_1.View(this.options);
        this.init();
        jquery_1.default(document).mouseup(function () {
            _this.mousedown = false;
        });
        jquery_1.default(document).mousemove(function (e) {
            _this.setHandle(e);
        });
        this.view.slider.slider.click(function (e) {
            _this.setHandle(e);
        });
        jquery_1.default(window).on('resize', this.reinit.bind(this));
    }
    Controller.prototype.init = function () {
        var _this = this;
        this.options.vertical ? this.view.vertical() : 0;
        !this.options.range ? this.view.rangeOff() : 0;
        this.options.el.append(this.view.slider.slider);
        this.optionsValidation();
        this.view.scaleValuesInit();
        this.view.handles.forEach(function (el, i) {
            if (_this.options.initialValues[i]) {
                _this.model.computePosByValue(_this.options.initialValues[i], i);
            }
            _this.view.setHandle(_this.model.handlePos[i], i);
            _this.options.range ? _this.view.setRange(_this.model.range()) : 0;
            _this.view.setTitle(_this.model.computeTitle(i), i);
            el.handle.mousedown(function () {
                _this.currentHandle = i;
                _this.mousedown = true;
            });
        });
    };
    Controller.prototype.getSlidersize = function () {
        return this.view.slider.slider[0][this.options.vertical ? 'offsetHeight' : 'offsetWidth'];
    };
    Controller.prototype.setHandle = function (e) {
        if (this.mousedown || e.type == 'click') {
            this.model.computePos(e, this.currentHandle, this.view.slider.slider[0]);
            this.view.setHandle(this.model.handlePos[this.currentHandle], this.currentHandle);
            this.view.setTitle(this.model.computeTitle(this.currentHandle), this.currentHandle);
            this.options.range ? this.view.setRange(this.model.range()) : 0;
            var event_1 = jquery_1.default.Event('changed-handle-pos');
            event_1.handleIndex = this.currentHandle;
            jquery_1.default(this.view.slider.slider).trigger(event_1);
        }
    };
    Controller.prototype.setHandleByValue = function (value, i) {
        this.model.computePosByValue(value, i);
        this.view.setHandle(this.model.handlePos[i], i);
        this.view.setTitle(this.model.computeTitle(i), i);
        this.options.range ? this.view.setRange(this.model.range()) : 0;
    };
    Controller.prototype.optionsValidation = function () {
        this.options.handles = this.options.handles < 1 ? 1 : this.options.handles;
        this.options.type = typeof this.options.values[0];
        if (typeof this.options.initialValues[0] != this.options.type) {
            this.options.initialValues = __spreadArrays(this.options.values);
        }
        this.options.diapason = this.options.type == 'number' ? Math.abs(this.options.values[0] - this.options.values[1]) : 0;
        this.options.slidersize = this.getSlidersize();
        this.options.singleStep = this.options.type == 'string' ?
            this.options.slidersize / (this.options.values.length - 1) : this.options.slidersize / this.options.diapason;
        this.options.stepsize = this.options.singleStep * this.options.step;
    };
    Controller.prototype.vert = function () {
        this.options.vertical = true;
        this.view.vertical();
        this.reinit();
    };
    Controller.prototype.hor = function () {
        this.options.vertical = false;
        this.view.horizontal();
        this.reinit();
    };
    Controller.prototype.rng = function () {
        this.options.range = !this.options.range;
        this.options.range ? this.view.rangeOn() : this.view.rangeOff();
    };
    Controller.prototype.title = function () {
        this.options.title = !this.options.title;
        this.options.title ? this.view.titleOn() : this.view.titleOff();
    };
    Controller.prototype.reinit = function () {
        var _this = this;
        this.options.slidersize = this.getSlidersize();
        this.options.singleStep = this.options.type == 'string' ?
            this.options.slidersize / (this.options.values.length - 1) : this.options.slidersize / this.options.diapason;
        this.options.stepsize = this.options.singleStep * this.options.step;
        this.model.handlePos = this.model.handlePos.map(function (el, i) {
            return _this.options.singleStep * _this.model.handleSteps[i];
        });
        this.view.handles.forEach(function (el, i) {
            _this.view.setHandle(_this.model.handleSteps[i] * _this.options.singleStep, i);
            _this.view.setTitle(_this.model.computeTitle(i), i);
        });
        this.options.range ? this.view.setRange(this.model.range()) : 0;
        this.view.scaleValues();
    };
    return Controller;
}());
exports.Controller = Controller;


/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(/*! ../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003C!DOCTYPE html\u003E\n\u003Chtml lang=\"en\"\u003E\u003C\u002Fhtml\u003E\n\u003Chead\u003E\n  \u003Cmeta charset=\"UTF-8\"\u003E\n  \u003Ctitle\u003EDocument\u003C\u002Ftitle\u003E\n\u003C\u002Fhead\u003E\n\u003Cbody\u003EmyPlugin\n  \u003Cmain\u003E\n    \u003Cdiv class=\"example\"\u003E\n      \u003Cdiv class=\"js-test\"\u003E\n        \u003Cdiv class=\"inputPanel\"\u003E\n          \u003Cdiv class=\"config\"\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"js-test\"\u003E\n        \u003Cdiv class=\"inputPanel\"\u003E\n          \u003Cdiv class=\"config\"\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"js-test\"\u003E\n        \u003Cdiv class=\"inputPanel\"\u003E\n          \u003Cdiv class=\"config\"\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"js-test\"\u003E\n        \u003Cdiv class=\"inputPanel\"\u003E\n          \u003Cdiv class=\"config\"\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"js-test\"\u003E\n        \u003Cdiv class=\"inputPanel\"\u003E\n          \u003Cdiv class=\"config\"\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"js-test\"\u003E\n        \u003Cdiv class=\"inputPanel\"\u003E\n          \u003Cdiv class=\"config\"\u003E\u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fmain\u003E\n\u003C\u002Fbody\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {
Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./index.pug */ "./src/index.pug");
__webpack_require__(/*! ./plugin.ts */ "./src/plugin.ts");
__webpack_require__(/*! ./style.sass */ "./src/style.sass");
__webpack_require__(/*! ./types */ "./src/types.ts");
var c = [];
var opts = [
    { values: [100, 600], step: 13, initialValues: [200, 250, 10], handles: 3 },
    { values: [100, 600], step: 13, initialValues: [200, 250, 10], handles: 1, vertical: true },
    { values: [0, 160], step: 3, handles: 2 },
    { values: ['a', 'b', 'c', 'd'], handles: 1, step: 1 },
    { handles: 3, initialValues: [1] },
    { handles: 3, initialValues: [1], vertical: true },
];
$('.js-test').each(function (i, el) {
    c[i] = $(el).timonSliderPlugin(opts[i]).controller;
    $(el).find('.inputPanel').append($('<button>', {
        class: 'vert',
        text: 'vert',
        on: {
            click: function () {
                c[i].vert();
            }
        }
    }), $('<button>', {
        class: 'hor',
        text: 'hor',
        on: {
            click: function () {
                c[i].hor();
            }
        }
    }), $('<button>', {
        class: 'rng',
        text: 'rng',
        on: {
            click: function () {
                c[i].rng();
            }
        }
    }), $('<button>', {
        class: 'titles',
        text: 'title',
        on: {
            click: function () {
                c[i].title();
            }
        }
    }));
    c[i].model.handleSteps.forEach(function (elem, ind) {
        $(el).find('.inputPanel').append($('<input>', {
            val: c[i].model.computeTitle(ind),
            on: {
                blur: function () {
                    c[i].setHandleByValue(this.value, ind);
                }
            }
        }));
    });
    var handler = function (e) {
        $(el).find('input')[e.handleIndex].value = c[i].model.computeTitle(e.handleIndex);
    };
    c[i].view.slider.slider.on('changed-handle-pos', handler);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/model/model.ts":
/*!****************************!*\
  !*** ./src/model/model.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model(options) {
        this.options = options;
        this.handlePos = [];
        this.handleSteps = [];
        for (var i = 0; i < this.options.handles; i++) {
            this.handlePos.push(0);
            this.handleSteps.push(0);
        }
    }
    Model.prototype.computePos = function (_a, i, _b) {
        var x = _a.pageX, y = _a.pageY;
        var top = _b.offsetTop, left = _b.offsetLeft, height = _b.offsetHeight;
        var pos = this.options.vertical ?
            top + height - y - this.handlePos[i] :
            x - left - this.handlePos[i];
        var pos1 = this.options.vertical ?
            top + height - y :
            x - left;
        this.handlePos[i] += Math.abs(pos) / this.options.stepsize > 1 ? Math.round(pos / this.options.stepsize) * this.options.stepsize : 0;
        this.handlePos[i] = pos1 > this.options.slidersize ?
            this.options.slidersize :
            pos1 < 0 ? 0 : this.handlePos[i];
        this.handleSteps[i] = Math.round(this.handlePos[i] / this.options.singleStep);
    };
    Model.prototype.computeTitle = function (i) {
        var index = this.handleSteps[i];
        return this.options.type == 'string' ? this.options.values[index] : this.handleSteps[i] + this.options.values[0];
    };
    Model.prototype.computePosByValue = function (value, index) {
        if (isNaN(Number(value)) && this.options.type == 'number') {
            return;
        }
        if (this.options.type == 'string') {
            var i = this.options.values.indexOf(value);
            this.handleSteps[index] = i != -1 ? i : 0;
            this.handlePos[index] = this.handleSteps[index] * this.options.singleStep;
        }
        else {
            this.handleSteps[index] = Number(value) > this.options.values[1] ?
                this.options.values[1] :
                Number(value) < this.options.values[0] ?
                    this.options.values[0] : Number(value);
            this.handleSteps[index] = this.handleSteps[index] - this.options.values[0];
            this.handlePos[index] = this.handleSteps[index] * this.options.singleStep;
        }
    };
    Model.prototype.range = function () {
        var start = this.handlePos.length < 2 ? 0 : Math.min.apply(Math, this.handlePos);
        console.log(this.handlePos);
        return { start: start, lngt: Math.max.apply(Math, this.handlePos) - start };
    };
    return Model;
}());
exports.Model = Model;


/***/ }),

/***/ "./src/plugin.ts":
/*!***********************!*\
  !*** ./src/plugin.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller2_1 = __webpack_require__(/*! ./controller/controller2 */ "./src/controller/controller2.ts");
(function ($) {
    $.fn.timonSliderPlugin = function (options) {
        var initOptions = {
            vertical: false,
            step: 2,
            handles: 1,
            title: true,
            range: true,
            values: ['aaa', 'sss', 'ddd', 'fff', 'qqq', 'www', 'eee', 'rrr', 'zzz', 'xxx'],
            // values: [123,567],
            // initialValues:['3','4','5'],
            // initialValues:[-1000,-1000],
            initialValues: ['qqq', 'www', 'eee'],
            type: 'string',
            slidersize: 0,
            stepsize: 0,
            singleStep: 0,
            diapason: 0,
            el: $()
        };
        initOptions = __assign(__assign(__assign({}, initOptions), options), { el: this });
        var controller = new controller2_1.Controller(initOptions);
        return new Proxy(this, {
            get: function (target, prop) {
                switch (prop) {
                    case 'controller':
                        return controller;
                    default:
                        return target[prop];
                }
            }
        });
    };
}(jQuery));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),

/***/ "./src/view/view.ts":
/*!**************************!*\
  !*** ./src/view/view.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
var jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));
var Handle = /** @class */ (function () {
    function Handle() {
        this.handle = jquery_1.default('<div>', { class: 'handle' });
        this.title = jquery_1.default('<div>', { class: 'title' });
        this.init();
    }
    Handle.prototype.init = function () {
        this.handle.append(this.title);
    };
    return Handle;
}());
var Slider = /** @class */ (function () {
    function Slider() {
        this.slider = jquery_1.default('<div>', { class: 'slider' });
        this.axis = jquery_1.default('<div>', { class: 'axis' });
        this.scale = jquery_1.default('<div>', { class: 'scale' });
        this.range = jquery_1.default('<div>', { class: 'range' });
        this.init();
    }
    Slider.prototype.init = function () {
        this.axis.append(this.range);
        this.slider.append(this.axis).append(this.scale);
    };
    return Slider;
}());
var View = /** @class */ (function () {
    function View(options) {
        this.options = options;
        this.handles = [];
        this.slider = new Slider();
        for (var i = 0; i < this.options.handles; i++) {
            this.handles.push(new Handle());
        }
        this.init();
    }
    View.prototype.init = function () {
        var _this = this;
        this.handles.forEach(function (el) {
            _this.slider.axis.append(el.handle);
        });
    };
    View.prototype.vertical = function () {
        this.slider.slider.addClass('vertical');
    };
    View.prototype.horizontal = function () {
        this.slider.slider.removeClass('vertical');
    };
    View.prototype.titleOff = function () {
        this.handles.forEach(function (el) {
            el.title.hide();
        });
    };
    View.prototype.titleOn = function () {
        this.handles.forEach(function (el) {
            el.title.show();
        });
    };
    View.prototype.rangeOn = function () {
        this.slider.range.show();
    };
    View.prototype.rangeOff = function () {
        this.slider.range.hide();
    };
    View.prototype.setRange = function (_a) {
        var start = _a.start, lngt = _a.lngt;
        this.slider.range.css(this.options.vertical ? 'bottom' : 'left', start + 'px');
        this.slider.range.css(this.options.vertical ? 'left' : 'bottom', 0 + 'px');
        this.slider.range.css(this.options.vertical ? 'height' : 'width', lngt + 'px');
        this.slider.range.css(this.options.vertical ? 'width' : 'height', 20 + 'px');
    };
    View.prototype.setHandle = function (pos, i) {
        this.handles[i].handle.css(this.options.vertical ? 'bottom' : 'left', pos + 'px');
        this.handles[i].handle.css(this.options.vertical ? 'left' : 'bottom', 0);
    };
    View.prototype.setTitle = function (value, i) {
        this.handles[i].title.text(value);
    };
    View.prototype.scaleValuesInit = function () {
        var _this = this;
        this.options.values.forEach(function (el, i) {
            var pos = _this.options.type == 'string' ? _this.options.singleStep * i : _this.options.slidersize * i;
            var $p = jquery_1.default('<p>');
            $p.css(_this.options.vertical ? 'bottom' : 'left', pos + 'px');
            $p.html("" + el);
            _this.slider.scale.append($p);
        });
    };
    View.prototype.scaleValues = function () {
        var _this = this;
        this.options.values.forEach(function (el, i) {
            var pos = _this.options.type == 'string' ? _this.options.singleStep * i : _this.options.slidersize * i;
            var $p = jquery_1.default(_this.slider.scale).find('p')[i];
            jquery_1.default($p).css(_this.options.vertical ? 'bottom' : 'left', pos + 'px');
            jquery_1.default($p).css(_this.options.vertical ? 'left' : 'bottom', 0);
        });
    };
    return View;
}());
exports.View = View;


/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
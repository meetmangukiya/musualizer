(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-visualizer></app-visualizer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'musualizer';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualizer/visualizer.component */ "./src/app/visualizer/visualizer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _visualizer_visualizer_component__WEBPACK_IMPORTED_MODULE_3__["VisualizerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/visualizer/visualizer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/visualizer/visualizer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#visual {\n  z-index: 0;\n}\n"

/***/ }),

/***/ "./src/app/visualizer/visualizer.component.html":
/*!******************************************************!*\
  !*** ./src/app/visualizer/visualizer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"file\">Upload file: </label>\n<input type=\"file\" name=\"file\" accept=\"audio/*\" (change)=\"onFileChange()\"><br>\n<select id=\"method\">\n  <option selected value=\"Circular bars\">Circular Bars</option>\n  <option value=\"Bars\">Bars</option>\n</select>\n<br>\n\n<audio id=\"player\" controls autoplay>\n</audio>\n\n<br>\n\n<canvas id=\"visual\">\n\n</canvas>\n"

/***/ }),

/***/ "./src/app/visualizer/visualizer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/visualizer/visualizer.component.ts ***!
  \****************************************************/
/*! exports provided: VisualizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizerComponent", function() { return VisualizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisualizerComponent = /** @class */ (function () {
    function VisualizerComponent() {
    }
    VisualizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.audioCtx = new AudioContext();
        console.log(this.audioCtx);
        this.sourceNode = this.audioCtx.createMediaElementSource(document.getElementById('player'));
        console.log(this.sourceNode);
        this.analyser = this.audioCtx.createAnalyser();
        this.analyser.fftSize = 256;
        console.log(this.analyser);
        this.sourceNode.connect(this.analyser);
        this.analyser.connect(this.audioCtx.destination);
        this.array = new Uint8Array(this.analyser.frequencyBinCount);
        console.log(this.array);
        this.refresh();
        setInterval(function () { return _this.refresh(); }, 25);
        var switcher = document.getElementById('method');
        setInterval(function () { return switcher.value == 'Bars' ? switcher.value = "Circular bars" : switcher.value = "Bars"; }, 5000);
        document.body.style.backgroundColor = 'orange';
    };
    VisualizerComponent.prototype.onFileChange = function () {
        var _this = this;
        var file = document.querySelector("input[name='file']").files[0];
        var fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = function () {
            _this.visualize(fileReader.result);
        };
        document.getElementById('visual').scrollIntoView();
    };
    VisualizerComponent.prototype.circularBars = function (ctx, freq, time) {
        var vw = document.documentElement.clientWidth;
        var vh = document.documentElement.clientHeight;
        var center = {
            x: vw / 2,
            y: vh / 2,
        };
        var radius = vh / 4;
        var startAngle = 0;
        ctx.beginPath();
        var tmp = freq.filter(function (a) { return a != 0; });
        var stepAngle = Math.PI * 2 / tmp.length;
        for (var i = 0; i < tmp.length; i++) {
            var displacement = (tmp[i]) / 256 * radius;
            ctx.arc(center.x, center.y, radius + displacement, startAngle, startAngle + stepAngle, false);
            startAngle += stepAngle;
        }
        ctx.closePath();
        ctx.fillStyle = '#000';
        ctx.fill();
        startAngle = 0;
        ctx.beginPath();
        tmp = time.filter(function (a) { return a != 0; });
        stepAngle = Math.PI * 2 / tmp.length;
        for (var i = 0; i < tmp.length; i++) {
            var displacement = (tmp[i]) / 256 * radius / 2;
            ctx.arc(center.x, center.y, (radius / 2) + displacement, startAngle, startAngle + stepAngle, true);
            startAngle += stepAngle;
        }
        ctx.closePath();
        ctx.fillStyle = '#8b008b';
        ctx.fill();
    };
    VisualizerComponent.prototype.refresh = function () {
        var canvas = document.getElementById('visual');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var array = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteFrequencyData(array);
        //console.log(array);
        var timearr = new Uint8Array(this.analyser.frequencyBinCount);
        this.analyser.getByteTimeDomainData(timearr);
        var method = document.getElementById('method').value;
        console.log(method);
        switch (method) {
            case 'Circular bars':
                console.log("executing...");
                this.circularBars(ctx, array, timearr);
                break;
            case 'Bars':
                this.bars(ctx, array, timearr);
                break;
        }
    };
    VisualizerComponent.prototype.bars = function (ctx, freq, time) {
        var vw = document.documentElement.clientWidth;
        var vh = document.documentElement.clientHeight;
        var height = vh / 2;
        var start = 0;
        var tmp = freq.filter(function (a) { return a != 0; });
        var step = vw / tmp.length;
        var getRandomColor = function () {
            var str = "0123456789ABCDEF";
            var res = '#';
            for (var i = 0; i < 6; i++) {
                res += str[Math.floor(Math.random() * 16)];
            }
            return res;
        };
        for (var i = 0; i < tmp.length; i++) {
            var displacement = (tmp[i]) / 256 * height;
            ctx.fillStyle = getRandomColor();
            ctx.fillRect(start, vh - height - displacement, step, height + displacement);
            start += step;
        }
    };
    VisualizerComponent.prototype.visualize = function (data) {
        // load data in the player
        document.querySelector("audio").src = data;
        var canvas = document.querySelector("#visual");
        canvas.height = document.documentElement.clientHeight;
        canvas.width = document.documentElement.clientWidth;
    };
    VisualizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visualizer',
            template: __webpack_require__(/*! ./visualizer.component.html */ "./src/app/visualizer/visualizer.component.html"),
            styles: [__webpack_require__(/*! ./visualizer.component.css */ "./src/app/visualizer/visualizer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VisualizerComponent);
    return VisualizerComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/meetmangukiya/musualizer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
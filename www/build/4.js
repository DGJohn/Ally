webpackJsonp([4],{

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPageModule", function() { return RightPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RightPageModule = (function () {
    function RightPageModule() {
    }
    return RightPageModule;
}());
RightPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__right__["a" /* RightPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__right__["a" /* RightPage */]),
        ],
    })
], RightPageModule);

//# sourceMappingURL=right.module.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RightPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RightPage = (function () {
    function RightPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RightPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RightPage');
    };
    return RightPage;
}());
RightPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-right',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\right\right.html"*/'<ion-row Padding>\n\n  <ion-col>\n\n    <div>\n\n      <ion-col>\n\n      </ion-col>\n\n      <ion-col>\n\n        <img class="ally" src="assets/imgs/Ally-M.jpg" style="float:right;" alt="Lights" style="width:30%;max-width:400px">\n\n      </ion-col>\n\n    </div>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n<ion-row>\n\n\n\n  <ion-col>\n\n    <div>\n\n      <p>Super Tim!</p>\n\n      <p>Deine Antwort war korrekt - weiter so!</p>\n\n    </div>\n\n  </ion-col>\n\n</ion-row>\n\n\n\n<ion-col>\n\n  <div>\n\n\n\n  </div>\n\n</ion-col>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\right\right.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RightPage);

//# sourceMappingURL=right.js.map

/***/ })

});
//# sourceMappingURL=4.js.map
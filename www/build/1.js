webpackJsonp([1],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question3PageModule", function() { return Question3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question3__ = __webpack_require__(554);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Question3PageModule = (function () {
    function Question3PageModule() {
    }
    return Question3PageModule;
}());
Question3PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__question3__["a" /* Question3Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question3__["a" /* Question3Page */]),
        ],
    })
], Question3PageModule);

//# sourceMappingURL=question3.module.js.map

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

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right_right__ = __webpack_require__(550);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Question3Page = (function () {
    function Question3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.frage = "Was blüht im April und Mai?";
        this.rightAnswer = "answer1";
    }
    Question3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    Question3Page.prototype.onClick = function () {
        console.log("TEST");
        this.navCtrl.pop();
    };
    Question3Page.prototype.onSelect = function (selected) {
        console.log(selected);
        if (selected.value === this.rightAnswer) {
            console.log("RICHTIG");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__right_right__["a" /* RightPage */]);
        }
        else {
            console.log("FALSCH");
            // TODO: Push other Page
        }
    };
    return Question3Page;
}());
Question3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-question3',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\question3\question3.html"*/'<ion-content padding>\n\n  \n\n    <ion-row>\n\n    </ion-row>\n\n    <ion-row>\n\n  \n\n      <ion-col>\n\n        <div>\n\n          <ion-col>\n\n          </ion-col>\n\n          <ion-col>\n\n            <img class="ally" src="assets/imgs/Ally-M.jpg" style="float:right;" alt="Lights" style="width:30%;max-width:400px">\n\n          </ion-col>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  \n\n    <ion-row>\n\n      <p>{{frage}}</p>\n\n    </ion-row>\n\n  \n\n    <ion-scroll scrollX="false" scrollY="false" style="height: 180px;">\n\n  \n\n      <ion-list radio-group>\n\n        <ion-item>\n\n          <ion-label>Weihnachtsbaum, Brike, Eiche, Buche</ion-label>\n\n          <ion-radio checked="false" value="answer1" #answer1 (ionSelect)="onSelect(answer1)"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Tanne, Weide, Birke, Eiche, Buche</ion-label>\n\n          <ion-radio checked="false" value="answer2" #answer2 (ionSelect)="onSelect(answer2)"></ion-radio>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>Kräuter, Weide, Birke, Eiche, Buche</ion-label>\n\n          <ion-radio checked="false" value="answer3" #answer3 (ionSelect)="onSelect(answer3)"></ion-radio>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-scroll>\n\n  \n\n  \n\n    <button ion-button (click)="onNext()">Weiter</button>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\question3\question3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Question3Page);

//# sourceMappingURL=question3.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
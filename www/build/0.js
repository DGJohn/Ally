webpackJsonp([0],{

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question4PageModule", function() { return Question4PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question4__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Question4PageModule = (function () {
    function Question4PageModule() {
    }
    return Question4PageModule;
}());
Question4PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__question4__["a" /* Question4Page */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__question4__["a" /* Question4Page */]),
        ],
    })
], Question4PageModule);

//# sourceMappingURL=question4.module.js.map

/***/ }),

/***/ 548:
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
        selector: 'page-right',template:/*ion-inline-start:"/Users/tanjanedovic/Documents/workspace/Ally/src/pages/game/right/right.html"*/'<ion-row Padding>\n  <ion-col>\n    <div>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <img class="ally" src="assets/imgs/Ally-M.jpg" style="float:right;" alt="Lights" style="width:30%;max-width:400px">\n      </ion-col>\n    </div>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n\n  <ion-col>\n    <div>\n      <p>Super Tim!</p>\n      <p>Deine Antwort war korrekt - weiter so!</p>\n    </div>\n  </ion-col>\n</ion-row>\n\n<ion-col>\n  <div>\n\n  </div>\n</ion-col>'/*ion-inline-end:"/Users/tanjanedovic/Documents/workspace/Ally/src/pages/game/right/right.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], RightPage);

//# sourceMappingURL=right.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right_right__ = __webpack_require__(548);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Question4Page = (function () {
    function Question4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.frage = "Welche Pollenallergie tritt am häufigsten auf?";
        this.rightAnswer = "answer1";
    }
    Question4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    Question4Page.prototype.onClick = function () {
        console.log("TEST");
        this.navCtrl.pop();
    };
    Question4Page.prototype.onSelect = function (selected) {
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
    return Question4Page;
}());
Question4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-question4',template:/*ion-inline-start:"/Users/tanjanedovic/Documents/workspace/Ally/src/pages/game/question4/question4.html"*/'<ion-content padding>\n  \n    <ion-row>\n    </ion-row>\n    <ion-row>\n  \n      <ion-col>\n        <div>\n          <ion-col>\n          </ion-col>\n          <ion-col>\n            <img class="ally" src="assets/imgs/Ally-M.jpg" style="float:right;" alt="Lights" style="width:30%;max-width:400px">\n          </ion-col>\n        </div>\n      </ion-col>\n    </ion-row>\n  \n    <ion-row>\n      <p>{{frage}}</p>\n    </ion-row>\n  \n    <ion-scroll scrollX="false" scrollY="false" style="height: 180px;">\n  \n      <ion-list radio-group>\n        <ion-item>\n          <ion-label>Gräser</ion-label>\n          <ion-radio checked="false" value="answer1" #answer1 (ionSelect)="onSelect(answer1)"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Birke</ion-label>\n          <ion-radio checked="false" value="answer2" #answer2 (ionSelect)="onSelect(answer2)"></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Eiche</ion-label>\n          <ion-radio checked="false" value="answer3" #answer3 (ionSelect)="onSelect(answer3)"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </ion-scroll>\n  \n  \n    <button ion-button (click)="onNext()">Weiter</button>\n  </ion-content>'/*ion-inline-end:"/Users/tanjanedovic/Documents/workspace/Ally/src/pages/game/question4/question4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Question4Page);

//# sourceMappingURL=question4.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
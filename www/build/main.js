webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = (function () {
    function Answer(_label) {
        this._label = _label;
        this._name = (Answer.currentId++).toString();
    }
    Object.defineProperty(Answer.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Answer;
}());

Answer.currentId = 0;
//# sourceMappingURL=Answer.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TipsPage = (function () {
    function TipsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TipsPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    return TipsPage;
}());
TipsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-tips',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\newEntry\tips\tips.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyOk.png"/>\n\n  <ion-card-content>\n\n    <ion-card-title>Mein Tipp</ion-card-title>\n\n         <p>Halte Dich wenig draussen auf.</p>\n\n         <p>Wasche Dir täglich die Haare.</p>\n\n       </ion-card-content>\n\n       </ion-card>\n\n\n\n    <button (click)="pushHomePage()" ion-button secondary icon-left>\n\n      <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n    </button>\n\n    <button (click)="pushHomePage()" ion-button icon-right secondary>Weiter zum Menu\n\n      <ion-icon name="ios-arrow-forward"></ion-icon>\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\newEntry\tips\tips.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TipsPage);

//# sourceMappingURL=tips.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right2_right2__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__false2_false2__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Question2Page = (function () {
    function Question2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.frage = "Ist Heuschnupfen eine ansteckende Krankheit?";
        this.rightAnswer = "answer2";
    }
    Question2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    Question2Page.prototype.onClick = function () {
        console.log("TEST");
        this.navCtrl.pop();
    };
    Question2Page.prototype.onSelect = function (selected) {
        console.log(selected);
        if (selected.value === this.rightAnswer) {
            console.log("RICHTIG");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__right2_right2__["a" /* Right2Page */]);
        }
        else {
            console.log("FALSCH");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__false2_false2__["a" /* False2Page */]);
        }
    };
    return Question2Page;
}());
Question2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-question2',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\question2\question2.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Quiz</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyAchtung.png" />\n\n    <ion-card-content>\n\n\n\n      <p>{{frage}}</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-scroll scrollX="false" scrollY="false" style="height: 180px;">\n\n\n\n    <ion-list radio-group>\n\n      <ion-item>\n\n        <ion-label>Ja</ion-label>\n\n        <ion-radio checked="false" value="answer1" #answer1 (ionSelect)="onSelect(answer1)"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Nein</ion-label>\n\n        <ion-radio checked="false" value="answer2" #answer2 (ionSelect)="onSelect(answer2)"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\question2\question2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Question2Page);

//# sourceMappingURL=question2.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right3_right3__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__false3_false3__ = __webpack_require__(356);
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
        this.rightAnswer = "answer2";
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__right3_right3__["a" /* Right3Page */]);
        }
        else {
            console.log("FALSCH");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__false3_false3__["a" /* False3Page */]);
        }
    };
    return Question3Page;
}());
Question3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-question3',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\question3\question3.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Quiz</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyAchtung.png" />\n\n    <ion-card-content>\n\n\n\n      <p>{{frage}}</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-scroll scrollX="false" scrollY="false" style="height: 180px;">\n\n\n\n    <ion-list radio-group>\n\n      <ion-item>\n\n        <ion-label>Pappel, Weide, Birke, Eiche</ion-label>\n\n        <ion-radio checked="false" value="answer1" #answer1 (ionSelect)="onSelect(answer1)"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Tanne, Weide, Birke, Eiche</ion-label>\n\n        <ion-radio checked="false" value="answer2" #answer2 (ionSelect)="onSelect(answer2)"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Kräuter, Weide, Birke, Eiche</ion-label>\n\n        <ion-radio checked="false" value="answer3" #answer3 (ionSelect)="onSelect(answer3)"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\question3\question3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Question3Page);

//# sourceMappingURL=question3.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right4_right4__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__false4_false4__ = __webpack_require__(355);
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
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__right4_right4__["a" /* Right4Page */]);
        }
        else {
            console.log("FALSCH");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__false4_false4__["a" /* False4Page */]);
        }
    };
    return Question4Page;
}());
Question4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-question4',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\question4\question4.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Quiz</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyAchtung.png" />\n\n    <ion-card-content>\n\n\n\n      <p>{{frage}}</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-scroll scrollX="false" scrollY="false" style="height: 180px;">\n\n\n\n    <ion-list radio-group>\n\n      <ion-item>\n\n        <ion-label>Gräser</ion-label>\n\n        <ion-radio checked="false" value="answer1" #answer1 (ionSelect)="onSelect(answer1)"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Birke</ion-label>\n\n        <ion-radio checked="false" value="answer2" #answer2 (ionSelect)="onSelect(answer2)"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Eiche</ion-label>\n\n        <ion-radio checked="false" value="answer3" #answer3 (ionSelect)="onSelect(answer3)"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\question4\question4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Question4Page);

//# sourceMappingURL=question4.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_overview__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_community__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introduction_introduction__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newEntry_newEntry__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pollen_pollen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_game__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.pushOverviewPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__overview_overview__["a" /* OverviewPage */]);
    };
    HomePage.prototype.pushCommunityPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__community_community__["a" /* CommunityPage */]);
    };
    HomePage.prototype.pushIntroductionPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__introduction_introduction__["a" /* IntroductionPage */]);
    };
    HomePage.prototype.pushNewEntryPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__newEntry_newEntry__["a" /* NewEntryPage */]);
    };
    HomePage.prototype.pushPollenPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pollen_pollen__["a" /* PollenPage */]);
    };
    HomePage.prototype.pushGamePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__game_game__["a" /* GamePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<img class="displayed" src="assets/img/LogoAlly.png"/>\n\n<ion-content padding>\n\n  <button ion-button block (click)="pushNewEntryPage()">\n\n    Neuer Eintrag</button>\n\n  <button ion-button block (click)="pushOverviewPage()">\n\n    Übersicht</button>\n\n  <button ion-button block (click)="pushPollenPage()">\n\n   Pollenprognose</button>\n\n  <button ion-button block (click)="pushCommunityPage()">\n\n    Community</button>\n\n    <button ion-button block (click)="pushGamePage()">\n\n      Game</button>\n\n    <button ion-button block (click)="pushIntroductionPage()">\n\n        Einführung</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_midata__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_midata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_midata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_MidataConnectionService__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typings_globals__ = __webpack_require__(548);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Additional Plugins




var ProfilePage = (function () {
    function ProfilePage(navCtrl, translate, alertCtrl, camera, parametersService, midataConnectionService, zone) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.parametersService = parametersService;
        this.midataConnectionService = midataConnectionService;
        this.zone = zone;
        this.photoAccessURL = "assets/img/default-profile.png";
        this.parameters = this.parametersService.parameters;
        this.loadUserData();
    }
    /**
      * Got all the information of the patient to be used in the profile.
      * @returns A mapped promise, which could be subscribe in another part of the application
    */
    ProfilePage.prototype.loadUserData = function () {
        var _this = this;
        this.midataConnectionService.search('Patient', { _id: this.midataConnectionService.getUser().id })
            .subscribe(function (response) {
            if (response.length > 0) {
                _this.name = response[0]._fhir.name[0].given[0] + ' ' + response[0]._fhir.name[0].family;
                _this.username = response[0]._fhir.telecom[0].value;
                _this.birthDate = response[0]._fhir.birthDate;
                _this.gender = response[0]._fhir.gender;
                _this.genderSelect();
                _this.getPhoto();
                _this.getBodyHeight();
            }
            else {
                // TODO: implement a solution
            }
        });
    };
    /**
      * Update the photo of the user in the user entity to be used in the rest of the application.
      * @returns A mapped promise, which could be subscribe in another part of the application
      */
    ProfilePage.prototype.getPhoto = function () {
        var _this = this;
        this.midataConnectionService.search('Media', { patient: this.midataConnectionService.getUser().id })
            .subscribe(function (response) {
            _this.zone.run(function () {
                if (response.length > 0) {
                    _this.photoStoragePath = response[0]._fhir.content.url;
                    _this.photoAccessURL = _this.photoStoragePath + '&access_token=' + _this.midataConnectionService.getAuthToken();
                }
                else {
                    _this.photoAccessURL = "assets/img/default-profile.png";
                }
            });
        });
    };
    ;
    ProfilePage.prototype.genderSelect = function () {
        //Translate the gender and set the correct icon corresponding to the gender of the user
        this.genderIcon = (this.gender === 'female' ? 'female' : 'male');
    };
    ;
    // TODO: translate
    // TODO: check value entered by the user (> 30cm && < 250cm)
    ProfilePage.prototype.updateBodyHeight = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Height in cm",
            inputs: [
                {
                    name: 'heightInput',
                    placeholder: this.bodyHeight.toString()
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.bodyHeight = data.heightInput;
                        _this.save(new __WEBPACK_IMPORTED_MODULE_5_midata__["BodyHeight"](_this.bodyHeight, new Date()).toJson());
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.getBodyHeight = function () {
        var _this = this;
        this.midataConnectionService.search('Observation/$lastn', { max: 1, _sort: '-date', code: __WEBPACK_IMPORTED_MODULE_7__typings_globals__["a" /* HEIGHT */].toString, patient: this.midataConnectionService.getUser().id })
            .subscribe(function (response) {
            if (response.length > 0) {
                var obj = response[0].toJson();
                //If the unit of the height is in meter, transform it to cm
                if (obj.valueQuantity.unit === 'm') {
                    _this.bodyHeight = obj.valueQuantity.value * 100;
                }
                else {
                    _this.bodyHeight = obj.valueQuantity.value;
                }
                _this.heightUnit = obj.valueQuantity.unit;
            }
            else {
                // TODO: implement a solution
                _this.bodyHeight = 0;
            }
        });
    };
    ;
    ProfilePage.prototype.save = function (resource) {
        this.midataConnectionService.save(resource).map(function () { });
    };
    ;
    // TODO: translate
    ProfilePage.prototype.photoProfilClick = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Photo Upload",
            buttons: [
                {
                    text: 'Add',
                    role: 'add',
                    handler: function (data) {
                        _this.selectProfilePhoto();
                    }
                },
                {
                    text: 'Delete',
                    role: 'delete',
                    handler: function (data) {
                        _this.midataConnectionService.save(_this.getPlaceholder()).subscribe(function () {
                            _this.zone.run(function () {
                                _this.photoAccessURL = _this.photoStoragePath + '&access_token=' + _this.midataConnectionService.getAuthToken();
                                _this.photoAccessURL = "assets/img/default-profile.png";
                            });
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                }
            ]
        });
        alert.present();
    };
    // TODO: image in folder: src/assets/img
    // TODO: check this method again
    ProfilePage.prototype.getPlaceholder = function () {
        var placeholder = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAgMBAQEBAAMAAAAAAAAAAAQCAwoBCAkHBQYL/8QAWRAAAQEFAwgIAwMGCAcRAAAAAQIAAwQFBgcIEQkhMUFRYXHwEhOBkaGxwdEU4fEVGNYKFjI5l7cXIiNUc4fV1ycpOERXiKcZGiQ0NjdIWGRmZ3V2lZaYtv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAMxEAAQIEBQMDAwMDBQAAAAAAAQARITFBUQJhcYHwkaGxEsHRMlLhQmJyIoLxkqKywuL/2gAMAwEAAhEDEQA/ANyDDDDF50MMMMRDDDDEQww0wgnTm46e76MRQboBOgYtaEpGrHjn+TTwOw9zEVPQVuHE+2Ld6s6z6+zXBCjqw484t3qzrI8/ZiKjq9/h82OrOo+nuzHV7/D5tzqzqI8vdic46XKFbj2++DRII0jBmShQ1Y8OcW5gdh7mIlmGuKUnVhwzfJoFBGjPzsYigwwwxEMMMMRDDDDEQwwwxEMMMMRDDDDEQ0kpJ4bW6lBOc5hs1/JrgMcw+jEUQANDTCSdw50NYlIG8+XBphJOjv1MTn+X94KASBq7S0wCdAxawIA05+dnvi1gB1A9gYq2/ilZ5UaCp6Ctw53Yt3q9/h82v6Ctw4n2xbvV7/Biv+kd7fy46o6A2ludXv8AD5sx1e/w+bHV7/Bib4en/mCW6CtzRII0hmihW49vvg0SDrB7QxRsn0MaTn4ESlCkHV2jnzaBQRvGtmigHRm52e2DVlJGnv1MTSPY012ndkqQDpapScOGo+7OKSDuPnxaogjMR7FiiWYaakYZxn3ax7tBiIYYYYiGGGGIhhhhiIaaE4nE6Bo4886W4lOPDWWvAxIA+gYiACT5nY1wGGYfVgDDMPq1yU4Zzp1DZzzuKgcqTYch0BEo1nu9+cGsAJ0c8WkEE5zmHj2NaE6gGK9zaglP3/3GiiEAac/H2+rSAxzANYEbe73Pt3tYE6gGKz/c22Ebwyk2qqCDrwHiee1pdWNZPl7td0FbhxPti3erGs+nuxBqBKQc0yu1S5VHQG0+Hsx1Y1E+fszHQG0+Hs3OrGo+vsxVzXEbxw6a5RvrFYoOrA+B57WiQRpHfznZooVuPb74NAp1Ec7vkxRnoD/GYlSvTolSgHRm52fRqiCNLNlGzu+fPFqynUQxRtx3ELWG4sQ6UUjWM27b7eTUkY5j9GcUgjOM48e1qVJxzjT5887iEZvbFfI2OsqwYhMgg+R2tStOsa9O76+fFnCMcx+jUkYEg/UMWUsw0lJwO46PZosRDDDDEQxpYaaBicdQ8+c/1YisAwGHJa9KcBvPhu59GggYnHUPPnP9WvSMSNg0sVb8vQQjzZ3U0JwznXo3D5tchOJxOgeezn1aIBJw5wa8DQAxXyZZC/wdTmugEnANcEgcdrAAA8zta5KcM506hs+flx0FYNl3xH4HIyilGs5t23282tA1AdzSCSeG1rQkDRp8WK6h2/SPpGtHnwqsIJ05vNpBA1knnnW1oQo7uLT6sayfL3YkbwJlgGlebyVHQTs8T7twoGokc862Z6CcNfHHP7eDc6saifP2Ym+Magm2XK5qlB1Z/DnvaBGojvZooUN/BoFIOY/MMScYGUcP1CUSONkk1I1jPu2e/m1ZAI8jsZspI3ja1Sk45xp1jb82KWiMsWdsXPdJkEHAtStOBxGg+fPqzhAI8jsagjSCGJen3YfBGT8YpRacc41ad4+TUKTiN40e3OtmyCDhzg1ChgTsOhiyc6dxSx92syUIxGHIagjDMWbWMDjqPnzn+jLrGfHb5sUUGGGGIhrkjADvLVAYkBmBpHEMRXJGAA7+fBr0DAcc/tzvaoDEgbWYAzgbwGLQEh9xY3YNzbVWoGAx25+zVzva5A193u0AMTgNbXgY4AMVEf7pxZsIb4rZeU7Z78t0q7rWDqgbbbcqOs6rF9JoKoXNPz37X+NXJpi/jIaCmI+ClkW56iIfy+NdO8XvT6UO86SEjolX5QMq/k6sRjevs1w1/wDKL+wmzE/lDYwv6yYD/QBZ7/8ApK+b4UN0GAEAvOPj88nsAGMYhhkGpY/lf6c1g96CwG85L6hmlglp9O2my+k42Bl1RRVPfaHVymNmbh/EwEPE/HwUErpxLiGfvXfVpeJ6LpXSKTgD6ASkDjrbAxkysqq4ydlK2rU0+sLe2vG02oKbnqY13aUigxJRT8tmUvMKYdVBViZj8WZgHvXB/A9R1PQ6p90+mj6gD8pxgQc9yqKP+sQ6/uQaHAXhHOA91PTSgaAZ8RuXpl+F9Vsslbza7dvuUTu06xKtI6ga5hbRrP5ND1DL4KUTCJdy2bzCLczGEENO5dNIEoinbtCFrVCF4kJ/k3iDiTneslt/y+lu1BSW1CyKpLZa7oCoXkzdSWqJLSdjpl0xeSaaxsjmiHBi6fhn+MFNpdGwL7puUfy0O86PSR0VH+Pyg2Wvhr9N3SY2Burtj+zBcwq2lao/Op5a87rJLoU1FP4kwP2ImzKlisxnXdARP2sj4fo9LqH3SwH5fdJy2d4653YJRd3uz+zGxKo6UoiIqeIls3rGWV5E1DFLqqq51V0cmOfSSu5JLVJh4+eRMPCfDy2HKYR04S+L58Hj55RhIEg71jBaEos9hQUjVep/zi/KPv5pbz/8SsU/sZvzi1m37L62FUFO7ULXKktloSgKcXK3c7qic0nY6JdLlzqbQMilaYgwlPxL/GNm8ygYBz0HK/5aJd9Loo6Sk/3H/fJ98H/Qpdq/9ltR/vRbzfe1y2l4++FYJW13qv7MbEacpOun1LvpnN6OlleQ9QwqqUq2R1hAiAfTuvJ3LUJiJhIYWHi/iJbEFUG9iEuS5fl2/d0A1w4c4ac20e7ePnjaLTxkZ7fLX7ydy6AtMturWOr+uH1pteSN7UMwgZPL4lUqlK5UJfBmHkculcCEQoiHwSsQoeq6Z6x4vAYfVlSceOo+7YeMnrlqoa4nd3hbBnt25/aguGrKp6t/Ol3a67oxKxUaoFQgPsVVmdVFJg/gsDFfayviOs/4u56H8b3AfynGBOi5VFD/AFiHX9yDZOHE5YQctJZIcyY0ImNb94WWqEjSD2tSoYHNoPODZYVflN8Cr/oVxQO37w7n+5BoH8psgSMPuWRX/wBh3X9yLT0Yrdx8qNVpwxChzHmMd56m1p1jt9+fVl1jXszFviTk/Ms3DX77fF2GOrub+y5SaHqKs/zneWsu60SRIIqTwxl32MmzalSDF/awWIv7U/kPh+j8M+63pO/t2RgSDw7GhBBYqGE54e+Ew4D+UosYjHZn7NfO5l1jEcM/uzZGBI2MuoYEhosyzYu98JobeIlKqGII7uLLqGIPeOfBmiMCQy6hgSOdrFDCHe4Mksw3VDAkMMUUkaeAZhA/jcBj6erUO9fZ6swjX2c+DEb551V6BnJ2Dn1ZhH6XAfL1alAzE78O76te719nqxavlhHdn8nqr0DOTsHnyWYQM/Ac+rUo0Hjz5swgZid+Hd9WKsY6YcPVvysa+WkgYKZ5WawGWzKDhZhLphS13mBj4COh3UXBR0FF2p1M4ioOMhX6HjiJhYlw8eOYiHfO1unzpa3bxCkKUk6qkXPbpJP+S3d0wGn/AAI2afhhsr+WW/W53dd8gu4/vYqQejbLkaCd/Pm28UsGnsFshgNsOxIHVeeE3PLpBP8AktXc82f/AJkbM/wxzna9Nzy6QTh91q7nv/wI2Z/hhvRCBmx2swgZsdujnnQ2FLtQjCMpPv8AC86/c7uj/wDVZu5fsQsz/DDfltq9luThsJkq6gtkspudWbSz7Kns6h11dZnZBJ4uZy2mXEJEz9/I5XEyBM0qB5KXUfLzGQskgphFunkwgHPUF9HQqHv4JlYsoo6uFWIQzyhxTs4t8tLexMms3ks6inT5zT0G6d9GcWgzORuyuLmsFIEvHTuWwT5ELKpjO38JDTCOEOh7BRucO7Bk1L6eVuqqpL0Nv9qUXZ/Q9VTNUWi1WuKfiJ7O65jXsuRDlFlVm0vjaWk6aQlDiTyORRUzE2pKmJfDGXy+koepn1PTmUybQBZyWF/jp2yhrwOp/HnSf39+9JkKsMfjbknD+BClcdOGqzrDx0N62sjsyyb1vki/OSxeyi57aVKEQcsj4p9Sdl9ks0iZbCzoRipSudSx1Tv2pI1zIS6YfBOZxBwL+IMBGB26UYV/1fxhtA/J97pdnlptl0tmtpl4l7ZTaNFxtERFRCsLN0VJTlpsQ7ezKkYV7DObGYuDjacqeXQE1ly4hUJBCTTWFcxMfNkw8ZDQb3wfeayTl9rJlTmAvIXVbUqmtOouiZPNaqqi0agJa6oSs7Nvsx6ZbEOars+XVdRxNV0vF07P455ET2Qqn0tcSiDrVdbSOkZK6l8VUFABliL0fQdIjsLBzWhwCIrAfEYrXIbnd0fODdZu5fsQsz/DDeFb/tSXFrgFktL2uVvcjsZr2VVTaNLLOIaU0rY7Y9Ax8NHzOmarqZ3MX72b047h1QbqHpOKhnjt2ovy+inCkp6tLwhnJL5SRxf0shjpXXkNL5Hb9ZY6lcrr6GhYuSw8JXkG+hgmEtEp+QQkUmYyyGmDx0pxUUCqVQknls9Lx3JX7yXxDmCl/wBHbWbFLIrdafgaVtms1oq1GmpXOHNQy+Q13TssqaVQU8h4KPlsPN4aBmsPEw7mYuYCaTGDdxaEJfIho6KcpWEPlhWYgsXgzx0+B2UzlQ5mhHJTksspyy2TFJx/3Mul8/8A4Y3ff7DDfW64XP7jF/qx+o7Y6IuS2M0HKactJnFmsRJ6qsdsgjZhEzGTUxR9Tvpk5eyinXsMmDfQ1YwkM7drUH4fwcQpSQhbsn1MrJ1XDcDhc+u6D+qajf7Kb94stsXslsMp2LpKxqzejLL6XmE6iaijqfoWnpZTUoi59GQMulsVOImAlUPDQ72YxEvlErgn0WtBfPIaAhHKllDh2lI+mgL66fm3sEM4H0zu3mGayHZHWAgZVle7dpXK4KElstlstvIwEul0BDOYOBgIGDtJlMPCQUFCQ6HcPCwkLDu3biHhnDt25cOXaHTpCUJSkbK16Rw9S2N/JCfribwf9Bea/efLG2RL0A7+fJhnsPAUxM4sQcJPRo3e6VWM4O0eXIZdYz8Rz6M0vQOPuyzzV28+DRYmBcgg7MQ3YJZYzg7R5chl1/pcR8vRmljMDvw7/oyzzV2+jFH3cNZmPeA4Qll6ezn0YbrzV2+jDFEO9fZ6sw719nqy7vX2erMI19nPixV56AdG+EyjQePoGYRoPH0DLoOYjfj3/Rr3evs9WKmv8cP/AFTKNB4+gZhGg8fQMujQePPkzCNBG/nyYtuHxRrgOziKxxZZf9bld0/9P3cf3s1K2y5H6I7fMtjQyy363O7rukF3H97FSH1bZcjQRv58m3ilg09griEssQPdvdMp/RHOtmEfojt8yyyDmw2fVmEHNhs8vr5thPbEe7t/yCxD3kJfF5UPLORljLyPqR9ZfS9ZvrKoiKkUAmCmlNULZc6ikV9MjCTGNewyHr2sHM6l6504dh4/l76VRiYJ6Yd2k/di/s9gMnTc0nVoVJ3jLxcBEyGHp6y2xCgYKo7MJXIXtWTSGfQtOSeEgYSyFEI4k1LyCVTmqphL3ZgxESGl5jBQT5Me/hHbz4d3dKtVc4y8NosDak8pR04rO2i1emY2erqtclp2npXbjFP6xpSbvppOZJDpi49xATuRyyNk711Lod7PouIgIKdP3LiGi476G5XW7DXl9+7naHfCperapEiu8zWoH1jNlqXkLAUdWdhFLO4aBtStajpdN3iA9repail9TVxZ/WNL1HGyStbAKcs6lcLRhrifxERC7rhBgGFqxJ6z3Vl45zVZ4KzypuUCtCpuOpGsbzlbTunZk+lsRGS57KqLhQ9fyeawU7lj5MTL6XhI1w9gprLoKNcPHES6Wl9Du8SUdJJ193VMobJb0lwuj6kh3kgrS8nVbhzd+m9lxeIcLnFuc0p6o1QS53Aw6I1VOURUtOUvUVpcROYlMVBSuiZRUS+vj5rIY+XJwCtsR/J8bn8ushoGqr31qE0k8rq62OSwtLWUU7M4uJlcxp2zKFmLyYTuqo+HjJy5l8a/tJmkLInlPLe04mNktLU0iZSepIyW2jzaVwWsYDWjBuWHZVfLmyizqcZKnLEWYWYu53UFQUoqqqWoaFnJh5O6nla2f2vwcJT0A+mcOBEw0udKqp9BRse5hXzqKENJQUPR1pdr3Vr/AET2eYbFdfjnpvIZdiy+mrLZRMZrNaKtNsFpGOdxsbTcBDTV/ZzMIKu6pnEkmCp88gIiTQtNiLiocxsTL5vGP5fFwbiUri1wTqM2oLzJA5wHIbGL9NyA/wAqH3HYv4CpVoPD6eLLL/RPZ5hmFnNxZZZzAbTz6NlS+eIdmfox6LGbkhP1xN4P+gvNfvPljbIl6Bx9C2N3JCfribwf9Bea/efLG2RL0Ab+fNqZ7YfATFPCM36TVC/0T4d7LL0Dj6FmF6Bx92WXoA55ztFzH6dSdgAfZUL0Dj6Flnmrt9GZXoA38+bLPNXb6MWfdULwwG3Hw1+jDceau30YYi4jTxDMIP8AG4jD19GVScCCzA0jiGImkHORtHPqzCP0uI+foyoOBBZgHAg72LQi2Y9O4lsP6e800g5yNo8uSzCDn4jn1ZUHAg7GYBwII49jFQxb9w9OhDNTRY5cst+tzu7f+QXcf3sVI2yxBz8WxpZZY/43K7sf+793E/7WKkbZSk4jEfQtvFLBp7BbLsHeIY5EsxbXobJtJwO45jzzra9JwOPeyiVY8dYa5KtR7D6NhTOLwGIVehhHpSIkswuXvyc9RWhJcXzLGacj6gnkhkbmTW1U7Knbl4/eUtJXUQ8ltbQMrhoURcwi5Wh+9hKieB5ERJlLqFiVJ+HlpSn9xydmW6u9WxUFRlil5qOk9jFqcFJoGjhOo2HMusorVKH8qpyWfCzR2pbmjphNIeYu3sZAzgw0igHUvnEcueQcG6hnS9Bi0oeIW6eoQ9dPEqQ9dPEpW7eIWClaFoUClSVJJSpJBCgcCCMzfD295kGLpN42YzWsbK42ZXXrQo+GlLhH8H9PSObWSP30HHQImM0m1k4NOvBNphIoeLl6H1I1rRcD9sxLqqJ1Lqgj0zNxONAghsTwkbS5XJaeFxcV2m94dJD9JsOhcnJQk2r6yiofuXTOkaYmLmoLKK6nKrD5jATKg6gP8rSEVV0Y9jEzaoKDqBMXL4h7NpiibRMnmsjdu4eKdy6Jj3vgjKD5STJx2K0nWtm12Gw+73bBbop28kMHUcssaoOLsuoyLexc+lE4mb+oRJHLuqZtT7yUuYiBlsjRESOapnMnmDmoIiBRGOG8rvvyaa8ILREydxeTsceWP/FICq0fSGuHNoiYVTgKexCbKUQT+l1RSYodSiFNsKHbxwBEqjXbz/go+oF0zIDXULv0/ktdWs1FUN5qtpM6maHUsq+RyOmrH/i4mYw8RKZ2izRyaim0bOJNLYdcsS6qWv6kpmLezCPmyqacTF1I30krYRV5QAbnkZlOsBZn6+HyK8i5BjJ11nSk6iL7FuFMQ0qNQU69cWHyScQTt3O3bievC8mloLyWPoUuZXDTSXFEJTD50ISYfBP4uLh+jLo92l7qVUrpHdqatCHbp27cuXaHLlyhDpy5dJSh26du0hDt27QkBKUISAlKUgJSkAJAAwaKlah2nnn0ySSXKhnnQfaKk8yFSYqOJ3DMOedTULOfgOfRpqVhx1D3ahRwxJ+paLOjMB6cJuS0RyMdsaeSE/XE3g/6C81+8+WNsgXpHD1LY3skIf8AHEXgz/2e80f9p0sbY+TiSTx7Gpnth8BCTaIDf3FnbNrKlZzgbB58hl1nPwHPo1xOJJ2suo4klosmDiwA3LE7z8KlZzgbB58hl1/pcB8/VricSSy6jiSedjFDBxkAdYP3HAqV6ezn0YaKjiSWGKLjXJOIHcWpaaDgcNR8+fRiJxJxAPfz4teg4jhm9mUQcDhqPm16TgeOYsV4DKMK7+CU4g4jDZm7NXO5rkHV3ezKA4HFr0nQQxV9gW/txXy+NGGQrLeWEXkq0v40laTYxZNabVsNTtklmr2V1VRtHzefQMvqWQVVWM0coRFwcDFQnx8vfLgYpUO96ZSHjkvHZQ8APm/7yuXbGiJvUj+qZ3+DG3GAgjzGxrkqxzHTqO3jvbXqLAMC1x+Vv1Gocj6hWkRl+KRWG4Xlsu7pEVeo7bJ3frRjS+8vl3zoi71B/qndfgxtygURm0jnQ1oUDo0+LX1D7cPTmfBG+oTIhQiPWopBYafvMZeEf53ep/ZM5/BjH3mMvF/O71P7JnP4Mbc101bml1g1g+fsz1D7cPTmfBEDYCf6WIpGniiwx/eYy8X87vU/smc/gxj7zGXi/nd6n9kzn8GNud6advgW51g1A+Xuz1D7cPTmfBGvkejWvyBWGP7zGXhP+d3qf2TOfwY0PvL5d8aYu9QP6p3X4Mbc701bmrKgM5+ZZ6h9uHpzPgjHaDMTQRJ1k26wyG8tl3Tpir1B4WTuvSjG4byuXbOmJvUnjZM7/BjblyonNoHOlqlKwzDT5fNp6v24eiPRg/YCDuad6ZLHlkULCby9I3+5/adbTZLafSrio7MrT4qc1bWNHTeQwEwqaop9TUzfh7FxcDCQYjplE/GxKYd30OmUveqdhCCBsFWdW3OeHPk0iQB5Da1ClaSedwaEuX8LJLxoPpFzdrD8VZRWcBhrPJZdZwHHN7tMnE4tQo4ncMw551NFl2ZqRy9X4beLGSgo4Anu4suo4A9w58WsWcThqHmy6znw2efPqxZ51bnVQYYYYiGNDDDEV4OIx5DXpViN40+/Otk0qwO46fdrwcCCPqGInEKxzHVo3j5NchWBwOg+DJg45x9GuSrHMdPnzzuLQ/yLi40m1NHAcBIOIa4EEeY2MmFkYA5x4taDrBYjwGX04rZHLgcJxK9R7/drAdYPcyYXt7w1gOsHuYq7R+k5RwltH5GZTYWdefw57mkFjeOedTK9M7ue1pdYNYPn7MVF2nXCWtQ6x7tNM9NO3wPs3CsbzzzqZfpjYfD3YLwage3N7sRssZ1LWPPmVxWdWbx57mgTrJ72q6Z3NEknOT3sUfQZYY4jKD83U1L1Dv8AZqiQB5Da0CvZn4tWpWsnnYGJKBDftEcRMGe3bRdJJOJalasTgNA8+fVhSycwzDx55xapSsOLEqYxlCWEcgAPK4tWAwGk6eHPOhqFKwG86G6ThnP1aknEkn6Biy/aWZhPmVyok4AnY1BOOctJSseA0NFiiGGGGIhhhhiIaaFYZjr0bj82gwxEyCQfMbWuBxzj6Mmleo59+z382uBIzg+xYnZOJXjmObft9msBIOZlEqB3Hz4NYFEaNGxi0JiQNX+k62+bMnAsHTm4+/0aYJGhlAsHTm4+/wBGmFEaD7MR2k4ffCZA33mmgs68D4HnsaXWDWD5+zK9NW48R7YN3rN3j8mJA0wnQ+m12nkLpnpjYfD3Y6wagfL3ZbrN3ix1m7x+TFWFhvjGWnDorys6sB4nnsaJJOk4tSVq3Ds98WiVE6T7MUfMD+IL0qe8bzKtKwNGfnb9WqJJ0tArA0Z+dv1asqJ19gYp2uZmkpMCDvEOpqXhmGffs92pJwzn6txSgN58uLVEk5yfYMQ9OT7w7VQSSfIbGqWrUO32518G4peoZt+3282gxRDDDDEQwwwxEMMMMRDDDDEQ0kqw4aw0WGIrwQdDWBZGY5x49jKNMLOvP4MRNhQOvsPPk0wSNBZQKSdeHHN8mmFEaCxOX65dU0FnceedTd6zd4/Jlemrj2e2DS6w6wPL3Yr0PUWsw4ckz0xsPh7tzrN3j8mX6zd4/JgvDqA7c/sxNh1OVjyOivKzuHPOpokk6S1HTVw7PfFuFROksRzpSG3xfyrSoDX2DnzaBWTozDx+TVFSRrx4Z/k0CsnRm8fRimisJA0tUpWPDUPdosMRDDDDEQwwwxEMMMMRDDDDEQwwwxEMMMMRDDDDEQ3QSNBYYYil01bjzuwbvWbvFhhiI6zd4/JjrN3iwwxFzpq3Dnfi0SSdJYYYi4wwwxEMMMMRDDDDEQwwwxEMMMMRf//Z';
        var mediaPhoto = {
            "resourceType": "Media",
            "type": "photo",
            "subtype": {
                "coding": [
                    {
                        "system": __WEBPACK_IMPORTED_MODULE_7__typings_globals__["b" /* MEDIA */].system,
                        "code": __WEBPACK_IMPORTED_MODULE_7__typings_globals__["b" /* MEDIA */].code
                    }
                ]
            },
            "device": {
                "display": "Evoli App"
            },
            "height": 200,
            "width": 200,
            "frames": 1,
            "content": {
                "contentType": "image/png",
                "data": placeholder,
                "creation": new Date(),
                "title": "Placeholder"
            }
        };
        return mediaPhoto;
    };
    ;
    ProfilePage.prototype.selectProfilePhoto = function () {
        var _this = this;
        //Set the option of the photo which has to be savec
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: true,
            targetWidth: 200,
            targetHeight: 200,
            correctOrientation: true //Orientate the photo in portrait mode
        };
        //Use the plugin to get the picture from midata
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = imageData;
            var mediaPhoto = {
                "resourceType": "Media",
                "type": "photo",
                "subtype": {
                    "coding": [
                        {
                            "system": __WEBPACK_IMPORTED_MODULE_7__typings_globals__["b" /* MEDIA */].system,
                            "code": __WEBPACK_IMPORTED_MODULE_7__typings_globals__["b" /* MEDIA */].code
                        }
                    ]
                },
                "device": {
                    "display": "Evoli App"
                },
                "height": 200,
                "width": 200,
                "frames": 1,
                "content": {
                    "contentType": "image/jpeg",
                    "data": base64Image,
                    "creation": new Date(),
                    "title": "Personal Photo"
                }
            };
            //Save the base64 photo to midata
            _this.midataConnectionService.save(mediaPhoto).subscribe(function () {
                _this.zone.run(function () {
                    _this.getPhoto();
                    _this.photoAccessURL = _this.photoStoragePath + '&access_token=' + _this.midataConnectionService.getAuthToken();
                });
            });
        }, function (error) { });
    };
    ;
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div id="photoSectionWrapper">\n\n    <div id="photoSection" (click)="photoProfilClick()">\n\n      <img alt="Image Profile" id="photoImage" src="{{photoAccessURL}}" />\n\n      <img class="uploadImage" [src]="parameters.pathCameraIcon" />\n\n    </div>\n\n  </div>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name="mail" item-left></ion-icon>\n\n      <p><b id="username">{{ \'PROFILE.USERNAME\' | translate }}</b></p>\n\n      <p>{{username}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="contacts" item-left></ion-icon>\n\n      <p><b id="name">{{ \'PROFILE.NAME\' | translate }}</b></p>\n\n      <p>{{name}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-left></ion-icon>\n\n      <p><b id="birthdate">{{ \'PROFILE.BIRTHDATE\' | translate }}</b></p>\n\n      <p>{{birthDate| date: \'dd.MM.y\'}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name={{genderIcon}} item-left></ion-icon>\n\n      <p><b id="gender">{{ \'PROFILE.GENDER\' | translate }}</b></p>\n\n      <p>{{gender}}</p>\n\n    </ion-item>\n\n    <ion-item (click)="updateBodyHeight()">\n\n      <ion-icon name="resize" item-left></ion-icon>\n\n      <p><b id="height">{{ \'PROFILE.HEIGHT\' | translate }}</b></p>\n\n      <p>{{height}} cm</p>\n\n      <ion-icon name="create" item-right></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__["a" /* LanguageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__["a" /* ParametersService */],
        __WEBPACK_IMPORTED_MODULE_6__services_MidataConnectionService__["a" /* MidataConnectionService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LanguageService = (function () {
    function LanguageService(platform, nativeStorage, translate, globalization) {
        this.platform = platform;
        this.nativeStorage = nativeStorage;
        this.translate = translate;
        this.globalization = globalization;
        this.availableLanguages = [{
                code: 'en',
                name: 'English'
            }, {
                code: 'de',
                name: 'Deutsch'
            }, {
                code: 'fr',
                name: 'Français'
            }];
        this.defaultLanguage = 'en';
    }
    Object.defineProperty(LanguageService.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (language) {
            this._language = language;
            this.nativeStorage.setItem("lang", language);
            this.translate.use(language);
        },
        enumerable: true,
        configurable: true
    });
    LanguageService.prototype.init = function () {
        var _this = this;
        this.translate.setDefaultLang(this.defaultLanguage);
        this.nativeStorage.getItem('lang').then(function (lang) {
            if (_this.languageAvailable(lang))
                _this.language = lang;
            else
                _this.determineLanguage();
        }).catch(function (error) {
            _this.determineLanguage();
        });
    };
    LanguageService.prototype.languageAvailable = function (language) {
        return this.availableLanguages.some(function (x) { return x.code == language; });
    };
    LanguageService.prototype.determineLanguage = function () {
        var _this = this;
        if (!this.platform.is('browser')) {
            this.globalization.getPreferredLanguage().then(function (result) {
                var language = _this.getSuitableLanguage(result.value);
                _this.language = language;
            }).catch(function () {
                _this.language = _this.defaultLanguage;
            });
        }
        else {
            this.language = this.getSuitableLanguage(this.translate.getBrowserLang());
        }
    };
    LanguageService.prototype.getSuitableLanguage = function (language) {
        language = language.substring(0, 2).toLowerCase();
        return this.languageAvailable(language) ? language : this.defaultLanguage;
    };
    return LanguageService;
}());
LanguageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__["a" /* Globalization */]])
], LanguageService);

//# sourceMappingURL=languageService.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceDirectivesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Objects_Question__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects_Group__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__QuestionsModal_questions__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Objects_AnswersType_TextAnswer__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Objects_AnswersType_RadioAnswer__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Objects_AnswersType_CheckboxAnswer__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdvanceDirectivesPage = (function () {
    function AdvanceDirectivesPage(modalCtrl, httpClient) {
        this.modalCtrl = modalCtrl;
        this.httpClient = httpClient;
        this.hideInability = [];
        this.hideDeath = true;
        this.hideAfterDeath = true;
    }
    AdvanceDirectivesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        if (typeof this.groups === 'undefined') {
            this.readJson().then(function () {
                _this.getGroupsFromJson();
            }).catch(function () {
            });
        }
    };
    AdvanceDirectivesPage.prototype.readJson = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get("assets/questions.json").subscribe(function (data) {
                _this.jsonObj = data;
                resolve();
            }, function (err) {
                console.log(err);
                reject();
            });
        });
    };
    AdvanceDirectivesPage.prototype.getGroupsFromJson = function () {
        var _this = this;
        this.groups = [];
        this.jsonObj.groups.forEach(function (group) {
            var questions = [];
            group.questions.forEach(function (questionJson) {
                var answers = [];
                questionJson.answers.forEach(function (answerJson) {
                    if (questionJson.inputType === 'text') {
                        var answer = new __WEBPACK_IMPORTED_MODULE_6__Objects_AnswersType_TextAnswer__["a" /* TextAnswer */](answerJson.label);
                        answers.push(answer);
                    }
                    else if (questionJson.inputType === 'radio') {
                        var answer = new __WEBPACK_IMPORTED_MODULE_7__Objects_AnswersType_RadioAnswer__["a" /* RadioAnswer */](answerJson.label);
                        var subAnswers_1 = [];
                        var subSubAnswers_1 = [];
                        if (!answerJson.subAnswers) {
                            answers.push(answer);
                        }
                        else {
                            answerJson.subAnswers.forEach(function (subAnswer) {
                                if (!subAnswer.subAnswers) {
                                    subAnswers_1.push(new __WEBPACK_IMPORTED_MODULE_7__Objects_AnswersType_RadioAnswer__["a" /* RadioAnswer */](subAnswer.label));
                                }
                                else {
                                    subAnswer.subAnswers.forEach(function (subSubAnswer) {
                                        subSubAnswers_1.push(new __WEBPACK_IMPORTED_MODULE_7__Objects_AnswersType_RadioAnswer__["a" /* RadioAnswer */](subSubAnswer.label));
                                    });
                                }
                            });
                            answer.subAnswers = subAnswers_1;
                            answer.subSubAnswers = subSubAnswers_1;
                            answers.push(answer);
                        }
                    }
                    else if (questionJson.inputType === 'checkbox') {
                        var answer = new __WEBPACK_IMPORTED_MODULE_8__Objects_AnswersType_CheckboxAnswer__["a" /* CheckboxAnswer */](answerJson.label);
                        answers.push(answer);
                    }
                });
                var question = new __WEBPACK_IMPORTED_MODULE_0__Objects_Question__["a" /* Question */](questionJson.question, questionJson.inputType, answers);
                questions.push(question);
            });
            var gr = new __WEBPACK_IMPORTED_MODULE_1__Objects_Group__["a" /* Group */](group.groupTitle, group.groupDescription, questions);
            _this.groups.push(gr);
        });
    };
    AdvanceDirectivesPage.prototype.inability = function (i) {
        this.hideInability[i] = !this.hideInability[i];
    };
    AdvanceDirectivesPage.prototype.death = function () {
        this.hideDeath = !this.hideDeath;
    };
    AdvanceDirectivesPage.prototype.afterDeath = function () {
        this.hideAfterDeath = !this.hideAfterDeath;
    };
    AdvanceDirectivesPage.prototype.askQuestions = function () {
        var _this = this;
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__QuestionsModal_questions__["a" /* QuestionsPage */], { groups: this.groups }, { enableBackdropDismiss: false });
        myModal.onDidDismiss(function (data) {
            if (typeof data !== 'undefined') {
                _this.groups = data.groups;
            }
        });
        myModal.present();
    };
    return AdvanceDirectivesPage;
}());
AdvanceDirectivesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-advance-directives',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\advance-directives\advance-directives.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Advance directives</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-8><button ion-button color="secondary" round block (click)="askQuestions()">Répondre aux questions</button></ion-col>\n\n      <ion-col col-2></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ng-container *ngFor="let group of groups; let i = index">\n\n    <ion-card color="primary" (click)="inability(i)">\n\n      <ion-card-content>\n\n        {{group.groupTitle}} \n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ng-container *ngFor="let question of group.questions">\n\n      <ion-card [hidden]="!hideInability[i]">\n\n        <ion-card-header text-wrap>\n\n          <b>{{question.label}}</b>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list *ngFor="let answer of question.answerValue">\n\n            <ng-container *ngIf="question.type == \'text\' && answer">\n\n              <ion-item text-wrap><b>{{answer.label}}:</b> {{answer.value}}</ion-item>\n\n            </ng-container>\n\n            <ng-container *ngIf="question.type == \'radio\' && answer">\n\n              <ion-item text-wrap>{{answer.label}}</ion-item>\n\n              <ion-list *ngFor="let subAnswer of question.subAnswerValue">\n\n                <ng-container *ngIf="subAnswer">\n\n                  <ion-item class="sub-item" text-wrap>{{subAnswer.label}}</ion-item>\n\n                </ng-container>\n\n              </ion-list>\n\n              <ion-list *ngFor="let subSubAnswer of question.subSubAnswerValue">\n\n                <ng-container *ngIf="subSubAnswer">\n\n                  <ion-item class="sub-sub-item" text-wrap>{{subSubAnswer.label}}</ion-item>\n\n                </ng-container>\n\n              </ion-list>\n\n            </ng-container>\n\n            <ng-container *ngIf="question.type == \'checkbox\' && answer">\n\n              <ion-item text-wrap>{{answer.label}}</ion-item>\n\n            </ng-container>\n\n          </ion-list>\n\n          <ng-container *ngIf="question.answerValue.length < 1">\n\n            <ion-list>\n\n              <ion-item>Aucune réponse disponible</ion-item>\n\n            </ion-list>\n\n          </ng-container>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ng-container>\n\n  </ng-container>\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\advance-directives\advance-directives.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
], AdvanceDirectivesPage);

//# sourceMappingURL=advance-directives.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects_AnswersType_TextAnswer__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Objects_AnswersType_RadioAnswer__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Objects_AnswersType_CheckboxAnswer__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionsPage = (function () {
    function QuestionsPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        var groups = this.navParams.get('groups');
        this.groups = groups;
    }
    QuestionsPage.prototype.ionViewDidEnter = function () {
        this.slides.centeredSlides = false;
    };
    QuestionsPage.prototype.dismiss = function () {
        var data = { groups: this.groups };
        this.viewCtrl.dismiss(data);
    };
    QuestionsPage.prototype.next = function () {
        this.radioAnswer = false;
        this.slides.slideNext(1000);
    };
    QuestionsPage.prototype.previous = function () {
        this.slides.slidePrev(1000);
    };
    QuestionsPage.prototype.close = function () {
        this.dismiss();
    };
    QuestionsPage.prototype.changeAnswer = function (question, answer, textValue, subAnswer, subSubAnswer) {
        if (answer instanceof __WEBPACK_IMPORTED_MODULE_2__Objects_AnswersType_TextAnswer__["a" /* TextAnswer */]) {
            if (textValue !== '' && typeof textValue !== 'undefined') {
                answer.value = textValue;
                question.addAnswerValue(answer);
            }
            else {
                question.deleteAnswerValue(answer);
            }
        }
        else if (answer instanceof __WEBPACK_IMPORTED_MODULE_3__Objects_AnswersType_RadioAnswer__["a" /* RadioAnswer */]) {
            question.deleteAnswers();
            if (subAnswer && subSubAnswer) {
                question.addAnswerValue(answer);
                question.addAnswerValue(subAnswer);
                question.addSubAnswerValue(subSubAnswer);
            }
            else if (subAnswer && !subSubAnswer) {
                question.addAnswerValue(answer);
                question.addSubAnswerValue(subAnswer);
            }
            else {
                question.addAnswerValue(answer);
            }
        }
        else if (answer instanceof __WEBPACK_IMPORTED_MODULE_4__Objects_AnswersType_CheckboxAnswer__["a" /* CheckboxAnswer */]) {
            question.addAnswerValue(answer);
        }
    };
    return QuestionsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], QuestionsPage.prototype, "slides", void 0);
QuestionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-questions',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\advance-directives\QuestionsModal\questions.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Questions</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides>\n\n    <ng-container *ngFor="let group of groups">\n\n      <ion-slide class="explanations">\n\n        <ion-card color="light">\n\n          <ion-card-header color="primary">\n\n            {{group.groupTitle}}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            {{group.groupDescription}}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n      <ng-container *ngFor="let question of group.questions">\n\n        <ion-slide *ngIf="question.type == \'text\'">\n\n          <h1>{{question.label}}</h1>\n\n          <ion-list *ngFor="let answer of question.answers">\n\n            <ion-item>\n\n              <ion-label fixed>{{answer.label}}</ion-label>\n\n              <ion-input type="text" #textValue (input)="changeAnswer(question, answer, textValue.value)" value="{{answer.value}}"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-slide>\n\n        <ion-slide *ngIf="question.type == \'radio\'">\n\n          <h1>{{question.label}}</h1>\n\n          <ion-list radio-group [(ngModel)]="radioAnswer">\n\n            <ng-container *ngFor="let answer of question.answers">\n\n              <ion-item text-wrap item-divider>\n\n                <ion-label>{{answer.label}}</ion-label>\n\n                <ion-radio #radioValue value="{{answer.name}}" (ionSelect)="changeAnswer(question, answer)"></ion-radio>\n\n              </ion-item>\n\n              <ng-container *ngIf="answer.subAnswers && radioAnswer == answer.name">\n\n                <ion-list radio-group [(ngModel)]="radioSubAnswer">\n\n                  <ng-container *ngFor="let subAnswer of answer.subAnswers">\n\n                    <ion-item text-wrap class="sub-item">\n\n                      <ion-label class="subAnswer">{{subAnswer.label}}</ion-label>\n\n                      <ion-radio value="{{subAnswer.name}}" (ionSelect)="changeAnswer(question, answer, \'\', subAnswer)"></ion-radio>\n\n                    </ion-item>\n\n                    <ion-list radio-group>\n\n                      <ng-container *ngIf="subAnswer.subAnswers && radioSubAnswer == subAnswer.name">\n\n                        <ion-item text-wrap class="sub-sub-item" *ngFor="let subSubAnswer of subAnswer.subAnswers">\n\n                          <ion-label class="subSubAnswer">{{subSubAnswer.label}}</ion-label>\n\n                          <ion-radio value="{{subSubAnswer.name}}" (ionSelect)="changeAnswer(question, answer, \'\', subAnswer, subSubAnswer)"></ion-radio>\n\n                        </ion-item>\n\n                      </ng-container>\n\n                    </ion-list>\n\n                  </ng-container>\n\n                </ion-list>\n\n              </ng-container>\n\n            </ng-container>\n\n          </ion-list>\n\n        </ion-slide>\n\n        <ion-slide *ngIf="question.type == \'checkbox\'">\n\n          <h1>{{question.label}}</h1>\n\n          <ion-list *ngFor="let answer of question.answers">\n\n            <ion-item text-wrap item-divider>\n\n              <ion-label>{{answer.label}}</ion-label>\n\n              <ion-checkbox #checkValue (ionChange)="changeAnswer(question, answer, checkValue.value)"></ion-checkbox>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-slide>\n\n\n\n      </ng-container>\n\n    </ng-container>\n\n  </ion-slides>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button full (click)="close()" *ngIf="slides._isBeginning">Fermer</button>\n\n        <button ion-button full (click)="previous()" *ngIf="!slides._isBeginning">Précédant</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button full (click)="next()" *ngIf="!slides._isEnd">Suivant</button>\n\n        <button ion-button full (click)="close()" *ngIf="slides._isEnd">Fermer</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\advance-directives\QuestionsModal\questions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], QuestionsPage);

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pulseDailyData_pulseDailyData__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_pulseValidator__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pulse_measure_pulse_measure__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BloodPage = (function () {
    function BloodPage(navCtrl, navParams, alertCtrl, loadingCtrl, modalCtrl, translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.translate = translate;
        this.dayToBeDisplayed = new Array();
        this.currentWeekDisplayed = __WEBPACK_IMPORTED_MODULE_6_moment__().add(-1, "week").toDate();
        this.getWeeklyHeader = function (record, recordIndex, records) {
            if (!__WEBPACK_IMPORTED_MODULE_6_moment__(record).isSame(_this.currentWeekDisplayed, "week")) {
                _this.currentWeekDisplayed = record;
                return _this.formatWeek(_this.getFirstDayOfWeek(record));
            }
            return null;
        };
        this.pulseData = new Array();
        __WEBPACK_IMPORTED_MODULE_6_moment__["locale"](translate.currentLang);
    }
    BloodPage.prototype.ionViewDidLoad = function () {
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.translate.get("COMMON.PLEASEWAIT").subscribe(function (value) {
            loading.setContent(value);
        });
        loading.present();
        this.generatePulseData();
        this.sortPulseDataByDay();
        this.listDayWithData();
        this.generatGraph();
        loading.dismiss();
    };
    BloodPage.prototype.generatGraph = function () {
        var graphLabels = [], graphDatas = [];
        var max = -1;
        if (this.pulseData.length > 30) {
            for (var i = 0; i < 30; i++) {
                graphLabels.push(__WEBPACK_IMPORTED_MODULE_6_moment__(this.pulseData[i].date).format('D MMM'));
                graphDatas.push(this.pulseData[i].value);
            }
        }
        else {
            this.pulseData.forEach(function (measure) {
                graphLabels.push(__WEBPACK_IMPORTED_MODULE_6_moment__(measure.date).format('D MMM'));
                graphDatas.push(measure.value);
            });
        }
        max = Math.max.apply(Math, graphDatas) + 30;
        this.pulseChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js___default.a(this.chartCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: graphLabels,
                datasets: [{
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#42a5f5",
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round',
                        spanGaps: false,
                        data: graphDatas
                    }]
            },
            options: {
                bezierCurve: true,
                scales: {
                    yAxes: [{
                            ticks: {
                                min: 40,
                                max: (max > 100) ? max : 100
                            }
                        }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        });
    };
    BloodPage.prototype.addPulseMeasure = function (mesure, date) {
        if (__WEBPACK_IMPORTED_MODULE_6_moment__().diff(date) > 0) {
            this.pulseData.push({ date: date, value: mesure });
        }
    };
    BloodPage.prototype.listDayWithData = function () {
        var _this = this;
        var day = __WEBPACK_IMPORTED_MODULE_6_moment__().add(1, 'days').toDate();
        this.pulseData.forEach(function (value, index) {
            if (!__WEBPACK_IMPORTED_MODULE_6_moment__(value.date).isSame(day, 'day')) {
                day = value.date;
                _this.dayToBeDisplayed.push(day);
            }
        });
    };
    BloodPage.prototype.sortPulseDataByDay = function () {
        this.pulseData.sort(function (a, b) {
            var dateA = new Date(a.date).getTime();
            var dateB = new Date(b.date).getTime();
            return dateA < dateB ? 1 : -1;
        });
    };
    BloodPage.prototype.getPulseByDay = function (day) {
        var dailyData = new Array();
        this.pulseData.forEach(function (element) {
            if (__WEBPACK_IMPORTED_MODULE_6_moment__(element.date).isSame(day, 'day'))
                dailyData.push(element);
        });
        dailyData.sort(function (a, b) {
            var dateA = new Date(a.date).getTime();
            var dateB = new Date(b.date).getTime();
            return dateA > dateB ? 1 : -1;
        });
        return dailyData;
    };
    BloodPage.prototype.showPromptMeasure = function (fab) {
        var _this = this;
        var title, message, cancel, save;
        fab.close();
        this.translate.get("BLOOD.NEWMANUALVALUE.TITLE").subscribe(function (value) {
            title = value;
        });
        this.translate.get("BLOOD.NEWMANUALVALUE.CAPTION").subscribe(function (value) {
            message = value;
        });
        this.translate.get("BLOOD.NEWMANUALVALUE.SAVE").subscribe(function (value) {
            save = value;
        });
        this.translate.get("BLOOD.NEWMANUALVALUE.CANCEL").subscribe(function (value) {
            cancel = value;
        });
        var prompt = this.alertCtrl.create({
            title: title,
            message: message,
            enableBackdropDismiss: false,
            inputs: [
                {
                    name: 'Pulse',
                    placeholder: '80',
                    type: 'number',
                },
            ],
            buttons: [
                {
                    text: cancel,
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: save,
                    handler: function (data) {
                        if (__WEBPACK_IMPORTED_MODULE_1__validators_pulseValidator__["a" /* PulseValidator */].isValid(data.Pulse) === null) {
                            _this.addPulseMeasure(data.Pulse, new Date());
                            _this.generatGraph();
                            return true;
                        }
                        else {
                            if (__WEBPACK_IMPORTED_MODULE_1__validators_pulseValidator__["a" /* PulseValidator */].isValid(data.Pulse).isNotANumber || __WEBPACK_IMPORTED_MODULE_1__validators_pulseValidator__["a" /* PulseValidator */].isValid(data.Pulse).isAWholeNumber || __WEBPACK_IMPORTED_MODULE_1__validators_pulseValidator__["a" /* PulseValidator */].isValid(data.Pulse).isInferiorTo40 || __WEBPACK_IMPORTED_MODULE_1__validators_pulseValidator__["a" /* PulseValidator */].isValid(data.Pulse).isSuperiorTo220) {
                                _this.translate.get("BLOOD.ERRORS.NOVALUEENTERED").subscribe(function (value) {
                                    title = value;
                                });
                                _this.alertCtrl.create({
                                    title: title,
                                    buttons: ['ok']
                                }).present();
                                return false;
                            }
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    BloodPage.prototype.showTakeMeasure = function (fab) {
        var _this = this;
        fab.close();
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pulse_measure_pulse_measure__["a" /* PulseMeasurePage */]);
        myModal.onDidDismiss(function (data) {
            if (typeof data !== 'undefined') {
                _this.addPulseMeasure(data, new Date());
                _this.generatGraph();
            }
        });
        myModal.present();
    };
    BloodPage.prototype.showDate = function (day) {
        var _this = this;
        var dailyData = new Array();
        dailyData = this.getPulseByDay(day);
        var dailyValue = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__pulseDailyData_pulseDailyData__["a" /* PulseDailyDataPage */], { date: day, data: dailyData });
        dailyValue.onDidDismiss(function (data) {
            if (typeof data !== 'undefined') {
                _this.pulseData.splice(data, 1);
                _this.generatGraph();
            }
        });
        dailyValue.present();
    };
    BloodPage.prototype.generatePulseData = function () {
        var randDays = Math.floor(Math.random() * (300 - 10) + 300);
        for (var i = 0; i < randDays; i++) {
            var randValue = Math.floor(Math.random() * (30 - 2) + 2);
            for (var j = 0; j < randValue; j++) {
                this.addPulseMeasure(Math.floor(Math.random() * (190 - 50) + 50), __WEBPACK_IMPORTED_MODULE_6_moment__().add(j * 10, 'minutes').add((-1 * i) - 1, 'days').toDate());
            }
        }
    };
    // Display methode
    BloodPage.prototype.formatDate = function (date) {
        var format = (__WEBPACK_IMPORTED_MODULE_6_moment__().isSame(date, 'year') ? 'dddd, D MMM' : 'dddd, D MMM YYYY');
        return __WEBPACK_IMPORTED_MODULE_6_moment__(date).format(format);
    };
    BloodPage.prototype.getFirstDayOfWeek = function (dateInAWeek) {
        return __WEBPACK_IMPORTED_MODULE_6_moment__(dateInAWeek).startOf('isoWeek').toDate();
    };
    BloodPage.prototype.getLastDayOfWeek = function (dateInAWeek) {
        dateInAWeek.setHours(23, 59, 59);
        return __WEBPACK_IMPORTED_MODULE_6_moment__(dateInAWeek).startOf('week').add(6, 'days').toDate();
    };
    BloodPage.prototype.formatWeek = function (startDate) {
        var endDate = this.getLastDayOfWeek(startDate);
        if (__WEBPACK_IMPORTED_MODULE_6_moment__(startDate).isSame(__WEBPACK_IMPORTED_MODULE_6_moment__(), 'week')) {
            var labelText_1;
            this.translate.get("COMMON.THISWEEK").subscribe(function (value) {
                labelText_1 = value;
            });
            return labelText_1;
        }
        else if (__WEBPACK_IMPORTED_MODULE_6_moment__(startDate.toISOString()).add(1, 'weeks').isSame(__WEBPACK_IMPORTED_MODULE_6_moment__(), 'week')) {
            var labelText_2;
            this.translate.get("COMMON.LASTWEEK").subscribe(function (value) {
                labelText_2 = value;
            });
            return labelText_2;
        }
        return this.formatDate(startDate) + " - " + this.formatDate(endDate);
    };
    return BloodPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('chartCanvas'),
    __metadata("design:type", Object)
], BloodPage.prototype, "chartCanvas", void 0);
BloodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-blood',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\blood\blood.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ \'BLOOD.TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content has-footer no-bounce overflow-scroll=\'false\'>\n\n  <ion-fab right bottom #fab>\n\n    <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="showPromptMeasure(fab)"><ion-icon name="create"></ion-icon></button>\n\n      <button ion-fab (click)="showTakeMeasure(fab)"><ion-icon name="pulse"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <ion-item>\n\n    <ion-label>{{ \'BLOOD.MYGROUP\' | translate }}</ion-label>\n\n    <ion-select interface="popover">\n\n      <ion-option value="a+">A+</ion-option>\n\n      <ion-option value="a-">A-</ion-option>\n\n      <ion-option value="b+">A+</ion-option>\n\n      <ion-option value="b-">A-</ion-option>\n\n      <ion-option value="o+">O+</ion-option>\n\n      <ion-option value="o-">O-</ion-option>\n\n      <ion-option value="ab">AB-</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <canvas #chartCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-item>\n\n    <ion-label>{{ \'BLOOD.MYMEASURE\' | translate }}</ion-label>\n\n  </ion-item>\n\n    <ion-list [virtualScroll]="dayToBeDisplayed" [headerFn]="getWeeklyHeader" [approxItemHeight]="\'49px\'">\n\n      <ion-item-divider color="light" *virtualHeader="let header">\n\n        {{ header }}\n\n      </ion-item-divider>\n\n      <button ion-item *virtualItem="let day" (click)="showDate(day)">\n\n        <ion-icon name="heart-outline" item-start color="danger"></ion-icon>\n\n        <ion-label>{{formatDate(day)}}</ion-label>\n\n      </button>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\blood\blood.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */]])
], BloodPage);

//# sourceMappingURL=blood.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PulseDailyDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PulseDailyDataPage = (function () {
    function PulseDailyDataPage(navParams, navCtrl) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.dateOfDay = this.navParams.get('date');
        this.dailyData = this.navParams.get('data');
        console.log(this.dateOfDay);
    }
    PulseDailyDataPage.prototype.ionViewDidLoad = function () {
        if (this.dailyData.length > 3)
            this.generatGraph();
    };
    PulseDailyDataPage.prototype.generatGraph = function () {
        var graphLabels = [], graphDatas = [];
        var max = -1;
        this.dailyData.forEach(function (measure) {
            graphLabels.push(__WEBPACK_IMPORTED_MODULE_2_moment__(measure.date).format('h:mm'));
            graphDatas.push(measure.value);
        });
        max = Math.max.apply(Math, graphDatas) + 30;
        this.pulseChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js___default.a(this.chartCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: graphLabels,
                datasets: [{
                        label: "My heart beat",
                        fill: false,
                        lineTension: 0.5,
                        borderColor: "#42a5f5",
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round',
                        spanGaps: false,
                        data: graphDatas
                    }]
            },
            options: {
                bezierCurve: true,
                scales: {
                    yAxes: [{
                            ticks: {
                                min: 40,
                                max: (max > 100) ? max : 100
                            }
                        }]
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                elements: {
                    point: {
                        radius: 0
                    }
                }
            }
        });
    };
    PulseDailyDataPage.prototype.formatDate = function (date, format) {
        return __WEBPACK_IMPORTED_MODULE_2_moment__(date).format(format);
    };
    return PulseDailyDataPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chartCanvas'),
    __metadata("design:type", Object)
], PulseDailyDataPage.prototype, "chartCanvas", void 0);
PulseDailyDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pulse-daily-data',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\blood\pulseDailyData\pulseDailyData.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button navPop icon-only>\n\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Blood pulse</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content has-footer no-bounce>\n\n  <h1>{{formatDate(dateOfDay, \'dddd Do MMMM YYYY\')}}</h1>\n\n  <ion-card *ngIf="dailyData.length > 3">\n\n    <ion-card-content>\n\n      <canvas #chartCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-list>\n\n    <ion-item-sliding #item *ngFor="let measure of dailyData">\n\n      <ion-item>\n\n        <ion-icon name="heart-outline" item-start color="danger"></ion-icon>\n\n        <h2>{{formatDate(measure.date, \'HH:mm\')}}</h2>\n\n        <p>{{measure.value}}</p>\n\n        </ion-item>\n\n        <ion-item-options>\n\n          <button ion-button color="danger" (click)="delete(item)">\n\n            <ion-icon name="trash"></ion-icon>\n\n            Delete\n\n        </button>\n\n        </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\blood\pulseDailyData\pulseDailyData.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PulseDailyDataPage);

//# sourceMappingURL=pulseDailyData.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PulseMeasurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PulseMeasurePage = (function () {
    function PulseMeasurePage(navCtrl, viewCtrl, alertCtrl, navParams, diagnostic, translate) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.diagnostic = diagnostic;
        this.translate = translate;
        this.counter = 10;
        this.isMeasuring = false;
        this.lastMeasure = 0;
    }
    PulseMeasurePage.prototype.reinitialise = function () {
        clearInterval(this.interval);
        this.counter = 10;
        this.isMeasuring = false;
    };
    PulseMeasurePage.prototype.takeMeasure = function () {
        var _this = this;
        var successCallback = function (isAvailable) {
            _this.interval = setInterval(function () {
                _this.counter--;
                _this.isMeasuring = true;
                if (_this.counter < 1) {
                    _this.reinitialise();
                }
            }, 1000);
            _this.diagnostic.requestCameraAuthorization().then(function () {
                var props = {
                    seconds: 10,
                    fps: 30
                };
                heartbeat.take(props, function (bpm) {
                    var title, caption, unit;
                    _this.lastMeasure = bpm;
                    console.log("Your heart beat per minute is: " + bpm);
                    _this.translate.get("BLOOD.NEWMEASURE.RESULTTITLE").subscribe(function (value) {
                        title = value;
                    });
                    _this.translate.get("BLOOD.NEWMEASURE.RESULTTITLE").subscribe(function (value) {
                        caption = value;
                    });
                    _this.translate.get("BLOOD.NEWMEASURE.UNIT").subscribe(function (value) {
                        unit = value;
                    });
                    var alert = _this.alertCtrl.create({
                        title: title,
                        subTitle: caption + bpm + ' ' + unit,
                        buttons: ['OK']
                    });
                    alert.present();
                    _this.viewCtrl.dismiss(_this.lastMeasure);
                }, function (error) {
                    console.log("Has not posible measure your heart beat");
                });
            })
                .catch(function () {
                console.log('autorization not done');
            });
        };
        var errorCallback = function (e) { return console.error(e); };
        this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
    };
    return PulseMeasurePage;
}());
PulseMeasurePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pulse-measure',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\blood\pulse-measure\pulse-measure.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button navPop icon-only>\n\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{ \'BLOOD.NEWMEASURE.TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{ \'BLOOD.NEWMEASURE.CAPTIONTITLE\' | translate }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      {{ \'BLOOD.NEWMEASURE.CAPTION\' | translate }}\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-row [hidden]="isMeasuring">\n\n    <ion-col>\n\n      <button ion-button (click)="takeMeasure()">{{ \'BLOOD.NEWMEASURE.START\' | translate }}</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row [hidden]="!isMeasuring">\n\n    <ion-col class="counter">\n\n      {{counter}}\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\blood\pulse-measure\pulse-measure.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], PulseMeasurePage);

//# sourceMappingURL=pulse-measure.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MidataConnectionService__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ModalService__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, modalService, inAppBrowser, midataConnectionService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalService = modalService;
        this.inAppBrowser = inAppBrowser;
        this.midataConnectionService = midataConnectionService;
    }
    LoginPage.prototype.register = function () {
        this.inAppBrowser.create('https://test.midata.coop/#/portal/registration');
    };
    LoginPage.prototype.visitMidata = function () {
        this.inAppBrowser.create('https://midata.coop');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Bitte warten...' // TODO: Translate
        });
        this.midataConnectionService.ensureConnection()
            .then(function () {
            loading.present();
        }, function () {
            _this.modalService.showNoInternet();
            return Promise.reject('');
        })
            .then(function () {
            return _this.midataConnectionService.getConnection().fetchFHIRConformanceStatement();
        })
            .then(function () {
            return _this.midataConnectionService.loginOAuth(true);
        })
            .then(function () {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], undefined, undefined, function () {
                loading.dismiss();
            });
        })
            .catch(function () {
            loading.dismiss();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\login\login.html"*/'<ion-content>\n\n  <div id="midataLogoWrapper">\n\n      <span class="helper"></span>\n\n      <ion-img alt="MIDATA logo" src="assets/img/logo-midata-full.png" id="logoMidata" (click)="visitMidata()"></ion-img>\n\n  </div>\n\n  <div id="blockHeader">\n\n  </div>\n\n  <ion-slides pager>\n\n    <ion-slide>\n\n      <h2 class="slide-title">Welcome to MiDemo</h2>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <h2 class="slide-title">What can I do for you?</h2>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <h2 class="slide-title">Tipps!</h2>\n\n    </ion-slide>\n\n</ion-slides>\n\n\n\n  <div id="btnZone">\n\n    <div class="wrapper default" id="btnLogin" (click)="login()">\n\n        login\n\n    </div>\n\n    <div class="wrapper" id="btnRegister" (click)="register()">\n\n        register\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_ModalService__["a" /* ModalService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3__services_MidataConnectionService__["a" /* MidataConnectionService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/advance-directives/QuestionsModal/questions.module": [
		555,
		6
	],
	"../pages/advance-directives/advance-directives.module": [
		554,
		5
	],
	"../pages/blood/blood.module": [
		556,
		4
	],
	"../pages/blood/pulse-measure/pulse-measure.module": [
		557,
		3
	],
	"../pages/blood/pulseDailyData/pulseDailyData.module": [
		558,
		2
	],
	"../pages/impressum/impressum.module": [
		559,
		1
	],
	"../pages/login/login.module": [
		560,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 194;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAnswer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Answer__ = __webpack_require__(100);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TextAnswer = (function (_super) {
    __extends(TextAnswer, _super);
    function TextAnswer(_label) {
        var _this = _super.call(this, _label) || this;
        _this._label = _label;
        return _this;
    }
    Object.defineProperty(TextAnswer.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    return TextAnswer;
}(__WEBPACK_IMPORTED_MODULE_0__Answer__["a" /* Answer */]));

//# sourceMappingURL=TextAnswer.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioAnswer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Answer__ = __webpack_require__(100);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RadioAnswer = (function (_super) {
    __extends(RadioAnswer, _super);
    function RadioAnswer(_label) {
        var _this = _super.call(this, _label) || this;
        _this._label = _label;
        _this._subAnswers = [];
        _this._subSubAnswers = [];
        return _this;
    }
    Object.defineProperty(RadioAnswer.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioAnswer.prototype, "subAnswers", {
        get: function () {
            return this._subAnswers;
        },
        set: function (answer) {
            this._subAnswers = answer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioAnswer.prototype, "subSubAnswers", {
        get: function () {
            return this._subSubAnswers;
        },
        set: function (answer) {
            this._subSubAnswers = answer;
        },
        enumerable: true,
        configurable: true
    });
    return RadioAnswer;
}(__WEBPACK_IMPORTED_MODULE_0__Answer__["a" /* Answer */]));

//# sourceMappingURL=RadioAnswer.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxAnswer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Answer__ = __webpack_require__(100);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckboxAnswer = (function (_super) {
    __extends(CheckboxAnswer, _super);
    function CheckboxAnswer(_label) {
        var _this = _super.call(this, _label) || this;
        _this._label = _label;
        return _this;
    }
    CheckboxAnswer.prototype.getLabel = function () {
        return this.label;
    };
    return CheckboxAnswer;
}(__WEBPACK_IMPORTED_MODULE_0__Answer__["a" /* Answer */]));

//# sourceMappingURL=CheckboxAnswer.js.map

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 327;

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(39);
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
 * A service to present often used modals/popups to the user.
 *
 * Note: Ionic defines 'modals' as something like a full-screen slide-in
 * dialog window. This service, however, is more general than that and
 * modal is used because of how the term is used in jquery ui etc.
 */
var ModalService = (function () {
    function ModalService(alertCtrl, translateService, app) {
        this.alertCtrl = alertCtrl;
        this.translateService = translateService;
        this.app = app;
        this.leaving = false;
        window['modal'] = this;
    }
    ModalService.prototype.leaveConfirm = function (show, opt, onLeave) {
        var _this = this;
        if (onLeave === void 0) { onLeave = function () { }; }
        if (!this.leaving && show) {
            this.confirm(opt).then(function (yes) {
                if (yes) {
                    _this.leaving = true;
                    _this.app.getActiveNav().pop();
                }
            });
            return false;
        }
        else {
            this.leaving = false;
            onLeave();
            return true;
        }
    };
    /**
     * Present the user with a modal that offers two buttons for confirming
     * some action or for declining some action. If the user confirms the action
     * the wrapped boolean will be true, otherwise false.
     * @param opt Options to specify the content of the dialog.
     * @returns {Promise<boolean>} What the user chose
     */
    ModalService.prototype.confirm = function (opt) {
        var _this = this;
        // TODO: Localization
        return new Promise(function (resolve, reject) {
            _this.translateService.get(['YES', 'CANCEL']).subscribe(function (trans) {
                var okText = opt.okText || trans['YES'];
                var cancelText = opt.cancelText || trans['CANCEL'];
                var buttons = [];
                if (opt.disableCancel !== true) {
                    buttons.push({
                        text: cancelText,
                        handler: function () {
                            resolve(false);
                        }
                    });
                }
                buttons.push({
                    text: okText,
                    handler: function () {
                        resolve(true);
                    }
                });
                var modal = _this.alertCtrl.create({
                    title: opt.title,
                    message: opt.message,
                    buttons: buttons
                });
                modal.present();
            });
        });
    };
    /**
     * Produce an alert screen that simply has an OK button that is used
     * to dismiss the dialog.
     * @param message The main text to display
     * @param title An optional title
     */
    ModalService.prototype.alert = function (message, title) {
        var _this = this;
        if (title === void 0) { title = ''; }
        this.translateService.get(['OK']).subscribe(function (trans) {
            _this.alertCtrl.create({
                title: title,
                message: message,
                buttons: [trans['OK']]
            }).present();
        });
    };
    ModalService.prototype.error = function (message) {
        this.alert(message);
    };
    // TODO: translate those sentances
    ModalService.prototype.showNoInternet = function () {
        var _this = this;
        this.translateService.get(['NO.INTERNET.TITLE', 'NO.INTERNET.TEXT']).subscribe(function (trans) {
            _this.alert(trans['NO.INTERNET.TEXT'], trans['NO.INTERNET.TITLE']);
        });
    };
    return ModalService;
}());
ModalService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* App */]])
], ModalService);

//# sourceMappingURL=ModalService.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_highcharts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OverviewPage = (function () {
    function OverviewPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.isWeek = false;
        this.isMonth = true;
        this.isYear = true;
        this.season = "week";
    }
    OverviewPage.prototype.ionViewDidLoad = function () {
        var myChart = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('container', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beschwerdeverlauf über die letzten 7 Tage'
            },
            xAxis: {
                categories: ['Freitag', 'Samstag', 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag']
            },
            yAxis: {
                min: 0,
                max: 15,
                title: {
                    text: 'Beschwerdestärke'
                }
            },
            series: [{
                    name: 'Augenbeschwerden',
                    data: [10, 4, 6, 8, 2, 6, 7]
                }, {
                    name: 'Nasenbeschwerden',
                    data: [5, 7, 3, 3, 1, 9, 12]
                }, {
                    name: 'Atembeschwerden',
                    data: [5, 7, 3, 10, 9, 4, 6]
                }]
        });
        var myChartMonth = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('containerMonth', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beschwerdeverlauf über die letzten 30 Tage'
            },
            xAxis: {
                categories: ['18.-24.12.2017', '25.-31.12.2017', '01.-07.01.2018', '08.-14.01.2018']
            },
            yAxis: {
                min: 0,
                max: 15,
                title: {
                    text: 'Beschwerdestärke'
                }
            },
            series: [{
                    name: 'Augenbeschwerden',
                    data: [10, 4, 6, 8]
                }, {
                    name: 'Nasenbeschwerden',
                    data: [5, 7, 3, 3]
                }, {
                    name: 'Atembeschwerden',
                    data: [5, 7, 3, 10]
                }]
        });
        var myChartYear = __WEBPACK_IMPORTED_MODULE_2_highcharts__["chart"]('containerYear', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Beschwerdeverlauf über das gesamte Jahr'
            },
            xAxis: {
                categories: ['Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August']
            },
            yAxis: {
                min: 0,
                max: 15,
                title: {
                    text: 'Beschwerdestärke'
                }
            },
            series: [{
                    name: 'Augenbeschwerden',
                    data: [10, 4, 6, 8, 2, 6, 7]
                }, {
                    name: 'Nasenbeschwerden',
                    data: [5, 7, 3, 3, 1, 9, 12]
                }, {
                    name: 'Atembeschwerden',
                    data: [5, 7, 3, 10, 9, 4, 6]
                }]
        });
    };
    OverviewPage.prototype.pushPage = function (val) {
        if (val == 'week') {
            this.isWeek = false;
            this.isMonth = true;
            this.isYear = true;
        }
        if (val == 'month') {
            this.isWeek = true;
            this.isMonth = false;
            this.isYear = true;
        }
        if (val == 'year') {
            this.isWeek = true;
            this.isMonth = true;
            this.isYear = false;
        }
    };
    ;
    return OverviewPage;
}());
OverviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-overview',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\overview\overview.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Übersicht</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Übersicht</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-segment [(ngModel)]="season" color="primary">\n\n    <ion-segment-button value="week" (ionSelect)=\'pushPage("week")\'>\n\n      Woche\n\n    </ion-segment-button>\n\n    <ion-segment-button value="month" (ionSelect)=\'pushPage("month")\'>\n\n      Monat\n\n    </ion-segment-button>\n\n    <ion-segment-button value="year" (ionSelect)=\'pushPage("year")\'>\n\n      Jahr\n\n    </ion-segment-button>\n\n  </ion-segment>\n\n    <div id="container" style="display: block" [hidden]="isWeek"></div>\n\n    <div id="containerMonth" style="display: block" [hidden]="isMonth"></div>\n\n    <div id="containerYear" style="display: block" [hidden]="isYear"></div>\n\n    <p>Durch Klicken auf eine Beschwerdeart, kann diese ausgeblendet werden. Durch erneutes Klicken auf die Beschwerdeart wird diese wieder eingeblendet.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\overview\overview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], OverviewPage);

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityPage; });
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



var icon = {
    url: "../assets/img/roterPunkt.png",
};
var iconRed = {
    url: "../assets/img/roterPunkt.png",
};
var iconBlue = {
    url: "../assets/img/blauerPunkt.png",
};
var iconGreen = {
    url: "../assets/img/gruenerPunkt.png",
};
var CommunityPage = (function () {
    function CommunityPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    CommunityPage.prototype.ionViewDidLoad = function () {
        this.DisplayMap();
    };
    CommunityPage.prototype.DisplayMap = function () {
        var location = new google.maps.LatLng('47.141011', '7.240413');
        var jegenstorf = new google.maps.LatLng('47.052221', '7.508239');
        var lindenhof = new google.maps.LatLng('46.958121', '7.427746');
        var muenchenbuchsee = new google.maps.LatLng('47.021621', '7.450367');
        var ostring = new google.maps.LatLng('46.943196', '7.469334');
        var buempliz = new google.maps.LatLng('46.940063', '7.390292');
        var solothurn = new google.maps.LatLng('47.208835', '7.532291');
        var luzern = new google.maps.LatLng('47.050168', '8.309307');
        var biberist = new google.maps.LatLng('47.181834', '7.557780');
        var grafenried = new google.maps.LatLng('47.078703', '7.510729');
        var oerlikon = new google.maps.LatLng('47.409334', '8.544875');
        var doerfli = new google.maps.LatLng('47.354834', '8.443423');
        var baden = new google.maps.LatLng('47.472880', '8.308090');
        var lyss = new google.maps.LatLng('47.074650', '7.307702');
        var kongres = new google.maps.LatLng('47.134965', '7.248026');
        var ostermundigen = new google.maps.LatLng('46.957708', '7.487307');
        var ittigen = new google.maps.LatLng('46.976143', '7.481894');
        var zurich = new google.maps.LatLng('47.376696', '8.540271');
        var options = {
            center: location,
            zoom: 12,
            streetViewControl: false,
            mapTypeId: 'roadmap' //roadmap is default, other possibilities are terrain, hybrid, satellite
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(location, map, 'red');
        this.addMarker(jegenstorf, map, 'red');
        this.addMarker(lindenhof, map, 'green');
        this.addMarker(zurich, map, 'blue');
        this.addMarker(muenchenbuchsee, map, 'red');
        this.addMarker(ostring, map, 'red');
        this.addMarker(buempliz, map, 'red');
        this.addMarker(solothurn, map, 'red');
        this.addMarker(luzern, map, 'red');
        this.addMarker(biberist, map, 'red');
        this.addMarker(grafenried, map, 'red');
        this.addMarker(oerlikon, map, 'red');
        this.addMarker(doerfli, map, 'red');
        this.addMarker(baden, map, 'red');
        this.addMarker(lyss, map, 'red');
        this.addMarker(kongres, map, 'red');
        this.addMarker(ostermundigen, map, 'red');
        this.addMarker(ittigen, map, 'red');
    };
    CommunityPage.prototype.addMarker = function (position, map, color) {
        if (color == 'green')
            icon = iconGreen;
        if (color == 'blue')
            icon = iconBlue;
        if (color == 'red')
            icon = iconRed;
        console.log(position);
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
    };
    CommunityPage.prototype.showExplanation = function () {
        var confirm = this.alertCtrl.create({
            title: 'Erklärung',
            message: 'In dieser Karte siehst du, wo es User gibt, die unter Allergie-Beschwerden leiden. Dabei werden die drei Allergie-Arten Augenbeschwerden, Nasenbeschwerden und Atembeschwerden farblich unterschieden.',
            buttons: [
                {
                    text: 'Verstanden',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
            ]
        });
        confirm.present();
    };
    return CommunityPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], CommunityPage.prototype, "mapRef", void 0);
CommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-community',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\community\community.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Community</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div><label>Augenbeschwerden&nbsp;&nbsp;&nbsp;</label><img src="../assets/img/roterPunkt.png"></div>\n\n  <div><label>Nasenbeschwerden&nbsp;&nbsp;&nbsp;</label><img src="../assets/img/blauerPunkt.png"></div>\n\n  <div><label>Atembeschwerden&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><img src="../assets/img/gruenerPunkt.png"></div>\n\n  <ion-icon #info (click)="showExplanation()" name="md-information-circle"></ion-icon>\n\n  <div #map id="my-map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\community\community.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CommunityPage);

//# sourceMappingURL=community.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__introduction_reward_reward__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntroductionPage = (function () {
    function IntroductionPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    }
    IntroductionPage.prototype.ionViewWillEnter = function () {
        this.tabBarElement.style.display = 'none';
    };
    IntroductionPage.prototype.pushRewardPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__introduction_reward_reward__["a" /* RewardPage */]);
    };
    IntroductionPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return IntroductionPage;
}());
IntroductionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-introduction',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\introduction.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <ion-card>\n\n\n\n  <img class="full-image" src="assets/img/AllyNormal.png"/>\n\n  <ion-card-content >\n\n    <ion-card-title>\n\n      Hallo Tim\n\n      </ion-card-title>\n\n    <p>\n\n      Ich bin Dr. Ally. Vielen Dank, dass Du mir mit Deinem Beitrag hilfst, Allergien zu untersuchen.\n\n      Lass uns kurz Deine persönlichen Einstellungen zu speichern.\n\n    </p>\n\n  </ion-card-content>\n\n</ion-card>\n\n  </p>\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left><ion-icon name=\'close\'></ion-icon>Abbrechen</button>\n\n\n\n  <button ion-button icon-right secondary (click)="pushRewardPage()">Weiter<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\introduction.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], IntroductionPage);

//# sourceMappingURL=introduction.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heightweight_heightweight__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RewardPage = (function () {
    function RewardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RewardPage.prototype.pushHeightWeightPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__heightweight_heightweight__["a" /* HeightWeightPage */]);
    };
    RewardPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return RewardPage;
}());
RewardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-reward',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\reward\reward.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <ion-card>\n\n  <img class="full-image" src="assets/img/AllyAchtung.png"/>\n\n  <ion-card-content>\n\n    <p>\n\n  Du kannst mit Deinen Einträgen Punkte sammeln und Dir so eine Belohnung holen. Wähle eine der folgenden aus:\n\n    </p>\n\n  </ion-card-content>\n\n</ion-card>\n\n  </p>\n\n    <ion-list radio-group [(ngModel)]="questionWhichReward">\n\n      <ion-item>\n\n        <ion-label>Gratis-Allergietest</ion-label>\n\n        <ion-radio value="allergietest" checked></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Gratis-Medikament</ion-label>\n\n        <ion-radio value="medikament"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Gratis-Allergieberatung</ion-label>\n\n        <ion-radio value="allergieberatung"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Spende für eine Allergie-Institution</ion-label>\n\n        <ion-radio value="spende"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n<button (click)="pushHomePage()" ion-button secondary icon-left><ion-icon name=\'close\'></ion-icon>Abbrechen</button>\n\n\n\n<button ion-button icon-right secondary (click)="pushHeightWeightPage()">Weiter<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\reward\reward.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], RewardPage);

//# sourceMappingURL=reward.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightWeightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_job__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeightWeightPage = (function () {
    function HeightWeightPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HeightWeightPage.prototype.pushJobPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__job_job__["a" /* JobPage */]);
    };
    HeightWeightPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return HeightWeightPage;
}());
HeightWeightPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-heightweight',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\heightweight\heightweight.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <ion-card>\n\n  <img class="full-image" src="assets/img/AllyNormalKlein.png"/>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      </ion-card-title>\n\n    <p>\n\n  Erfasse Deine Grösse und Dein Gewicht\n\n    </p>\n\n  </ion-card-content>\n\n</ion-card>\n\n  </p>\n\n\n\n\n\n  <ion-item>\n\n    <ion-label>Grösse</ion-label>\n\n    <ion-input type="number" placeholder="in cm"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label>Gewicht</ion-label>\n\n    <ion-input type="number" placeholder="in kg"></ion-input>\n\n  </ion-item>\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left><ion-icon name=\'close\'></ion-icon>Abbrechen</button>\n\n\n\n  <button ion-button icon-right secondary (click)="pushJobPage()">Weiter<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\heightweight\heightweight.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], HeightWeightPage);

//# sourceMappingURL=heightweight.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allergy_allergy__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JobPage = (function () {
    function JobPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    JobPage.prototype.pushAllergyPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__allergy_allergy__["a" /* AllergyPage */]);
    };
    JobPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return JobPage;
}());
JobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-job',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\job\job.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <ion-card>\n\n  <img class="full-image" src="assets/img/AllyAchtung.png"/>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      </ion-card-title>\n\n    <p>\n\n  Was machst Du beruflich?\n\n  </ion-card-content>\n\n</ion-card>\n\n  </p>\n\n\n\n  <ion-item>\n\n    <ion-label>Beruf</ion-label>\n\n    <ion-select [(ngModel)]="berufe" cancelText="Abbrechen">\n\n      <ion-option>Bauer</ion-option>\n\n      <ion-option>Büroangestellter</ion-option>\n\n      <ion-option>Lokführer</ion-option>\n\n      <ion-option>Medizininformatiker</ion-option>\n\n      <ion-option>Physiotherapeut</ion-option>\n\n      <ion-option>Zimmermann</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>Arbeitsumgebung</ion-label>\n\n    <ion-select [(ngModel)]="arbeitsumgebung" multiple="true" cancelText="Abbrechen">\n\n      <ion-option>draussen</ion-option>\n\n      <ion-option>drinnen</ion-option>\n\n      <ion-option>in der Natur</ion-option>\n\n      <ion-option>in einer Fabrik</ion-option>\n\n      <ion-option>zu Hause</ion-option>\n\n      <ion-option>unterschiedlich</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left><ion-icon name=\'close\'></ion-icon>Abbrechen</button>\n\n\n\n  <button ion-button icon-right secondary (click)="pushAllergyPage()">Weiter<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\job\job.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], JobPage);

//# sourceMappingURL=job.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__takingdrug_takingdrug__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllergyPage = (function () {
    function AllergyPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AllergyPage.prototype.pushTakingDrugPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__takingdrug_takingdrug__["a" /* TakingDrugPage */]);
    };
    AllergyPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return AllergyPage;
}());
AllergyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-allergy',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\allergy\allergy.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <ion-card>\n\n  <img class="full-image" src="assets/img/AllyNormalKlein.png"/>\n\n  <ion-card-content>\n\n    <ion-card-title>\n\n      </ion-card-title>\n\n    <p>\n\n  Sind bei Dir Allergien bekannt?\n\n  </ion-card-content>\n\n</ion-card>\n\n  </p>\n\n\n\n  <ion-list radio-group [(ngModel)]="questionAllergy">\n\n    <ion-item>\n\n      <ion-label>Ja</ion-label>\n\n      <ion-select [(ngModel)]="bekannteAllergien" multiple="true" cancelText="Abbrechen">\n\n        <ion-option>Ambrosia</ion-option>\n\n        <ion-option>Ampfer</ion-option>\n\n        <ion-option>Beifuss</ion-option>\n\n        <ion-option>Birke</ion-option>\n\n        <ion-option>Buche</ion-option>\n\n        <ion-option>Edelkastanie</ion-option>\n\n        <ion-option>Eiche</ion-option>\n\n        <ion-option>Erle</ion-option>\n\n        <ion-option>Esche</ion-option>\n\n        <ion-option>Gräser</ion-option>\n\n        <ion-option>Hagebuche</ion-option>\n\n        <ion-option>Hasel</ion-option>\n\n        <ion-option>Platane</ion-option>\n\n        <ion-option>Wegerich</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Nein</ion-label>\n\n      <ion-radio value="no"></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Ich weiss es nicht</ion-label>\n\n      <ion-radio value="unkwown"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left><ion-icon name=\'close\'></ion-icon>Abbrechen</button>\n\n\n\n  <button ion-button icon-right secondary (click)="pushTakingDrugPage()">Weiter<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\allergy\allergy.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], AllergyPage);

//# sourceMappingURL=allergy.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakingDrugPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__drug_drug__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_HCIService__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TakingDrugPage = (function () {
    function TakingDrugPage(navCtrl, hciService, barcodeScanner, alertCtrl) {
        this.navCtrl = navCtrl;
        this.hciService = hciService;
        this.barcodeScanner = barcodeScanner;
        this.alertCtrl = alertCtrl;
        this.description = "";
    }
    // Search by name
    TakingDrugPage.prototype.getDSCRD = function () {
        this.val = this.hciService.getData(this.description, 'hospINDEX', 'DSCRD');
    };
    // Open Scanner
    TakingDrugPage.prototype.scanBarcode = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            // Success! Barcode data is here
            _this.getBarCode(barcodeData.text);
            _this.showProduct();
        }, function (err) {
            // Error appears
            console.log(err);
        });
    };
    // Search by barcode
    TakingDrugPage.prototype.getBarCode = function (barCodeVal) {
        this.val = this.hciService.getData(barCodeVal, 'hospINDEX', 'ARTBAR');
    };
    TakingDrugPage.prototype.showProduct = function () {
        var alert = this.alertCtrl.create({
            title: 'Medikament',
            message: 'Ist das Ihr Produkt ' + this.val + " ?",
            buttons: [
                {
                    text: 'Nein',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Einverstanden',
                    handler: function () {
                        console.log('ok');
                    }
                }
            ]
        });
        alert.present();
    };
    TakingDrugPage.prototype.pushDrugPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__drug_drug__["a" /* DrugPage */]);
    };
    TakingDrugPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    return TakingDrugPage;
}());
TakingDrugPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-takingdrug',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\takingdrug\takingdrug.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Einführung</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <p>\n    <ion-card>\n  <img class="full-image" src="assets/img/AllyAchtung.png"/>\n  <ion-card-content>\n    <p>\nHier kannst Du Deine Medikamente erfassen\n    </p>\n  </ion-card-content>\n</ion-card>\n  </p>\n\n  <ion-input placeholder="Produktbezeichnung eingeben" [(ngModel)]="description"></ion-input>\n  <button ion-button full (click)="scanBarcode()">Barcode einscannen</button>\n\n<button (click)="pushHomePage()" ion-button secondary icon-left><ion-icon name=\'close\'></ion-icon>Abbrechen</button>\n\n<button ion-button icon-right secondary (click)="pushDrugPage()">Weiter<ion-icon name="ios-arrow-forward"></ion-icon></button>\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\takingdrug\takingdrug.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_HCIService__["a" /* HCIService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], TakingDrugPage);

//# sourceMappingURL=takingdrug.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remindertime_remindertime__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DrugPage = (function () {
    function DrugPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DrugPage.prototype.pushReminderTimePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__remindertime_remindertime__["a" /* ReminderTimePage */]);
    };
    DrugPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return DrugPage;
}());
DrugPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-drug',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\drug\drug.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <ion-card>\n\n<img class="full-image" src="assets/img/AllyAchtung.png"/>\n\n  <ion-card-content>\n\n    <p>\n\nHier kannst Du die Dosierung Deiner Medikamente erfassen\n\n    </p>\n\n  </ion-card-content>\n\n</ion-card>\n\n  </p>\n\n\n\n  <ion-item>\n\n    <ion-label>täglich</ion-label>\n\n    <ion-select [(ngModel)]="bekannteAllergien" multiple="true" cancelText="Abbrechen">\n\n      <ion-option>morgens</ion-option>\n\n      <ion-option>mittags</ion-option>\n\n      <ion-option>abends</ion-option>\n\n      <ion-option>nachts</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n<ion-list radio-group [(ngModel)]="useMedication">\n\n     <ion-item>\n\n       <ion-label>nach Bedarf</ion-label>\n\n       <ion-radio value="uponNeed"></ion-radio>\n\n     </ion-item>\n\n     <ion-item>\n\n       <ion-label>nie</ion-label>\n\n       <ion-radio value="never"></ion-radio>\n\n     </ion-item>\n\n   </ion-list>\n\n\n\n   <button (click)="pushHomePage()" ion-button secondary icon-left><ion-icon name=\'close\'></ion-icon>Abbrechen</button>\n\n\n\n   <button ion-button icon-right secondary (click)="pushReminderTimePage()">Weiter<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\drug\drug.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], DrugPage);

//# sourceMappingURL=drug.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finish_finish__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReminderTimePage = (function () {
    function ReminderTimePage(navCtrl, zone) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.date = new Date();
        this.date.setHours(this.date.getHours() + 1);
        this.date = this.date.toISOString();
    }
    ReminderTimePage.prototype.pushFinishPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__finish_finish__["a" /* FinishPage */]);
    };
    ReminderTimePage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return ReminderTimePage;
}());
ReminderTimePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-remindertime',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\remindertime\remindertime.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <ion-card>\n\n<img class="full-image" src="assets/img/AllyNormalKlein.png"/>\n\n  <ion-card-content>\n\n    <p>\n\nIch bin da, um Dir zu helfen, Deine täglichen Einträge zu erfassen\n\n    </p>\n\n     <p>Wann darf ich Dich daran erinnern?</p>\n\n  </ion-card-content>\n\n</ion-card>\n\n  </p>\n\n  <ion-item>\n\n       <ion-label>Zeit</ion-label>\n\n       <ion-datetime displayFormat="HH:mm" [(ngModel)]="date" cancelText="Abbrechen" doneText="Speichern"></ion-datetime>\n\n     </ion-item>\n\n\n\n\n\n       <button (click)="pushHomePage()" ion-button secondary icon-left><ion-icon name=\'close\'></ion-icon>Abbrechen</button>\n\n\n\n       <button ion-button icon-right secondary (click)="pushFinishPage()">Weiter<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\remindertime\remindertime.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], ReminderTimePage);

//# sourceMappingURL=remindertime.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FinishPage = (function () {
    function FinishPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FinishPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    return FinishPage;
}());
FinishPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-finish',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\introduction\finish\finish.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <p>\n\n    <ion-card>\n\n<img class="full-image" src="assets/img/AllySuper.png"/>\n\n  <ion-card-content>\n\n    <h5>Geschafft!</h5>\n\n      <p>Jetzt kannst Du die App nutzen!</p>\n\n      <p>Viel Spass und ich freue mich auf Deine Einträge!</p>\n\n  </ion-card-content>\n\n</ion-card>\n\n  </p>\n\n\n\n\n\n\n\n<button ion-button icon-right secondary (click)="pushTabsPage()">Abschliessen<ion-icon name="ios-arrow-forward"></ion-icon></button>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\introduction\finish\finish.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], FinishPage);

//# sourceMappingURL=finish.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HCIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hci_hospindex_api__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hci_hospindex_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hci_hospindex_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HCIService = (function () {
    function HCIService() {
    }
    HCIService.prototype.getData = function (keyVal, indexVal, keyTypeVal) {
        // Use Plugin for request
        __WEBPACK_IMPORTED_MODULE_1_hci_hospindex_api__["HciHospAPI"].hciQuery(this.getHciQueryRequest(keyVal, indexVal, keyTypeVal), this.getUserCredentials()).then(function (response) {
            var attName = "";
            console.log(response.body);
            // GET ATTRIBUTE DSCRD FROM XML attName=...
            // END
            return attName;
            //return response.body;
        }).catch(function (err) {
            return err;
        });
    };
    ;
    // Do it without the plugin
    HCIService.prototype.test = function (keyVal, indexVal, keyTypeVal) {
        var XMLReq = new XMLHttpRequest();
        XMLReq.withCredentials = true;
        XMLReq.onreadystatechange = function () {
            if (XMLReq.readyState == XMLHttpRequest.DONE) {
                console.log(XMLReq.responseText);
            }
        };
        var url = "https://index.hcisolutions.ch/index/current/get.aspx?schema=ARTICLE&key=" + '' + "&index=" + '' + "&keyType=" + '';
        XMLReq.open("GET", url, true);
        XMLReq.setRequestHeader("Authorization", "Basic " + 'RVBOMjM2MzQyQGhjaXNvbHV0aW9ucy5jaDpVTVBiREp1NyFX');
        XMLReq.send();
    };
    HCIService.prototype.getHciQueryRequest = function (keyVal, indexVal, keyTypeVal) {
        var query = {
            key: keyVal,
            index: indexVal,
            keyType: keyTypeVal
        };
        return query;
    };
    HCIService.prototype.getUserCredentials = function () {
        var credentials = {
            username: 'EPN236342@hcisolutions.ch',
            password: 'UMPbDJu7!W'
        };
        return credentials;
    };
    HCIService.prototype.hciQueryReal = function (requestParams, credentials) {
        var baseUrl = "https://index.hcisolutions.ch/index/current/get.aspx?schema=ARTICLE";
        var queryParts = Object.keys(requestParams).map(function (key) {
            return key + '=' + requestParams[key];
        });
        var query = queryParts.join('&');
        query = query && "&" + query || '';
        var url = baseUrl + query;
        var username = credentials.username || 'EPN236342@hcisolutions.ch';
        var password = credentials.password || 'UMPbDJu7!W';
        return this._apiCall({
            url: url,
            method: "GET",
            headers: {
                'Authorization': 'Basic ' + btoa(username + ":" + password)
            },
            jsonBody: false
        }).then(function (rsp) {
            return rsp;
        }).catch(function (err) {
            return err;
        });
    };
    HCIService.prototype._apiCall = function (args) {
        var url = args.url;
        var method = args.method;
        var payload = args.payload;
        var headers = args.headers;
        var jsonBody = args.jsonBody || false;
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url, true);
            if (headers) {
                Object.keys(headers).forEach(function (key) {
                    xhr.setRequestHeader(key, headers[key]);
                });
            }
            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    console.log(xhr);
                    var status_1 = this.status;
                    if (status_1 >= 200 && status_1 < 300) {
                        // check content-disposition
                        var disposition = xhr.getResponseHeader("Content-Disposition");
                        console.log(disposition);
                        if (disposition === "inline; filename=notFound.jpg") {
                            console.log("Picture not found, Picture: " + disposition);
                            reject("No picture available");
                        }
                        var body = void 0;
                        if (jsonBody) {
                            body = JSON.parse(this.responseText);
                        }
                        else {
                            body = this.responseText;
                        }
                        resolve({
                            message: 'Request successful',
                            body: body,
                            status: status_1
                        });
                    }
                    else {
                        reject({
                            message: this.statusText,
                            body: this.responseText,
                            status: status_1
                        });
                    }
                }
            };
            xhr.onerror = function () {
                reject({
                    message: 'Network error',
                    body: '',
                    status: 0
                });
            };
            if (payload !== undefined) {
                xhr.send(JSON.stringify(payload));
            }
            else {
                xhr.send();
            }
        });
    };
    return HCIService;
}());
HCIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], HCIService);

//# sourceMappingURL=HCIService.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newEntry_dateTime_dateTime__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewEntryPage = (function () {
    function NewEntryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    NewEntryPage.prototype.pushDateTimePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__newEntry_dateTime_dateTime__["a" /* DateTimePage */]);
    };
    NewEntryPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return NewEntryPage;
}());
NewEntryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-newEntry',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\newEntry\newEntry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-card>\n\n      <img class="full-image" src="assets/img/AllyNormal.png"/>\n\n    <ion-card-content>\n\n      <ion-card-title>Hallo Tim</ion-card-title>\n\n       <p>Mit jedem Eintrag den Du machst, hilfst Du uns die aktuelle Pollenbelastung besser analysieren zu können.</p>\n\n    </ion-card-content>\n\n    </ion-card>\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n  <button (click)="pushDateTimePage()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\newEntry\newEntry.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], NewEntryPage);

//# sourceMappingURL=newEntry.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complaints_complaints__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DateTimePage = (function () {
    function DateTimePage(navCtrl, zone) {
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.date = new Date();
        this.date.setHours(this.date.getHours() + 1);
        this.date = this.date.toISOString();
    }
    DateTimePage.prototype.pushComplaintsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__complaints_complaints__["a" /* ComplaintsPage */]);
    };
    DateTimePage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return DateTimePage;
}());
DateTimePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dateTime',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\newEntry\dateTime\dateTime.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyTraurig.png"/>\n\n  <ion-card-content>\n\n      <p>Wann sind Deine Beschwerden aufgetreten?</p>\n\n    </ion-card-content>\n\n    </ion-card>\n\n\n\n      <ion-item>\n\n        <ion-label>Datum und Zeit</ion-label>\n\n        <!--set default time now-->\n\n        <ion-datetime displayFormat="DD MMM, HH:mm" [(ngModel)]="date" cancelText="Abbrechen" doneText="Speichern"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <button (click)="pushHomePage()" ion-button secondary icon-left>\n\n        <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n      </button>\n\n      <button (click)="pushComplaintsPage()" ion-button icon-right secondary>Weiter\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n      </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\newEntry\dateTime\dateTime.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], DateTimePage);

//# sourceMappingURL=dateTime.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__physicalActivity_physicalActivity__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComplaintsPage = (function () {
    function ComplaintsPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    ComplaintsPage.prototype.pushPhysicalActivityPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__physicalActivity_physicalActivity__["a" /* PhysicalActivityPage */]);
    };
    ComplaintsPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    ComplaintsPage.prototype.showInfoAugenbeschwerden = function () {
        var confirm = this.alertCtrl.create({
            title: 'Augenbeschwerden',
            message: 'Brennende Augen können harmlose Ursachen haben, die (meist) von alleine wieder verschwinden. Augenbrennen ist mitunter aber auch Ausdruck verschiedener Erkrankungen, die einer Behandlung bedürfen. Wer bereits längere Zeit unter Augenbrennen leidet und zusätzlich andere Beschwerden oder Schmerzen hat, sollte deshalb zum Arzt gehen.',
            buttons: [
                {
                    text: 'Verstanden',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
            ]
        });
        confirm.present();
    };
    ComplaintsPage.prototype.showInfoNasenbeschwerden = function () {
        var confirm = this.alertCtrl.create({
            title: 'Nasenbeschwerden',
            message: 'Unsere Nase kann Gerüche aufnehmen und verarbeiten, Atemluft reinigen und befeuchten sowie eingeatmete Erreger und Partikel abtransportieren. Durch verschiedene Nasenbeschwerden wie Nasenscheidewandverkrümmung oder Nasenbruch sowie aufgrund von Allergien, kann es zu Einschränkungen dieser Funktionen kommen.',
            buttons: [
                {
                    text: 'Verstanden',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
            ]
        });
        confirm.present();
    };
    ComplaintsPage.prototype.showInfoAtembeschwerden = function () {
        var confirm = this.alertCtrl.create({
            title: 'Atembeschwerden',
            message: 'Es gibt viele Ursachen für akute und chronische Atembeschwerden. Die Behandlung dieses Symptoms gehört grundsätzlich in die Hand eines Arztes. Atembeschwerden können anfallartig oder auch permanent auftreten.',
            buttons: [
                {
                    text: 'Verstanden',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
            ]
        });
        confirm.present();
    };
    return ComplaintsPage;
}());
ComplaintsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-complaints',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\newEntry\complaints\complaints.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllySauer.png"/>\n\n  <ion-card-content>\n\n    <p>Gib bitte spontan an, wie stark Deine Beschwerden sind?</p>\n\n  </ion-card-content>\n\n  </ion-card>\n\n\n\n          <h5>Augenbeschwerden <ion-icon (click)="showInfoAugenbeschwerden()" name="md-information-circle"></ion-icon></h5>\n\n          <p>(Brennen, Jucken, Tränen)</p>\n\n            <ion-item>\n\n            <ion-range min="0" max="15" pin="true" [(ngModel)]="Augenbeschwerden">\n\n              <ion-label range-left>0</ion-label>\n\n              <ion-label range-right>15</ion-label>\n\n            </ion-range>\n\n          </ion-item>\n\n          <h5>Nasenbeschwerden <ion-icon (click)="showInfoNasenbeschwerden()" name="md-information-circle"></ion-icon></h5>\n\n          <p>(Schnupfen, Juckreiz)</p>\n\n          <ion-item>\n\n            <ion-range min="0" max="15" pin="true" [(ngModel)]="Nasenbeschwerden">\n\n              <ion-label range-left>0</ion-label>\n\n              <ion-label range-right>15</ion-label>\n\n            </ion-range>\n\n          </ion-item>\n\n          <h5>Atembeschwerden <ion-icon (click)="showInfoAtembeschwerden()" name="md-information-circle"></ion-icon></h5>\n\n          <p>(Atemnot, Husten)</p>\n\n          <ion-item>\n\n            <ion-range min="0" max="15" pin="true" [(ngModel)]="Atembeschwerden">\n\n              <ion-label range-left>0</ion-label>\n\n              <ion-label range-right>15</ion-label>\n\n            </ion-range>\n\n          </ion-item>\n\n\n\n      <button (click)="pushHomePage()" ion-button secondary icon-left>\n\n        <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n      </button>\n\n      <button (click)="pushPhysicalActivityPage()" ion-button icon-right secondary>Weiter\n\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n\n      </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\newEntry\complaints\complaints.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ComplaintsPage);

//# sourceMappingURL=complaints.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysicalActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medication_medication__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhysicalActivityPage = (function () {
    function PhysicalActivityPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PhysicalActivityPage.prototype.pushMedicationPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__medication_medication__["a" /* MedicationPage */]);
    };
    PhysicalActivityPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return PhysicalActivityPage;
}());
PhysicalActivityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-physicalActivity',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\newEntry\physicalActivity\physicalActivity.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyOh.png"/>\n\n  <ion-card-content>\n\n  <p>Wie stark hast Du Dich körperlich betätigt?</p>\n\n</ion-card-content>\n\n</ion-card>\n\n\n\n  <ion-item>\n\n    <ion-range min="0" max="15" pin="true"[(ngModel)]="physicalActivity">\n\n      <ion-label range-left>0</ion-label>\n\n      <ion-label range-right>15</ion-label>\n\n    </ion-range>\n\n  </ion-item>\n\n\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n  <button (click)="pushMedicationPage()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\newEntry\physicalActivity\physicalActivity.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PhysicalActivityPage);

//# sourceMappingURL=physicalActivity.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__totalPoints_totalPoints__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MedicationPage = (function () {
    function MedicationPage(zone, navCtrl, toastCtrl) {
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.isDisabled = true;
        this.questionMedication = {};
        this.questionMedicationWhy = {};
        this.questionMedication = true;
        this.questionMedicationWhy = true;
        this.isDisabled = false;
    }
    MedicationPage.prototype.change = function (val) {
        var _this = this;
        this.zone.run(function () {
            if (val)
                _this.isDisabled = false;
            else
                _this.isDisabled = true;
            console.log(_this.isDisabled);
        });
    };
    MedicationPage.prototype.pushTotalPointsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__totalPoints_totalPoints__["a" /* TotalPointsPage */]);
    };
    MedicationPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    MedicationPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Dein neuer Eintrag wurde gespeichert!',
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    return MedicationPage;
}());
MedicationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-medication',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\newEntry\medication\medication.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyAchtung.png"/>\n\n  <ion-card-content>\n\n    <p>Hast Du Medikamente eingenommen?</p>\n\n  </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!--ion-list radio-group [(ngModel)]="questionMedication">\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="questionMedicationWhy" cancelText="Abbrechen" (ionChange)="onSelectChange($event)">\n\n        <ion-option value="true">Ja</ion-option>\n\n        <ion-option value="false">Nein</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="questionMedicationWhy" cancelText="Abbrechen" [disabled]="isDisabled">\n\n        <ion-option>Vorbeugend</ion-option>\n\n        <ion-option>Wegen Beschwerden</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list-->\n\n\n\n  <ion-list radio-group [(ngModel)]="questionMedication" >\n\n    <ion-item>\n\n      <ion-label>Ja</ion-label>\n\n      <ion-radio value="true" (ionSelect)="change(true)"></ion-radio>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label>Nein</ion-label>\n\n      <ion-radio value="false" (ionSelect)="change(false)"></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-list radio-group [(ngModel)]="questionMedicationWhy" [disabled]="isDisabled">\n\n    <ion-item>\n\n      <ion-label>Vorbeugend</ion-label>\n\n      <ion-radio ></ion-radio>\n\n    </ion-item>\n\n    <ion-item >\n\n      <ion-label>Wegen Beschwerden</ion-label>\n\n      <ion-radio></ion-radio>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n  <button (click)="pushTotalPointsPage()" (click)="presentToast()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\newEntry\medication\medication.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], MedicationPage);

//# sourceMappingURL=medication.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalPointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tips_tips__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TotalPointsPage = (function () {
    function TotalPointsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TotalPointsPage.prototype.pushTipsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tips_tips__["a" /* TipsPage */]);
    };
    TotalPointsPage.prototype.pushHomePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    return TotalPointsPage;
}());
TotalPointsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-totalPoints',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\newEntry\totalPoints\totalPoints.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllySuper.png"/>\n\n  <ion-card-content>\n\n  <p>Vielen Dank! Du hast soeben einen Punkt erhalten.</p>\n\n  <p>Ich habe Deine Daten analysiert. Deine Beschwerden entsprechen\n\n         am ehesten einer Gräserpollenallergie!</p>\n\n       </ion-card-content>\n\n       </ion-card>\n\n\n\n  <p>Öffne eine Truhe und hole dir zusätzliche Punkte und einen Tipp.</p>\n\n\n\n  <ion-grid>\n\n    <ion-row justify-content-center>\n\n      <ion-col col-3>\n\n        <ion-icon name="briefcase" style="font-size:55px;color:yellow"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n          <ion-icon name="briefcase" style="font-size:55px;color:blue"></ion-icon>\n\n      </ion-col>\n\n      <ion-col col-3>\n\n         <ion-icon name="briefcase" style="font-size:55px;color:red"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n  <button (click)="pushTipsPage()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\newEntry\totalPoints\totalPoints.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TotalPointsPage);

//# sourceMappingURL=totalPoints.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PollenPage = (function () {
    function PollenPage() {
        this.orte = "aktuellerOrt";
    }
    PollenPage.prototype.selectedCurrentLocation = function () {
    };
    PollenPage.prototype.selectedBern = function () {
    };
    PollenPage.prototype.selectedBiel = function () {
    };
    return PollenPage;
}());
PollenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pollen',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\pollen\pollen.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Pollenprognose</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n<!-- Segment buttons with text -->\n\n  <ion-segment [(ngModel)]="orte" color="primary">\n\n    <ion-segment-button value="aktuellerOrt"\n\n    (ionSelect)="selectedCurrentLocation()">Aktueller Ort</ion-segment-button>\n\n    <ion-segment-button value="bern"\n\n    (ionSelect)="selectedBern()">Bern</ion-segment-button>\n\n    <ion-segment-button value="biel"\n\n    (ionSelect)="selectedBiel()">Biel</ion-segment-button>\n\n  </ion-segment>\n\n  <div [ngSwitch]="orte">\n\n    <ion-list *ngSwitchCase="\'aktuellerOrt\'">\n\n      <ion-item>\n\n        <p>aktueller Ort: Bümpliz</p>\n\n        <ion-card>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-card-title>aktuelle Pollenbelastung</ion-card-title>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                Bäume\n\n              </ion-col>\n\n              <ion-col>\n\n                Gräser\n\n              </ion-col>\n\n              <ion-col>\n\n                Kräuter\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower-outline" style="color:green;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower-outline" style="color:green;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower" style="color:yellow;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                keine Pollen\n\n              </ion-col>\n\n              <ion-col>\n\n                keine Pollen\n\n              </ion-col>\n\n              <ion-col>\n\n                wenig Pollen\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n        <p></p>\n\n\n\n        <ion-card>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-card-title>Wetter</ion-card-title>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                Morgen\n\n              </ion-col>\n\n              <ion-col>\n\n                Mittag\n\n              </ion-col>\n\n              <ion-col>\n\n                Abend\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-icon name="ios-cloud-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-sunny-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-moon-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                2°/0°\n\n              </ion-col>\n\n              <ion-col>\n\n                4°/2°\n\n              </ion-col>\n\n              <ion-col>\n\n                2°/1°\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'bern\'">\n\n      <ion-item>\n\n        <p>Bern</p>\n\n        <ion-card>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-card-title>aktuelle Pollenbelastung</ion-card-title>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                Bäume\n\n              </ion-col>\n\n              <ion-col>\n\n                Gräser\n\n              </ion-col>\n\n              <ion-col>\n\n                Kräuter\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower-outline" style="color:yellow;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower" style="color:green;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower" style="color:orange;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                keine Pollen\n\n              </ion-col>\n\n              <ion-col>\n\n                wenig Pollen\n\n              </ion-col>\n\n              <ion-col>\n\n                viel Pollen\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n        <p></p>\n\n\n\n        <ion-card>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-card-title>Wetter</ion-card-title>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                Morgen\n\n              </ion-col>\n\n              <ion-col>\n\n                Mittag\n\n              </ion-col>\n\n              <ion-col>\n\n                Abend\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-icon name="ios-cloud-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-sunny-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-moon-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                0°/-1°\n\n              </ion-col>\n\n              <ion-col>\n\n                4°/0°\n\n              </ion-col>\n\n              <ion-col>\n\n                1°/-2°\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'biel\'">\n\n      <ion-item>\n\n        <p>Biel</p>\n\n        <ion-card>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-card-title>aktuelle Pollenbelastung</ion-card-title>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                Bäume\n\n              </ion-col>\n\n              <ion-col>\n\n                Gräser\n\n              </ion-col>\n\n              <ion-col>\n\n                Kräuter\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower-outline" style="color:green;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower-outline" style="color:green;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-flower" style="color:yellow;font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                keine Pollen\n\n              </ion-col>\n\n              <ion-col>\n\n                keine Pollen\n\n              </ion-col>\n\n              <ion-col>\n\n                wenig Pollen\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n        <p></p>\n\n\n\n        <ion-card>\n\n          <ion-grid>\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-card-title>Wetter</ion-card-title>\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n\n                Morgen\n\n              </ion-col>\n\n              <ion-col>\n\n                Mittag\n\n              </ion-col>\n\n              <ion-col>\n\n                Abend\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-icon name="ios-cloud-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-rainy-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-icon name="ios-moon-outline" style="font-size:35px;"></ion-icon>\n\n              </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                0°/-1°\n\n              </ion-col>\n\n              <ion-col>\n\n                4°/2°\n\n              </ion-col>\n\n              <ion-col>\n\n                2°/1°\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-grid>\n\n        </ion-card>\n\n\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\pollen\pollen.html"*/
    })
], PollenPage);

//# sourceMappingURL=pollen.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_game_question1_question1__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamePage = (function () {
    function GamePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    GamePage.prototype.onNext1 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_game_question1_question1__["a" /* Question1Page */]);
    };
    return GamePage;
}());
GamePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-game',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\game.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Quiz</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyAchtung.png" />\n\n    <ion-card-content>\n\n\n\n      <ion-row>\n\n        <h2>Hallo Tim</h2>\n\n      </ion-row>\n\n      <p>&nbsp;</p>\n\n      <ion-row>\n\n        <h5>Mit den Lernfragen zu Allergien kannst du Dein Wissen verbessern und so zusätzliche Punkte gewinnen.</h5>\n\n      </ion-row>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button ion-button (click)="onNext1()">Zum Spiel</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\game.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], GamePage);

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__right1_right1__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__false1_false1__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Question1Page = (function () {
    function Question1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.frage = "Wie heissen die Medikamente, die bei Allergien angewendet werden?";
        this.rightAnswer = "answer1";
    }
    Question1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    Question1Page.prototype.onClick = function () {
        console.log("TEST");
        this.navCtrl.pop();
    };
    Question1Page.prototype.onSelect = function (selected) {
        console.log(selected);
        if (selected.value === this.rightAnswer) {
            console.log("RICHTIG");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__right1_right1__["a" /* Right1Page */]);
        }
        else {
            console.log("FALSCH");
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__false1_false1__["a" /* False1Page */]);
        }
    };
    return Question1Page;
}());
Question1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-question1',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\question1\question1.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Quiz</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyAchtung.png" />\n\n    <ion-card-content>\n\n\n\n      <p>{{frage}}</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-scroll scrollX="false" scrollY="false" style="height: 180px;">\n\n\n\n    <ion-list radio-group>\n\n      <ion-item>\n\n        <ion-label>Antihistaminika</ion-label>\n\n        <ion-radio checked="false" value="answer1" #answer1 (ionSelect)="onSelect(answer1)"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Antirheumatika</ion-label>\n\n        <ion-radio checked="false" value="answer2" #answer2 (ionSelect)="onSelect(answer2)"></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Antitussiva</ion-label>\n\n        <ion-radio checked="false" value="answer3" #answer3 (ionSelect)="onSelect(answer3)"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n  </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\question1\question1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Question1Page);

//# sourceMappingURL=question1.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Right1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question2_question2__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Right1Page = (function () {
    function Right1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Right1Page.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question2_question2__["a" /* Question2Page */]);
    };
    return Right1Page;
}());
Right1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-right1',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\right1\right1.html"*/'<ion-header padding class="quiz-title">\n\n\n\n    <ion-title>Quiz</ion-title>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllySuper.png" />\n\n    <ion-card-content>\n\n\n\n      <p>Super Tim!</p>\n\n      <p>Deine Antwort war korrekt - weiter so!</p>\n\n      <p>Du hast zwei Punkte erzielt.</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="onClick()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n\n\n  <button (click)="onClick()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\right1\right1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Right1Page);

//# sourceMappingURL=right1.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Right2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question3_question3__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Right2Page = (function () {
    function Right2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Right2Page.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question3_question3__["a" /* Question3Page */]);
    };
    return Right2Page;
}());
Right2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-right2',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\right2\right2.html"*/'<ion-header padding class="quiz-title">\n\n\n\n    <ion-title>Quiz</ion-title>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyOk.png" />\n\n    <ion-card-content>\n\n\n\n      <p>Super Tim!</p>\n\n      <p>Deine Antwort war korrekt - weiter so!</p>\n\n      <p>Du hast ein Punkte erzielt.</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="onClick()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n\n\n  <button (click)="onClick()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\right2\right2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Right2Page);

//# sourceMappingURL=right2.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Right3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question4_question4__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Right3Page = (function () {
    function Right3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Right3Page.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question4_question4__["a" /* Question4Page */]);
    };
    return Right3Page;
}());
Right3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-right3',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\right3\right3.html"*/'<ion-header padding class="quiz-title">\n\n\n\n    <ion-title>Quiz</ion-title>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyOk.png" />\n\n    <ion-card-content>\n\n\n\n      <p>Super Tim!</p>\n\n      <p>Deine Antwort war korrekt - weiter so!</p>\n\n      <p>Du hast ein Punkte erzielt.</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="onClick()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n\n\n  <button (click)="onClick()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\right3\right3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Right3Page);

//# sourceMappingURL=right3.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Right4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Right4Page = (function () {
    function Right4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Right4Page.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return Right4Page;
}());
Right4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-right4',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\right4\right4.html"*/'<ion-header padding class="quiz-title">\n\n\n\n    <ion-title>Quiz</ion-title>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllySuper.png" />\n\n    <ion-card-content>\n\n\n\n      <p>Super Tim!</p>\n\n      <p>Deine Antwort war korrekt - weiter so!</p>\n\n      <p>Du hast ein Punkte erzielt.</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="onClick()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n\n\n  <button (click)="onClick()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\right4\right4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], Right4Page);

//# sourceMappingURL=right4.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return False4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var False4Page = (function () {
    function False4Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    False4Page.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return False4Page;
}());
False4Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-false4',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\false4\false4.html"*/'<ion-header padding class="quiz-title">\n\n\n\n  <ion-title>Quiz</ion-title>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyTraurig.png" />\n\n    <ion-card-content>\n\n\n\n      <p>Leider ist diese Antwort falsch!</p>\n\n      <p>Gräser ist die häufigste Pollenalergie.</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="onClick()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n\n\n  <button (click)="onClick()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\false4\false4.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], False4Page);

//# sourceMappingURL=false4.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return False3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question4_question4__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var False3Page = (function () {
    function False3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    False3Page.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question4_question4__["a" /* Question4Page */]);
    };
    return False3Page;
}());
False3Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-false3',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\false3\false3.html"*/'<ion-header padding class="quiz-title">\n\n\n\n  <ion-title>Quiz</ion-title>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyOh.png" />\n\n    <ion-card-content>\n\n\n\n      <p>Leider ist diese Antwort falsch!</p>\n\n      <p>Tanne, Weide, Birke und Eiche blühen in dieser Jahreszeit.</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="onClick()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n\n\n  <button (click)="onClick()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\false3\false3.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], False3Page);

//# sourceMappingURL=false3.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return False2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question3_question3__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var False2Page = (function () {
    function False2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    False2Page.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question3_question3__["a" /* Question3Page */]);
    };
    return False2Page;
}());
False2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-false2',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\false2\false2.html"*/'<ion-header padding class="quiz-title">\n\n\n\n  <ion-title>Quiz</ion-title>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllySauer.png" />\n\n    <ion-card-content>\n\n\n\n      <p>Leider ist diese Antwort falsch!</p>\n\n      <p>Heuschnupen ist keine ansteckende Krankheit.</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="onClick()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n\n\n  <button (click)="onClick()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\false2\false2.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], False2Page);

//# sourceMappingURL=false2.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return False1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__question2_question2__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var False1Page = (function () {
    function False1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    False1Page.prototype.onClick = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__question2_question2__["a" /* Question2Page */]);
    };
    return False1Page;
}());
False1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-false1',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\game\false1\false1.html"*/'<ion-header padding class="quiz-title">\n\n\n\n  <ion-title>Quiz</ion-title>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-card>\n\n    <img class="full-image" src="assets/img/AllyTraurig.png" />\n\n    <ion-card-content>\n\n\n\n      <p>Leider ist diese Antwort falsch!</p>\n\n      <p>Die Richtige Antwort ist: Antihistaminika!</p>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <button (click)="onClick()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n\n\n  <button (click)="onClick()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\game\false1\false1.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], False1Page);

//# sourceMappingURL=false1.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinwall_pinwall__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__impressum_impressum__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__pinwall_pinwall__["a" /* PinwallPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__impressum_impressum__["a" /* ImpressumPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Pinnwand" tabIcon="clipboard"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Profil" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Einstellungen" tabIcon="settings"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinwallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pinwall_articleOne_articleOne__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pinwall_articleTwo_articleTwo__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PinwallPage = (function () {
    function PinwallPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PinwallPage.prototype.pushArticleOnePage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pinwall_articleOne_articleOne__["a" /* ArticleOnePage */]);
    };
    PinwallPage.prototype.pushArticleTwoPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pinwall_articleTwo_articleTwo__["a" /* ArticleTwoPage */]);
    };
    return PinwallPage;
}());
PinwallPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pinwall',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\pinwall\pinwall.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Pinnwand</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n  <ion-item>\n\n    <ion-avatar item-start>\n\n      <img src="assets/img/aha.jpg">\n\n    </ion-avatar>\n\n    <h6>aha! Allergiezentrum Schweiz</h6>\n\n  </ion-item>\n\n  <img src="assets/img/Artikel1.jpg">\n\n  <ion-card-content>\n\n    <h2>Allergiekarriere</h2>\n\n    <p>Folgt beim Säugling oder Kleinkind eine Allergieform auf die nächste,\n\n      spricht man von «Allergiekarriere». Die «Allergiekarriere» umschreibt\n\n      den Umstand, dass allergisch\n\n      veranlagte Kinder mit zunehmendem Alter aus einer allergischen\n\n      Erkrankung «herauswachsen», danach aber an einer nächsten\n\n      Allergieform zu leiden beginnen. Auf die Neurodermitis folgt\n\n      das Asthma bronchiale und später der Heuschnupfen.</p>\n\n    <button (click)="pushArticleOnePage()">Mehr lesen</button>\n\n  </ion-card-content>\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-left small>\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n        <div>12 Gefällt mir</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button icon-left small>\n\n        <ion-icon name="text"></ion-icon>\n\n        <div>4 Kommentare</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col center text-center>\n\n      <ion-note>\n\n        vor 2 Stunden\n\n      </ion-note>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-card>\n\n\n\n<ion-card>\n\n<ion-item>\n\n  <ion-avatar item-start>\n\n    <img src="assets/img/aha.jpg">\n\n  </ion-avatar>\n\n  <h6>aha! Allergiezentrum Schweiz</h6>\n\n</ion-item>\n\n<img src="assets/img/Artikel2.jpg">\n\n<ion-card-content>\n\n  <h2>Allergie-Typen</h2>\n\n  <p>Treten die Symptome innerhalb von Minuten auf oder mit zeitlicher Verzögerung?\n\n    Fachleute unterscheiden hier nach Allergie-Typen. Die verschiedenen Allergene lösen\n\n    vier Mechanismen und Symptome aus. Die Reaktionen können unmittelbar oder mit einer zeitlichen Verzögerung auftreten.</p>\n\n  <button (click)="pushArticleTwoPage()">Mehr lesen</button>\n\n</ion-card-content>\n\n<ion-row>\n\n  <ion-col>\n\n    <button ion-button icon-left small>\n\n      <ion-icon name="thumbs-up"></ion-icon>\n\n      <div>1 Gefällt mir</div>\n\n    </button>\n\n  </ion-col>\n\n  <ion-col>\n\n    <button ion-button icon-left small>\n\n      <ion-icon name="text"></ion-icon>\n\n      <div>1 Kommentare</div>\n\n    </button>\n\n  </ion-col>\n\n  <ion-col center text-center>\n\n    <ion-note>\n\n      vor 10 Stunden\n\n    </ion-note>\n\n  </ion-col>\n\n</ion-row>\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\pinwall\pinwall.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PinwallPage);

//# sourceMappingURL=pinwall.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleOnePage; });
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


var ArticleOnePage = (function () {
    function ArticleOnePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ArticleOnePage;
}());
ArticleOnePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-articleOne',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\pinwall\articleOne\articleOne.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-avatar item-start>\n\n    <img src="assets/img/aha.jpg" width="10%" height="10%">\n\n  </ion-avatar>\n\n  <p>aha! Allergiezentrum Schweiz</p>\n\n  <h3>Allergiekarriere</h3>\n\n  <p #Abschnitt>Folgt beim Säugling oder Kleinkind eine Allergieform auf die nächste, spricht man von «Allergiekarriere».<p>\n\n  <img src="assets/img/Artikel1.jpg">\n\n  <p #Abschnitt>Die «Allergiekarriere» umschreibt den Umstand, dass allergisch veranlagte Kinder mit zunehmendem Alter aus\n\n    einer allergischen Erkrankung «herauswachsen», danach aber an einer nächsten Allergieform\n\n    zu leiden beginnen. Auf die Neurodermitis folgt das Asthma bronchiale und später der Heuschnupfen.</p>\n\n    <p #Abschnitt>Wann spricht man von einer Allergiekarriere?</p>\n\n    <p>In den meisten Fällen beginnen allergische Krankheiten bereits im Säuglings- und Kindesalter und verlaufen\n\n      nach einem charakteristischen Muster: Auf die Neurodermitis (oder atopische Dermatitis) folgt das\n\n      Asthma bronchiale und später der Heuschnupfen. Die Abfolge dieser drei atopischen Erkrankungen während der\n\n      Kindheit wird als «Allergiekarriere» bezeichnet. Sie umschreibt den Umstand, dass allergisch veranlagte\n\n      Kinder mit zunehmendem Alter aus einer allergischen Erkrankung «herauswachsen», danach aber an einer nächsten\n\n      Allergieform zu leiden beginnen. Es können alle drei oder nur einzelne dieser Krankheiten auftreten.</p>\n\n    <p #Abschnitt>Zeitlicher Ablauf</p>\n\n    <p>Am Anfang, also bereits im Säuglingsalter, steht in den meisten Fällen die Neurodermitis im Vordergrund.\n\n      Bis zum Alter von drei Jahren sind 10–15% aller Kleinkinder davon betroffen. Bei vielen kommt es im Verlaufe\n\n       der Monate und Jahre zu einer spontanen Besserung oder die juckenden Ekzeme verschwinden ganz. Rund die\n\n       Hälfte der betroffenen Kinder allerdings entwickelt in der Folge ein Asthma bronchiale, nicht selten mit\n\n       Symptomen bereits ab dem zweitem Lebensjahr. Ab Schulalter kommen in vielen Fällen Pollenallergien hinzu.</p>\n\n    <p #Abschnitt>Vom Nahrungsmittel zum Inhalationsallergen</p>\n\n    <p>Die Neurodermitis beim Säugling steht in aller Regel in Verbindung mit Nahrungsmitteln. Es gilt, zwischen\n\n      Sensibilisierung und Allergie zu unterscheiden. Ein Säugling mit genetischer Veranlagung kann bereits sehr\n\n      früh Antikörper gegen Nahrungsmittel entwickeln, meist gegen Hühnerei und Milch. In dieser Sensibilisierungs-Phase\n\n      muss es nicht unbedingt zu Allergie-Symptomen kommen. Sensibilisierungen auf Nahrungsmittel im Säuglingsalter\n\n      können aber die Neurodermitis beeinflussen und erhöhen erwiesenermassen das Risiko für eine spätere Sensibilisierung\n\n      auf Inhalationsallergene (z.B. Milben und Tierhaare) und die Entwicklung auf Asthma bronchiale. So bilden 45% der auf\n\n      Hühnereiweiss sensibilisierten Säuglinge später auch Antikörper gegen Milben. 40% unter ihnen leiden im Alter von fünf\n\n      Jahren an Asthma.</p>\n\n    <p #Abschnitt>Risiko und Früherkennung</p>\n\n    <p>Die Neigung, bereits im Säuglings- und Kleinkindesalter an Allergien zu erkranken, hängt direkt mit der\n\n      genetischen Veranlagung, mit dem Vorkommen solcher Krankheiten bei Eltern und Geschwistern zusammen. Ist ein\n\n      Elternteil von einer Allergie betroffen, liegt das Risiko für eine Allergieentwicklung bei rund 30%. Haben sowohl\n\n      Mutter wie Vater Allergiekrankheiten, erhöht sich das Risiko auf 50–70%. Das Erfragen der Familiengeschichte\n\n      hinsichtlich Allergien ist zurzeit die einzige Möglichkeit, um Risikokinder frühzeitig zu erfassen und um\n\n      präventive Massnahmen gezielt einzuleiten. Leider wird bei vielen Kindern die atopische Veranlagung erst erkannt,\n\n      wenn die Allergiekarriere bereits begonnen hat: nach Auftreten der ersten Ekzeme oder wenn eine Sensibilisierung\n\n      nachgewiesen worden ist. Dieser Nachweis erfolgt entweder durch Hauttests oder durch die Bestimmung spezifischer\n\n      Antikörper im Blut. Diese Abklärungen können schon sehr früh im Säuglings- und Kleinkindesalter vorgenommen werden.\n\n      Erschwerend für die Früherkennung ist, dass bei zwei Dritteln aller Kinder keine familiäre Vorbelastung besteht,\n\n      15% unter ihnen im Kleinkindesalter aber trotzdem an Allergien erkranken.</p>\n\n    <p #Abschnitt>Wie kann die Allergiekarriere beeinflusst werden?</p>\n\n    <p>Um das Risiko einer Sensibilisierungen zu senken, gibt es ein paar allgemein gültige Empfehlungen:\n\n      Stillen während den ersten vier bis sechs Monaten, eine ausgewogene Ernährung und der Rauchverzicht während\n\n      wie auch nach der Schwangerschaft. Einfache und kostengünstige Massnahmen zur Hausstaubmilbenreduktion im\n\n      Schlafbereich können auch einen positiven Einfluss haben. Bei Säuglingen mit atopischer Veranlagung wird zudem\n\n      empfohlen, bei der Ernährung fachlichen Rat einzuholen. Das Entfernen eines Haustieres aus dem Haushalt von Familien\n\n      mit Risikokindern ist nach heutiger Lehrmeinung nicht mehr oberstes Gebot. Anders die Situation, wenn das Kind\n\n      eine Allergie auf Tierhaare hat. Allergenreduktion und andere präventive Massnahmen sollen dazu beitragen,\n\n      dass bei Kindern mit atopischer Veranlagung Sensibilisierungen vermieden werden. Ist eine solche bereits\n\n      festgestellt worden oder sind erste Krankheitssymptome aufgetreten, müssen präventive und therapeutische Massnahmen\n\n      dahin zielen, das Spektrum weiterer Sensibilisierungen einzugrenzen und das Auftreten weiterer Allergien zu verhindern.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\pinwall\articleOne\articleOne.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ArticleOnePage);

//# sourceMappingURL=articleOne.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleTwoPage; });
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


var ArticleTwoPage = (function () {
    function ArticleTwoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ArticleTwoPage;
}());
ArticleTwoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-articleTwo',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\pinwall\articleTwo\articleTwo.html"*/'<ion-header>\n\n  <ion-navbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-avatar item-start>\n\n    <img src="assets/img/aha.jpg" width="10%" height="10%">\n\n  </ion-avatar>\n\n  <p>aha! Allergiezentrum Schweiz</p>\n\n  <h3>Allergie-Typen</h3>\n\n  <p #Abschnitt>Treten die Symptome innerhalb von Minuten auf oder mit zeitlicher Verzögerung? Fachleute unterscheiden hier nach Allergie-Typen.<p>\n\n  <img src="assets/img/Artikel2.jpg">\n\n  <p #Abschnitt>Die verschiedenen Allergene lösen vier Mechanismen und Symptome aus. Die Reaktionen können\n\n    unmittelbar oder mit einer zeitlichen Verzögerung auftreten.</p>\n\n    <p #Abschnitt>Soforttyp-Allergie (Typ I):</p>\n\n    <p>Hier treten die Symptome sofort oder innerhalb weniger Minuten auf. Dies in der Regel an Haut oder Schleimhäuten.\n\n      Die Soforttyp-Allergie ist die häufigste Allergieform, wie etwa bei der Pollenallergie,\n\n      Nahrungsmittelallergie, Tierallergie und Insektengiftallergie.</p>\n\n    <p #Abschnitt>Typ II-Allergie:</p>\n\n    <p>Sie ist eine sehr seltene Allergieform. Es können Zellen des Blutes geschädigt werden.\n\n      Auslöser der Typ II-Allergie können beispielsweise Medikamente sein.</p>\n\n    <p #Abschnitt>Typ III-Allergie:</p>\n\n    <p>Sie spielt häufig bei der Medikamentenallergie eine wesentliche Rolle. Antikörper binden sich gegen im Blut gelöste\n\n      körperfremde Stoffe. Es entstehen grössere Zusammenschlüsse, die sich an den Gefässwänden der kleinen Gefässe,\n\n      z. B. an der Haut oder an den Nieren niederschlagen und dort eine Entzündungsreaktion auslösen.</p>\n\n    <p #Abschnitt>Spättyp-Allergien (Typ IV):</p>\n\n    <p>Hier handelt es sich um eine allergische Spätreaktion. Es ist die einzige Allergieform, bei der\n\n      sensibilisierte Abwehrzellen (T-Lymphozyten) direkt gegen Allergene vorgehen. Die Typ IV-Allergene sind meist\n\n      keine grossen Moleküle wie z.b. Eiweisse, sondern eher Metalle oder einfachere Chemikalien.\n\n      Typ IV-Allergien zeigen sich etwa in Form von Kontakt-Ekzemen, z.B. auf Nickel in Modeschmuck oder Duftstoffe in Parfüms.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\pinwall\articleTwo\articleTwo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ArticleTwoPage);

//# sourceMappingURL=articleTwo.js.map

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 405;

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(422);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_advance_directives_QuestionsModal_questions__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HCIService__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_impressum_impressum__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_globalization__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_MidataConnectionService__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_InBrowserBrowser__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_home_home__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_blood_blood__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_blood_pulse_measure_pulse_measure__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_blood_pulseDailyData_pulseDailyData__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_overview_overview__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_community_community__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_introduction_introduction__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_introduction_allergy_allergy__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_introduction_drug_drug__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_introduction_finish_finish__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_introduction_heightweight_heightweight__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_introduction_job_job__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_introduction_remindertime_remindertime__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_introduction_reward_reward__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_introduction_takingdrug_takingdrug__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_newEntry_newEntry__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_newEntry_dateTime_dateTime__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_newEntry_complaints_complaints__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_newEntry_physicalActivity_physicalActivity__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_newEntry_medication_medication__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_newEntry_totalPoints_totalPoints__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_newEntry_additionalReward_additionalReward__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_newEntry_tips_tips__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_pollen_pollen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_game_game__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_game_false1_false1__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_game_false2_false2__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_game_false3_false3__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_game_false4_false4__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_game_right1_right1__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_game_right2_right2__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_game_right3_right3__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_game_right4_right4__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_game_question1_question1__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_game_question2_question2__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_game_question3_question3__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_game_question4_question4__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_pinwall_pinwall__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_pinwall_articleOne_articleOne__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_pinwall_articleTwo_articleTwo__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__ionic_native_splash_screen__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__util__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__services_languageService_languageService__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__services_parametersService_parametersService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__ionic_native_secure_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__ionic_native_in_app_browser__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ionic_native_network__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__angular_common_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__services_ModalService__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_blood_blood__["a" /* BloodPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_blood_pulse_measure_pulse_measure__["a" /* PulseMeasurePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_blood_pulseDailyData_pulseDailyData__["a" /* PulseDailyDataPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_impressum_impressum__["a" /* ImpressumPage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__["a" /* AdvanceDirectivesPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_advance_directives_QuestionsModal_questions__["a" /* QuestionsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_overview_overview__["a" /* OverviewPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_community_community__["a" /* CommunityPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_introduction_introduction__["a" /* IntroductionPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_introduction_allergy_allergy__["a" /* AllergyPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_introduction_drug_drug__["a" /* DrugPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_introduction_finish_finish__["a" /* FinishPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_introduction_heightweight_heightweight__["a" /* HeightWeightPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_introduction_job_job__["a" /* JobPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_introduction_remindertime_remindertime__["a" /* ReminderTimePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_introduction_reward_reward__["a" /* RewardPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_introduction_takingdrug_takingdrug__["a" /* TakingDrugPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_newEntry_newEntry__["a" /* NewEntryPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_newEntry_dateTime_dateTime__["a" /* DateTimePage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_newEntry_complaints_complaints__["a" /* ComplaintsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_newEntry_physicalActivity_physicalActivity__["a" /* PhysicalActivityPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_newEntry_medication_medication__["a" /* MedicationPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_newEntry_totalPoints_totalPoints__["a" /* TotalPointsPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_newEntry_additionalReward_additionalReward__["a" /* AdditionalRewardPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_newEntry_tips_tips__["a" /* TipsPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_pollen_pollen__["a" /* PollenPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_game_game__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_game_false1_false1__["a" /* False1Page */],
            __WEBPACK_IMPORTED_MODULE_47__pages_game_false2_false2__["a" /* False2Page */],
            __WEBPACK_IMPORTED_MODULE_48__pages_game_false3_false3__["a" /* False3Page */],
            __WEBPACK_IMPORTED_MODULE_49__pages_game_false4_false4__["a" /* False4Page */],
            __WEBPACK_IMPORTED_MODULE_54__pages_game_question1_question1__["a" /* Question1Page */],
            __WEBPACK_IMPORTED_MODULE_55__pages_game_question2_question2__["a" /* Question2Page */],
            __WEBPACK_IMPORTED_MODULE_56__pages_game_question3_question3__["a" /* Question3Page */],
            __WEBPACK_IMPORTED_MODULE_57__pages_game_question4_question4__["a" /* Question4Page */],
            __WEBPACK_IMPORTED_MODULE_50__pages_game_right1_right1__["a" /* Right1Page */],
            __WEBPACK_IMPORTED_MODULE_51__pages_game_right2_right2__["a" /* Right2Page */],
            __WEBPACK_IMPORTED_MODULE_52__pages_game_right3_right3__["a" /* Right3Page */],
            __WEBPACK_IMPORTED_MODULE_53__pages_game_right4_right4__["a" /* Right4Page */],
            __WEBPACK_IMPORTED_MODULE_58__pages_pinwall_pinwall__["a" /* PinwallPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_pinwall_articleOne_articleOne__["a" /* ArticleOnePage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_pinwall_articleTwo_articleTwo__["a" /* ArticleTwoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */], {
                backButtonText: 'Zurück',
                monthShortNames: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
            }, {
                links: [
                    { loadChildren: '../pages/advance-directives/advance-directives.module#AdvanceDirectivesPageModule', name: 'AdvanceDirectivesPage', segment: 'advance-directives', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/advance-directives/QuestionsModal/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blood/blood.module#BloodPageModule', name: 'BloodPage', segment: 'blood', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blood/pulse-measure/pulse-measure.module#PulseMeasurePageModule', name: 'PulseMeasurePage', segment: 'pulse-measure', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/blood/pulseDailyData/pulseDailyData.module#PulseDailyDataPageModule', name: 'PulseDailyDataPage', segment: 'pulseDailyData', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/impressum/impressum.module#ImpressumPageModule', name: 'ImpressumPage', segment: 'impressum', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_70__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (__WEBPACK_IMPORTED_MODULE_63__util__["a" /* createTranslateLoader */]),
                    deps: [__WEBPACK_IMPORTED_MODULE_70__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_20__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_blood_blood__["a" /* BloodPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_blood_pulse_measure_pulse_measure__["a" /* PulseMeasurePage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_blood_pulseDailyData_pulseDailyData__["a" /* PulseDailyDataPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_impressum_impressum__["a" /* ImpressumPage */],
            __WEBPACK_IMPORTED_MODULE_66__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__["a" /* AdvanceDirectivesPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_advance_directives_QuestionsModal_questions__["a" /* QuestionsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_overview_overview__["a" /* OverviewPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_community_community__["a" /* CommunityPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_introduction_introduction__["a" /* IntroductionPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_introduction_allergy_allergy__["a" /* AllergyPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_introduction_drug_drug__["a" /* DrugPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_introduction_finish_finish__["a" /* FinishPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_introduction_heightweight_heightweight__["a" /* HeightWeightPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_introduction_job_job__["a" /* JobPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_introduction_remindertime_remindertime__["a" /* ReminderTimePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_introduction_reward_reward__["a" /* RewardPage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_introduction_takingdrug_takingdrug__["a" /* TakingDrugPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_newEntry_newEntry__["a" /* NewEntryPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_newEntry_dateTime_dateTime__["a" /* DateTimePage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_newEntry_complaints_complaints__["a" /* ComplaintsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_newEntry_physicalActivity_physicalActivity__["a" /* PhysicalActivityPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_newEntry_medication_medication__["a" /* MedicationPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_newEntry_totalPoints_totalPoints__["a" /* TotalPointsPage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_newEntry_additionalReward_additionalReward__["a" /* AdditionalRewardPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_newEntry_tips_tips__["a" /* TipsPage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_pollen_pollen__["a" /* PollenPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_game_game__["a" /* GamePage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_game_false1_false1__["a" /* False1Page */],
            __WEBPACK_IMPORTED_MODULE_47__pages_game_false2_false2__["a" /* False2Page */],
            __WEBPACK_IMPORTED_MODULE_48__pages_game_false3_false3__["a" /* False3Page */],
            __WEBPACK_IMPORTED_MODULE_49__pages_game_false4_false4__["a" /* False4Page */],
            __WEBPACK_IMPORTED_MODULE_54__pages_game_question1_question1__["a" /* Question1Page */],
            __WEBPACK_IMPORTED_MODULE_55__pages_game_question2_question2__["a" /* Question2Page */],
            __WEBPACK_IMPORTED_MODULE_56__pages_game_question3_question3__["a" /* Question3Page */],
            __WEBPACK_IMPORTED_MODULE_57__pages_game_question4_question4__["a" /* Question4Page */],
            __WEBPACK_IMPORTED_MODULE_50__pages_game_right1_right1__["a" /* Right1Page */],
            __WEBPACK_IMPORTED_MODULE_51__pages_game_right2_right2__["a" /* Right2Page */],
            __WEBPACK_IMPORTED_MODULE_52__pages_game_right3_right3__["a" /* Right3Page */],
            __WEBPACK_IMPORTED_MODULE_53__pages_game_right4_right4__["a" /* Right4Page */],
            __WEBPACK_IMPORTED_MODULE_58__pages_pinwall_pinwall__["a" /* PinwallPage */],
            __WEBPACK_IMPORTED_MODULE_59__pages_pinwall_articleOne_articleOne__["a" /* ArticleOnePage */],
            __WEBPACK_IMPORTED_MODULE_60__pages_pinwall_articleTwo_articleTwo__["a" /* ArticleTwoPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_61__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_62__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_64__services_languageService_languageService__["a" /* LanguageService */],
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_10_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_65__services_parametersService_parametersService__["a" /* ParametersService */],
            __WEBPACK_IMPORTED_MODULE_67__ionic_native_secure_storage__["a" /* SecureStorage */],
            __WEBPACK_IMPORTED_MODULE_69__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_68__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_14__services_InBrowserBrowser__["a" /* InBrowserBrowser */],
            __WEBPACK_IMPORTED_MODULE_13__services_MidataConnectionService__["a" /* MidataConnectionService */],
            __WEBPACK_IMPORTED_MODULE_71__services_ModalService__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_2__services_HCIService__["a" /* HCIService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = (function () {
    function Question(_label, _type, _answers) {
        this._label = _label;
        this._type = _type;
        this._answers = _answers;
        this._answerValue = [];
        this._subAnswerValue = [];
        this._subSubAnswerValue = [];
    }
    Object.defineProperty(Question.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answers", {
        get: function () {
            return this._answers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "answerValue", {
        get: function () {
            return this._answerValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "subAnswerValue", {
        get: function () {
            return this._subAnswerValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "subSubAnswerValue", {
        get: function () {
            return this._subSubAnswerValue;
        },
        enumerable: true,
        configurable: true
    });
    Question.prototype.addAnswerToAnswers = function (answer) {
        this._answers.push(answer);
    };
    Question.prototype.deleteAnswers = function () {
        this._answerValue = [];
    };
    Question.prototype.addAnswerValue = function (answer) {
        this._answerValue[answer.name] = answer;
    };
    Question.prototype.deleteAnswerValue = function (answer) {
        var index = this._answerValue.indexOf(answer);
        if (index !== -1) {
            this._answerValue.splice(index, 1);
        }
    };
    Question.prototype.addSubAnswerValue = function (answer) {
        this._subAnswerValue[answer.name] = answer;
    };
    Question.prototype.deleteSubAnswerValue = function (answer) {
        var index = this._subAnswerValue.indexOf(answer);
        if (index !== -1) {
            this._subAnswerValue.splice(index, 1);
        }
    };
    Question.prototype.addSubSubAnswerValue = function (answer) {
        this._subSubAnswerValue[answer.name] = answer;
    };
    Question.prototype.deleteSubSubAnswerValue = function (answer) {
        var index = this._subSubAnswerValue.indexOf(answer);
        if (index !== -1) {
            this._subSubAnswerValue.splice(index, 1);
        }
    };
    return Question;
}());

//# sourceMappingURL=Question.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = (function () {
    function Group(_groupTitle, _groupDescription, _questions) {
        this._groupTitle = _groupTitle;
        this._groupDescription = _groupDescription;
        this._questions = _questions;
    }
    Object.defineProperty(Group.prototype, "groupTitle", {
        get: function () {
            return this._groupTitle;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "groupDescription", {
        get: function () {
            return this._groupDescription;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "questions", {
        get: function () {
            return this._questions;
        },
        enumerable: true,
        configurable: true
    });
    return Group;
}());

//# sourceMappingURL=Group.js.map

/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 198,
	"./af.js": 198,
	"./ar": 199,
	"./ar-dz": 200,
	"./ar-dz.js": 200,
	"./ar-kw": 201,
	"./ar-kw.js": 201,
	"./ar-ly": 202,
	"./ar-ly.js": 202,
	"./ar-ma": 203,
	"./ar-ma.js": 203,
	"./ar-sa": 204,
	"./ar-sa.js": 204,
	"./ar-tn": 205,
	"./ar-tn.js": 205,
	"./ar.js": 199,
	"./az": 206,
	"./az.js": 206,
	"./be": 207,
	"./be.js": 207,
	"./bg": 208,
	"./bg.js": 208,
	"./bn": 209,
	"./bn.js": 209,
	"./bo": 210,
	"./bo.js": 210,
	"./br": 211,
	"./br.js": 211,
	"./bs": 212,
	"./bs.js": 212,
	"./ca": 213,
	"./ca.js": 213,
	"./cs": 214,
	"./cs.js": 214,
	"./cv": 215,
	"./cv.js": 215,
	"./cy": 216,
	"./cy.js": 216,
	"./da": 217,
	"./da.js": 217,
	"./de": 218,
	"./de-at": 219,
	"./de-at.js": 219,
	"./de-ch": 220,
	"./de-ch.js": 220,
	"./de.js": 218,
	"./dv": 221,
	"./dv.js": 221,
	"./el": 222,
	"./el.js": 222,
	"./en-au": 223,
	"./en-au.js": 223,
	"./en-ca": 224,
	"./en-ca.js": 224,
	"./en-gb": 225,
	"./en-gb.js": 225,
	"./en-ie": 226,
	"./en-ie.js": 226,
	"./en-nz": 227,
	"./en-nz.js": 227,
	"./eo": 228,
	"./eo.js": 228,
	"./es": 229,
	"./es-do": 230,
	"./es-do.js": 230,
	"./es.js": 229,
	"./et": 231,
	"./et.js": 231,
	"./eu": 232,
	"./eu.js": 232,
	"./fa": 233,
	"./fa.js": 233,
	"./fi": 234,
	"./fi.js": 234,
	"./fo": 235,
	"./fo.js": 235,
	"./fr": 236,
	"./fr-ca": 237,
	"./fr-ca.js": 237,
	"./fr-ch": 238,
	"./fr-ch.js": 238,
	"./fr.js": 236,
	"./fy": 239,
	"./fy.js": 239,
	"./gd": 240,
	"./gd.js": 240,
	"./gl": 241,
	"./gl.js": 241,
	"./gom-latn": 242,
	"./gom-latn.js": 242,
	"./he": 243,
	"./he.js": 243,
	"./hi": 244,
	"./hi.js": 244,
	"./hr": 245,
	"./hr.js": 245,
	"./hu": 246,
	"./hu.js": 246,
	"./hy-am": 247,
	"./hy-am.js": 247,
	"./id": 248,
	"./id.js": 248,
	"./is": 249,
	"./is.js": 249,
	"./it": 250,
	"./it.js": 250,
	"./ja": 251,
	"./ja.js": 251,
	"./jv": 252,
	"./jv.js": 252,
	"./ka": 253,
	"./ka.js": 253,
	"./kk": 254,
	"./kk.js": 254,
	"./km": 255,
	"./km.js": 255,
	"./kn": 256,
	"./kn.js": 256,
	"./ko": 257,
	"./ko.js": 257,
	"./ky": 258,
	"./ky.js": 258,
	"./lb": 259,
	"./lb.js": 259,
	"./lo": 260,
	"./lo.js": 260,
	"./lt": 261,
	"./lt.js": 261,
	"./lv": 262,
	"./lv.js": 262,
	"./me": 263,
	"./me.js": 263,
	"./mi": 264,
	"./mi.js": 264,
	"./mk": 265,
	"./mk.js": 265,
	"./ml": 266,
	"./ml.js": 266,
	"./mr": 267,
	"./mr.js": 267,
	"./ms": 268,
	"./ms-my": 269,
	"./ms-my.js": 269,
	"./ms.js": 268,
	"./my": 270,
	"./my.js": 270,
	"./nb": 271,
	"./nb.js": 271,
	"./ne": 272,
	"./ne.js": 272,
	"./nl": 273,
	"./nl-be": 274,
	"./nl-be.js": 274,
	"./nl.js": 273,
	"./nn": 275,
	"./nn.js": 275,
	"./pa-in": 276,
	"./pa-in.js": 276,
	"./pl": 277,
	"./pl.js": 277,
	"./pt": 278,
	"./pt-br": 279,
	"./pt-br.js": 279,
	"./pt.js": 278,
	"./ro": 280,
	"./ro.js": 280,
	"./ru": 281,
	"./ru.js": 281,
	"./sd": 282,
	"./sd.js": 282,
	"./se": 283,
	"./se.js": 283,
	"./si": 284,
	"./si.js": 284,
	"./sk": 285,
	"./sk.js": 285,
	"./sl": 286,
	"./sl.js": 286,
	"./sq": 287,
	"./sq.js": 287,
	"./sr": 288,
	"./sr-cyrl": 289,
	"./sr-cyrl.js": 289,
	"./sr.js": 288,
	"./ss": 290,
	"./ss.js": 290,
	"./sv": 291,
	"./sv.js": 291,
	"./sw": 292,
	"./sw.js": 292,
	"./ta": 293,
	"./ta.js": 293,
	"./te": 294,
	"./te.js": 294,
	"./tet": 295,
	"./tet.js": 295,
	"./th": 296,
	"./th.js": 296,
	"./tl-ph": 297,
	"./tl-ph.js": 297,
	"./tlh": 298,
	"./tlh.js": 298,
	"./tr": 299,
	"./tr.js": 299,
	"./tzl": 300,
	"./tzl.js": 300,
	"./tzm": 301,
	"./tzm-latn": 302,
	"./tzm-latn.js": 302,
	"./tzm.js": 301,
	"./uk": 303,
	"./uk.js": 303,
	"./ur": 304,
	"./ur.js": 304,
	"./uz": 305,
	"./uz-latn": 306,
	"./uz-latn.js": 306,
	"./uz.js": 305,
	"./vi": 307,
	"./vi.js": 307,
	"./x-pseudo": 308,
	"./x-pseudo.js": 308,
	"./yo": 309,
	"./yo.js": 309,
	"./zh-cn": 310,
	"./zh-cn.js": 310,
	"./zh-hk": 311,
	"./zh-hk.js": 311,
	"./zh-tw": 312,
	"./zh-tw.js": 312
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 447;

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PulseValidator; });
var PulseValidator = (function () {
    function PulseValidator() {
    }
    PulseValidator.isValid = function (value) {
        if (isNaN(value) || value === '') {
            return {
                "isNotANumber": true
            };
        }
        if (value % 1 !== 0) {
            return {
                "isAWholeNumber": true
            };
        }
        if (value < 40 && value !== '') {
            return {
                "isInferiorTo40": true
            };
        }
        if (value > 220 && value !== '') {
            return {
                "isSuperiorTo220": true
            };
        }
        return null;
    };
    return PulseValidator;
}());

//# sourceMappingURL=pulseValidator.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidataConnectionWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Midata__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Midata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Midata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MidataConnectionWrapper = (function () {
    function MidataConnectionWrapper(midata, storage, secureStorage, platform, events, network) {
        this.midata = midata;
        this.storage = storage;
        this.secureStorage = secureStorage;
        this.platform = platform;
        this.events = events;
        this.network = network;
    }
    MidataConnectionWrapper.prototype.getConnection = function () {
        return this.midata;
    };
    MidataConnectionWrapper.prototype.setConnection = function (connection) {
        this.midata = connection;
    };
    MidataConnectionWrapper.prototype.authenticate = function (checked) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.midata.authenticate().then(function (msg) {
                if (checked) {
                    _this.setSecureStorageToken(msg.refresh_token).then(function (msg) {
                        resolve(msg);
                    });
                }
                else {
                    resolve(msg);
                }
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    MidataConnectionWrapper.prototype.refresh = function () {
        var _this = this;
        var refreshToken;
        return this.getSecureStorageToken()
            .then(function (rT) {
            if (rT === undefined || rT == '' || rT == null) {
                return Promise.reject('NO REFRESH TOKEN AVAILABLE');
            }
            else {
                refreshToken = rT;
            }
        })
            .then(function () {
            return _this.midata.refresh(refreshToken);
        })
            .then(function (msg) {
            return _this.setSecureStorageToken(msg.refresh_token);
        })
            .then(function (msg) {
            return Promise.resolve(msg);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    MidataConnectionWrapper.prototype.setSecureStorageToken = function (refreshToken) {
        return this.secureStorage.create('MIDATA_CONNECTION_SERVICE')
            .then(function (storage) {
            return storage.set('refreshToken', refreshToken);
        })
            .then(function (data) {
            return Promise.resolve(data);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    };
    MidataConnectionWrapper.prototype.getSecureStorageToken = function () {
        return this.secureStorage.create('MIDATA_CONNECTION_SERVICE')
            .then(function (storage) {
            return storage.get('refreshToken');
        })
            .then(function (data) {
            return Promise.resolve(data);
        }).catch(function (error) {
            return Promise.reject(error);
        });
    };
    MidataConnectionWrapper.prototype.logout = function () {
        var _this = this;
        this.getConnection().logout();
        return new Promise(function (resolve, reject) {
            _this.secureStorage.create('MIDATA_CONNECTION_SERVICE')
                .then(function (storage) {
                storage.remove('refreshToken').then(function (data) { return resolve(data); }, function (error) { return reject(error); });
            }).catch(function (err) {
                _this.storage.remove('refreshToken').then(function (data) { return resolve(data); }, function (error) { return reject(error); });
            });
        });
    };
    MidataConnectionWrapper.prototype.syncSecureStorage = function (checked) {
        if (checked && this.getConnection().refreshToken) {
            return this.setSecureStorageToken(this.getConnection().refreshToken)
                .then(function () {
                return Promise.resolve();
            })
                .catch(function (error) {
                return Promise.reject(error);
            });
        }
        else {
            return Promise.reject("REQUIREMENTS FOR SYNCING NOT MET");
        }
    };
    return MidataConnectionWrapper;
}());
MidataConnectionWrapper = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_Midata__["Midata"],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__["a" /* SecureStorage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
], MidataConnectionWrapper);

//# sourceMappingURL=MidataConnectionWrapper.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InBrowserBrowser; });
/* unused harmony export InBrowserBrowserObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InBrowserBrowser = (function () {
    /**
     * Service to manage the alert this.popups
     */
    function InBrowserBrowser() {
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    InBrowserBrowser.prototype.create = function (url, target, options) {
        return new InBrowserBrowserObject(url, target, options);
    };
    return InBrowserBrowser;
}());
InBrowserBrowser = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    /**
     * Service to manage the alert this.popups
     */
], InBrowserBrowser);

var InBrowserBrowserObject = (function () {
    function InBrowserBrowserObject(url, target, options) {
        this._events = {};
        if (options && typeof options !== 'string') {
            options = Object.keys(options).map(function (key) { return key + "=" + options[key]; }).join(',');
        }
        this._open(url, target, options.toString());
    }
    InBrowserBrowserObject.prototype._open = function (url, target, options) {
        var me = this;
        if (target === "_self" || !target) {
            window.location.assign(url);
        }
        else if (target === "_system") {
            window.open(url, "_blank");
        }
        else {
            // "_blank" or anything else
            if (!this.browserWrap) {
                this.browserWrap = document.createElement("div");
                this.browserWrap.style.position = "absolute";
                this.browserWrap.style.top = "0";
                this.browserWrap.style.left = "0";
                this.browserWrap.style.boxSizing = "border-box";
                this.browserWrap.style.borderWidth = "40px";
                this.browserWrap.style.width = "100vw";
                this.browserWrap.style.height = "100vh";
                this.browserWrap.style.borderStyle = "solid";
                this.browserWrap.style.borderColor = "rgba(0,0,0,0.25)";
                this.browserWrap.onclick = function () {
                    setTimeout(function () {
                        this.close();
                    }, 0);
                };
                document.body.appendChild(this.browserWrap);
            }
            if (options.indexOf("hidden=yes") !== -1) {
                this.browserWrap.style.display = "none";
            }
            this.popup = document.createElement("iframe");
            this.popup.style.borderWidth = "0px";
            this.popup.style.width = "100%";
            this.browserWrap.appendChild(this.popup);
            if (options.indexOf("location=yes") !== -1 || options.indexOf("location") === -1) {
                this.popup.style.height = "calc(100% - 60px)";
                this.popup.style.marginBottom = "-4px";
                var navigationButtonsDiv = document.createElement("div");
                navigationButtonsDiv.style.height = "60px";
                navigationButtonsDiv.style.backgroundColor = "#404040";
                navigationButtonsDiv.style.zIndex = "999";
                navigationButtonsDiv.onclick = function (e) {
                    e.cancelBubble = true;
                };
                var navigationButtonsDivInner = document.createElement("div");
                navigationButtonsDivInner.style.paddingTop = "10px";
                navigationButtonsDivInner.style.height = "50px";
                navigationButtonsDivInner.style.width = "160px";
                navigationButtonsDivInner.style.margin = "0 auto";
                navigationButtonsDivInner.style.backgroundColor = "#404040";
                navigationButtonsDivInner.style.zIndex = "999";
                navigationButtonsDivInner.onclick = function (e) {
                    e.cancelBubble = true;
                };
                var backButton = document.createElement("button");
                backButton.style.width = "40px";
                backButton.style.height = "40px";
                backButton.style.borderRadius = "40px";
                backButton.innerHTML = "←";
                backButton.addEventListener("click", function (e) {
                    if (me.popup.canGoBack)
                        me.popup.goBack();
                });
                var forwardButton = document.createElement("button");
                forwardButton.style.marginLeft = "20px";
                forwardButton.style.width = "40px";
                forwardButton.style.height = "40px";
                forwardButton.style.borderRadius = "40px";
                forwardButton.innerHTML = "→";
                forwardButton.addEventListener("click", function (e) {
                    if (me.popup.canGoForward)
                        me.popup.goForward();
                });
                var closeButton = document.createElement("button");
                closeButton.style.marginLeft = "20px";
                closeButton.style.width = "40px";
                closeButton.style.height = "40px";
                closeButton.style.borderRadius = "40px";
                closeButton.innerHTML = "✖";
                closeButton.addEventListener("click", function (e) {
                    setTimeout(function () {
                        this.close();
                    }, 0);
                });
                // iframe navigation is not yet supported
                backButton.disabled = true;
                forwardButton.disabled = true;
                navigationButtonsDivInner.appendChild(backButton);
                navigationButtonsDivInner.appendChild(forwardButton);
                navigationButtonsDivInner.appendChild(closeButton);
                navigationButtonsDiv.appendChild(navigationButtonsDivInner);
                this.browserWrap.appendChild(navigationButtonsDiv);
            }
            else {
                this.popup.style.height = "100%";
            }
            // start listening for navigation events
            var onError = function () {
                if (me.popup)
                    me._handleEvent("loaderror", this.contentWindow.location.href);
            };
            this.popup.addEventListener("load", function () {
                if (me.popup)
                    me._handleEvent("loadstart", this.contentWindow.location.href);
            });
            this.popup.addEventListener("load", function () {
                if (me.popup)
                    me._handleEvent("loadstop", this.contentWindow.location.href);
            });
            this.popup.addEventListener("error", onError);
            this.popup.addEventListener("abort", onError);
            this.popup.src = url;
        }
    };
    InBrowserBrowserObject.prototype._handleEvent = function (name, url, code, message) {
        this._getEvent(name).emit({ type: name, url: url, code: code, message: message });
    };
    InBrowserBrowserObject.prototype._getEvent = function (name) {
        var event = this._events[name];
        if (event) {
            return event;
        }
        event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._events[name] = event;
        return event;
    };
    InBrowserBrowserObject.prototype._addEventListener = function (name, callback) {
        this._getEvent(name).subscribe(callback);
    };
    InBrowserBrowserObject.prototype._removeEventListener = function (name, callback) {
        return;
    };
    /**
 * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
 * if the InAppBrowser was already visible.
 */
    InBrowserBrowserObject.prototype.show = function () {
        if (this.browserWrap) {
            this.browserWrap.style.display = "block";
        }
    };
    /**
     * Closes the InAppBrowser window.
     */
    InBrowserBrowserObject.prototype.close = function () {
        if (this.browserWrap) {
            this.browserWrap.parentNode.removeChild(this.browserWrap);
            this.browserWrap = null;
            this.popup = null;
        }
    };
    /**
     * Hides an InAppBrowser window that is currently shown. Calling this has no effect
     * if the InAppBrowser was already hidden.
     */
    InBrowserBrowserObject.prototype.hide = function () { };
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    InBrowserBrowserObject.prototype.executeScript = function (script) { return; };
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    InBrowserBrowserObject.prototype.insertCSS = function (css) { return; };
    /**
     * A method that allows you to listen to events happening in the browser.
     * @param event {string} Name of the event
     * @returns {Observable<InBrowserBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    InBrowserBrowserObject.prototype.on = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this._addEventListener(event, observer.next.bind(observer));
            return function () { return _this._removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    return InBrowserBrowserObject;
}());

//# sourceMappingURL=InBrowserBrowser.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEIGHT; });
/* unused harmony export STEPS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MEDIA; });
var HEIGHT = {
    system: 'http://loinc.org',
    code: "8302-2",
    get toString() {
        return this.system + '|' + this.code;
    }
};
var STEPS = {
    system: 'http://loinc.org',
    code: "41950-7",
    get toString() {
        return this.system + '|' + this.code;
    }
};
var MEDIA = {
    system: "http://loinc.org",
    code: "72170-4",
    get toString() {
        return this.system + '|' + this.code;
    }
};
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_impressum_impressum__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_blood_blood__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_MidataConnectionService__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var MyApp = (function () {
    function MyApp(platform, modalCtrl, statusBar, splashScreen, midataConnectionService, network, loadingCtrl, languageService, parametersService, translate) {
        var _this = this;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.midataConnectionService = midataConnectionService;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.languageService = languageService;
        this.parametersService = parametersService;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */];
        this.profilePage = [];
        this.translate.stream(['BLOOD.TITLE', 'IMPRESSUM.TITLE']).subscribe(function (value) {
            _this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */], icon: 'home' },
                { title: value['BLOOD.TITLE'], component: __WEBPACK_IMPORTED_MODULE_11__pages_blood_blood__["a" /* BloodPage */], icon: 'pulse' },
                { title: 'Advance Directives', component: __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__["a" /* AdvanceDirectivesPage */], icon: 'paper' },
                { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */], icon: 'person' },
                { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], icon: 'finger-print' },
                { title: value['IMPRESSUM.TITLE'], component: __WEBPACK_IMPORTED_MODULE_1__pages_impressum_impressum__["a" /* ImpressumPage */], icon: 'apps' },
                { title: 'Tabs', component: __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */], icon: 'apps' }
            ];
        });
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait'
        });
        this.translate.get("COMMON.PLEASEWAIT").subscribe(function (value) {
            loading.setContent(value);
        });
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.parametersService.init().then(function () {
                _this.languageService.init();
                loading.present().catch();
                _this.network.onConnect().subscribe(function () {
                    // TODO: If client was already successfully authenticated, push corresponding site (or HomePage)
                    _this.midataConnectionService.setConnectionState(true);
                });
                _this.network.onDisconnect().subscribe(function () {
                    _this.midataConnectionService.setConnectionState(false);
                });
                _this.platform.pause.subscribe(function () {
                    _this.midataConnectionService.syncSecureStorage()
                        .catch(function (error) {
                        console.log(error);
                    });
                });
                _this.platform.resume.subscribe(function () {
                    if (_this.midataConnectionService.getConnectionState() && _this.midataConnectionService.getAutoLogin()) {
                        _this.midataConnectionService.refresh()
                            .catch(function () {
                            console.log("NOT AUTHENTICATED ANYMORE! REDIRECTING BACK TO LOGIN PAGE");
                            //this.nav.setRoot(LoginPage, undefined, undefined, () => {
                            //loading.dismiss().catch();
                            //})
                        });
                    }
                    else {
                        console.log("NO INTERNET CONNECTION, NO REFRESH ON RESUME");
                    }
                });
                _this.statusBar.styleDefault();
                _this.splashScreen.hide();
            }).then(function () {
                _this.saveLogin().then(function () {
                    loading.dismiss().catch();
                }).catch(function () {
                    loading.dismiss().catch();
                });
            });
        }).catch(function () {
            // TODO: display a standard message box to the user
            console.log("No parameter Service available");
        });
    };
    MyApp.prototype.saveLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.midataConnectionService.getConnectionState()) {
                _this.midataConnectionService.getConnection().fetchFHIRConformanceStatement()
                    .then(function () {
                    return _this.midataConnectionService.refresh();
                })
                    .then(function () {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */], undefined, undefined, function () {
                        console.log("SUCCESS, LOGGING IN...");
                    });
                })
                    .then(function () {
                    resolve();
                })
                    .catch(function () {
                    reject();
                });
            }
            else {
                reject();
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openModal = function (page) {
        var nModal = this.modalCtrl.create(page, {});
        nModal.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
        selector: 'page-app',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-item>\n\n      <div class="userBadge" (click)=\'openModal(profilePage.value)\'>\n\n        <img class="profile-picture" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Danica_2010_cropped.jpg" />\n\n        <img class="editImage" src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/pen-icon.png"/>\n\n        <h3>Elisabeth Brönnimann</h3>\n\n      </div>\n\n    </ion-item>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon class="iconMenu" name="{{p.icon}}"></ion-icon>{{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_14__services_MidataConnectionService__["a" /* MidataConnectionService */],
        __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__["a" /* LanguageService */],
        __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__["a" /* ParametersService */],
        __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalRewardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tips_tips__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { HomePage } from '../home/home';
var AdditionalRewardPage = (function () {
    function AdditionalRewardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AdditionalRewardPage.prototype.pushTipsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tips_tips__["a" /* TipsPage */]);
    };
    return AdditionalRewardPage;
}());
AdditionalRewardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-additionalReward',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\newEntry\additionalReward\additionalReward.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button id="btnX" (click)="pushHomePage()" ion-button color="light" round icon-only>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n  </button>\n\n\n\n\n\n<!--this page will be deleted-->\n\n  <p>Öffne eine Truhe und hole dir zusätzliche Punkte und einen Tipp.</p>\n\n\n\n  <button (click)="pushHomePage()" ion-button secondary icon-left>\n\n    <ion-icon name=\'close\'></ion-icon>Abbrechen\n\n  </button>\n\n  <button (click)="pushTipsPage()" ion-button icon-right secondary>Weiter\n\n    <ion-icon name="ios-arrow-forward"></ion-icon>\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\newEntry\additionalReward\additionalReward.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], AdditionalRewardPage);

//# sourceMappingURL=additionalReward.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTranslateLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__ = __webpack_require__(552);

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParametersService = (function () {
    function ParametersService(httpClient) {
        this.httpClient = httpClient;
    }
    ParametersService.prototype.init = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClient.get("assets/parameters.json").subscribe(function (data) {
                _this.obj = data;
                resolve();
            }, function (err) {
                reject();
            });
        });
    };
    Object.defineProperty(ParametersService.prototype, "parameters", {
        get: function () {
            if (typeof this.obj !== 'undefined') {
                return this.obj;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ParametersService;
}());
ParametersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ParametersService);

//# sourceMappingURL=parametersService.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidataConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_secure_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Midata__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Midata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_Midata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MidataConnectionWrapper__ = __webpack_require__(524);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MidataConnectionService = (function (_super) {
    __extends(MidataConnectionService, _super);
    /**
    * Constructor of the class.
    * @param secureStorageServices  Parameter to use the provider SecureStorageServices which help to use the Secure Storage plugin.
    * @param user  Parameter to use the provider entity User in order to get the informations related to the connected user.
    */
    function MidataConnectionService(storage, secureStorage, platform, events, network) {
        var _this = _super.call(this, new __WEBPACK_IMPORTED_MODULE_8_Midata__["Midata"]('https://test.midata.coop', 'MiDemo', 'metal taste buzz bonus toy volume'), storage, secureStorage, platform, events, network) || this;
        _this.storage = storage;
        _this.secureStorage = secureStorage;
        _this.platform = platform;
        _this.events = events;
        _this.network = network;
        _this.AUTO_LOGIN = true;
        //  check network connectivity on inital start
        platform.ready().then(function () {
            if (_this.network.type === "none") {
                _this.setConnectionState(false);
            }
            else {
                _this.setConnectionState(true);
            }
        });
        return _this;
    }
    /**
    * Get the connection.
    * @returns the connection object
    */
    MidataConnectionService.prototype.getConnection = function () {
        return _super.prototype.getConnection.call(this);
    };
    MidataConnectionService.prototype.getConnectionState = function () {
        return this.CONNECTION_STATE;
    };
    MidataConnectionService.prototype.ensureConnection = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.CONNECTION_STATE)
                resolve();
            else
                reject();
        });
    };
    MidataConnectionService.prototype.getAutoLogin = function () {
        return this.AUTO_LOGIN;
    };
    MidataConnectionService.prototype.setConnectionState = function (flag) {
        this.CONNECTION_STATE = flag;
    };
    /**
    * Set the connection.
    */
    MidataConnectionService.prototype.setConnection = function (connection) {
        //super.setConnection(connection);
    };
    /**
    * Function to determine if the user is logged
    * @returns Boolean to say if the user is connected
    */
    MidataConnectionService.prototype.loggedIn = function () {
        return this.getConnection().loggedIn;
    };
    /**
    * Get the refreshToken of the autorization of the user
    * @returns string with the refreshToken
    */
    MidataConnectionService.prototype.getRefreshToken = function () {
        return this.getConnection().refreshToken;
    };
    /**
    * Get the refreshToken of the autorization of the user
    * @returns string with the refreshToken
    */
    MidataConnectionService.prototype.getAuthToken = function () {
        return this.getConnection().authToken;
    };
    /**
    * Get the refreshToken of the autorization of the user
    * @returns string with the refreshToken
    */
    MidataConnectionService.prototype.getUser = function () {
        return this.getConnection().user;
    };
    MidataConnectionService.prototype.loginOAuth = function (checked) {
        this.AUTO_LOGIN = checked;
        return _super.prototype.authenticate.call(this, checked);
    };
    /**
    * Login to midata
    * @param username  Username used to the connection to midata.
    * @param password  Password used to the connection to midata.
    * @param callback  Callback function used to determine when the asynchronous login is done or get an error
    */
    MidataConnectionService.prototype.login = function (username, password, callback) {
        this.getConnection().login(username, password).then(function (value) {
            if (value.status === 'ACTIVE') {
                callback(true, true);
            }
            else {
                callback(false, false);
            }
        }, function () {
            callback(false, true);
        });
    };
    /**
    * Logout to midata
    */
    MidataConnectionService.prototype.logout = function () {
        //Remove the password from secure storage
        //this.secureStorageServices.removeValue('password');
        //Delete the values of the connection from the midata API
        return _super.prototype.logout.call(this);
    };
    /**
    * Search a value in midata using the midata API
    * @param resourceType  Type of ressource searched in midata (for example "Observation".
    * @param params  Parameter to add to the request.
    * @returns An observable of the search result
    */
    MidataConnectionService.prototype.search = function (resourceType, params) {
        if (params === void 0) { params = {}; }
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(this.getConnection().search(resourceType, params));
    };
    /**
    * Save a value in midata using the midata API
    * @param resource  Ressource which will be saved in midata server.
    * @returns An observable of the save result
    */
    MidataConnectionService.prototype.save = function (resource) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].fromPromise(this.getConnection().save(resource));
    };
    MidataConnectionService.prototype.syncSecureStorage = function () {
        return _super.prototype.syncSecureStorage.call(this, this.AUTO_LOGIN);
    };
    return MidataConnectionService;
}(__WEBPACK_IMPORTED_MODULE_9__MidataConnectionWrapper__["a" /* MidataConnectionWrapper */]));
MidataConnectionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    /**
     * Service to manage the Connection to midata server.
     */
    ,
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_secure_storage__["a" /* SecureStorage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__["a" /* Network */]])
], MidataConnectionService);

//# sourceMappingURL=MidataConnectionService.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpressumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parametersService_parametersService__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImpressumPage = (function () {
    function ImpressumPage(appVersion, parametersService) {
        var _this = this;
        this.appVersion = appVersion;
        this.parametersService = parametersService;
        this.parameters = this.parametersService.parameters;
        appVersion.getVersionNumber().then(function (version) {
            _this.appVersionNumber = version;
        });
    }
    return ImpressumPage;
}());
ImpressumPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-impressum',template:/*ion-inline-start:"C:\Users\uasne\Ally\src\pages\impressum\impressum.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{ \'IMPRESSUM.TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div style="margin-left: 5%; margin-right: 5%; text-align:center;">\n\n      <h3>{{ \'IMPRESSUM.VERSION\' | translate }}</h3>\n\n      <p>{{appVersionNumber}}</p>\n\n      <hr>\n\n\n\n      <h3>{{ \'IMPRESSUM.PUBLISHER\' | translate }}</h3>\n\n      <p>{{ \'IMPRESSUM.PUBLISHERNAME\' | translate }}</p>\n\n      <hr>\n\n\n\n      <h3>{{ \'IMPRESSUM.IMPLEMENTATION\' | translate }}</h3>\n\n      <p><i>{{ \'IMPRESSUM.APP\' | translate }}</i><br>\n\n        {{ \'IMPRESSUM.BFH\' | translate }}<br>\n\n        {{ \'IMPRESSUM.i4mi\' | translate }}</p>\n\n      <p>&nbsp;</p>\n\n      <p><i>{{ \'IMPRESSUM.PLATFORM\' | translate }}</i><br>\n\n        {{ \'IMPRESSUM.ETH\' | translate }}<br>\n\n        {{ \'IMPRESSUM.iis\' | translate }}\n\n      </p>\n\n      <hr>\n\n\n\n      <h3>{{ \'IMPRESSUM.DATA_RETENTION\' | translate }}</h3>\n\n      <p><a href="{{parameters.midataPlatformURL}}">{{parameters.midataPlatformURL}}</a></p>\n\n\n\n      <br>\n\n\n\n      <div style="width: 90%" style="border: 0px;">\n\n        <table>\n\n          <tr>\n\n            <td style="width: 33%">\n\n              <img [src]="parameters.pathLogoBFH">\n\n            </td>\n\n            <td style="width: 33%">\n\n              <img [src]="parameters.pathLogoPublisher">\n\n            </td>\n\n            <td style="width: 33%">\n\n              <img [src]="parameters.pathLogoETH">\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td colspan="3">\n\n              <img [src]="parameters.pathLogoMIDATA">\n\n            </td>\n\n          </tr>\n\n        </table>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\uasne\Ally\src\pages\impressum\impressum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_2__services_parametersService_parametersService__["a" /* ParametersService */]])
], ImpressumPage);

//# sourceMappingURL=impressum.js.map

/***/ })

},[408]);
//# sourceMappingURL=main.js.map
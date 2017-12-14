webpackJsonp([7],{

/***/ 101:
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

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_midata__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_midata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_midata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_MidataConnectionService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__typings_globals__ = __webpack_require__(511);
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
        var placeholder = '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';
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div id="photoSectionWrapper">\n\n    <div id="photoSection" (click)="photoProfilClick()">\n\n      <img alt="Image Profile" id="photoImage" src="{{photoAccessURL}}" />\n\n      <img class="uploadImage" [src]="parameters.pathCameraIcon" />\n\n    </div>\n\n  </div>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-icon name="mail" item-left></ion-icon>\n\n      <p><b id="username">{{ \'PROFILE.USERNAME\' | translate }}</b></p>\n\n      <p>{{username}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="contacts" item-left></ion-icon>\n\n      <p><b id="name">{{ \'PROFILE.NAME\' | translate }}</b></p>\n\n      <p>{{name}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name="calendar" item-left></ion-icon>\n\n      <p><b id="birthdate">{{ \'PROFILE.BIRTHDATE\' | translate }}</b></p>\n\n      <p>{{birthDate| date: \'dd.MM.y\'}}</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-icon name={{genderIcon}} item-left></ion-icon>\n\n      <p><b id="gender">{{ \'PROFILE.GENDER\' | translate }}</b></p>\n\n      <p>{{gender}}</p>\n\n    </ion-item>\n\n    <ion-item (click)="updateBodyHeight()">\n\n      <ion-icon name="resize" item-left></ion-icon>\n\n      <p><b id="height">{{ \'PROFILE.HEIGHT\' | translate }}</b></p>\n\n      <p>{{height}} cm</p>\n\n      <ion-icon name="create" item-right></ion-icon>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\profile\profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__["a" /* LanguageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__["a" /* ParametersService */],
        __WEBPACK_IMPORTED_MODULE_6__services_MidataConnectionService__["a" /* MidataConnectionService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(369);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_globalization__["a" /* Globalization */]])
], LanguageService);

//# sourceMappingURL=languageService.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvanceDirectivesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Objects_Question__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Objects_Group__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__QuestionsModal_questions__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Objects_AnswersType_TextAnswer__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Objects_AnswersType_RadioAnswer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Objects_AnswersType_CheckboxAnswer__ = __webpack_require__(192);
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-advance-directives',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\advance-directives\advance-directives.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Advance directives</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-8><button ion-button color="secondary" round block (click)="askQuestions()">Répondre aux questions</button></ion-col>\n\n      <ion-col col-2></ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ng-container *ngFor="let group of groups; let i = index">\n\n    <ion-card color="primary" (click)="inability(i)">\n\n      <ion-card-content>\n\n        {{group.groupTitle}} \n\n      </ion-card-content>\n\n    </ion-card>\n\n    <ng-container *ngFor="let question of group.questions">\n\n      <ion-card [hidden]="!hideInability[i]">\n\n        <ion-card-header text-wrap>\n\n          <b>{{question.label}}</b>\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-list *ngFor="let answer of question.answerValue">\n\n            <ng-container *ngIf="question.type == \'text\' && answer">\n\n              <ion-item text-wrap><b>{{answer.label}}:</b> {{answer.value}}</ion-item>\n\n            </ng-container>\n\n            <ng-container *ngIf="question.type == \'radio\' && answer">\n\n              <ion-item text-wrap>{{answer.label}}</ion-item>\n\n              <ion-list *ngFor="let subAnswer of question.subAnswerValue">\n\n                <ng-container *ngIf="subAnswer">\n\n                  <ion-item class="sub-item" text-wrap>{{subAnswer.label}}</ion-item>\n\n                </ng-container>\n\n              </ion-list>\n\n              <ion-list *ngFor="let subSubAnswer of question.subSubAnswerValue">\n\n                <ng-container *ngIf="subSubAnswer">\n\n                  <ion-item class="sub-sub-item" text-wrap>{{subSubAnswer.label}}</ion-item>\n\n                </ng-container>\n\n              </ion-list>\n\n            </ng-container>\n\n            <ng-container *ngIf="question.type == \'checkbox\' && answer">\n\n              <ion-item text-wrap>{{answer.label}}</ion-item>\n\n            </ng-container>\n\n          </ion-list>\n\n          <ng-container *ngIf="question.answerValue.length < 1">\n\n            <ion-list>\n\n              <ion-item>Aucune réponse disponible</ion-item>\n\n            </ion-list>\n\n          </ng-container>\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ng-container>\n\n  </ng-container>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\advance-directives\advance-directives.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
], AdvanceDirectivesPage);

//# sourceMappingURL=advance-directives.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Objects_AnswersType_TextAnswer__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Objects_AnswersType_RadioAnswer__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Objects_AnswersType_CheckboxAnswer__ = __webpack_require__(192);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
], QuestionsPage.prototype, "slides", void 0);
QuestionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-questions',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\advance-directives\QuestionsModal\questions.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only (click)="dismiss()">\n\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Questions</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-slides>\n\n    <ng-container *ngFor="let group of groups">\n\n      <ion-slide class="explanations">\n\n        <ion-card color="light">\n\n          <ion-card-header color="primary">\n\n            {{group.groupTitle}}\n\n          </ion-card-header>\n\n          <ion-card-content>\n\n            {{group.groupDescription}}\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-slide>\n\n      <ng-container *ngFor="let question of group.questions">\n\n        <ion-slide *ngIf="question.type == \'text\'">\n\n          <h1>{{question.label}}</h1>\n\n          <ion-list *ngFor="let answer of question.answers">\n\n            <ion-item>\n\n              <ion-label fixed>{{answer.label}}</ion-label>\n\n              <ion-input type="text" #textValue (input)="changeAnswer(question, answer, textValue.value)" value="{{answer.value}}"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-slide>\n\n        <ion-slide *ngIf="question.type == \'radio\'">\n\n          <h1>{{question.label}}</h1>\n\n          <ion-list radio-group [(ngModel)]="radioAnswer">\n\n            <ng-container *ngFor="let answer of question.answers">\n\n              <ion-item text-wrap item-divider>\n\n                <ion-label>{{answer.label}}</ion-label>\n\n                <ion-radio #radioValue value="{{answer.name}}" (ionSelect)="changeAnswer(question, answer)"></ion-radio>\n\n              </ion-item>\n\n              <ng-container *ngIf="answer.subAnswers && radioAnswer == answer.name">\n\n                <ion-list radio-group [(ngModel)]="radioSubAnswer">\n\n                  <ng-container *ngFor="let subAnswer of answer.subAnswers">\n\n                    <ion-item text-wrap class="sub-item">\n\n                      <ion-label class="subAnswer">{{subAnswer.label}}</ion-label>\n\n                      <ion-radio value="{{subAnswer.name}}" (ionSelect)="changeAnswer(question, answer, \'\', subAnswer)"></ion-radio>\n\n                    </ion-item>\n\n                    <ion-list radio-group>\n\n                      <ng-container *ngIf="subAnswer.subAnswers && radioSubAnswer == subAnswer.name">\n\n                        <ion-item text-wrap class="sub-sub-item" *ngFor="let subSubAnswer of subAnswer.subAnswers">\n\n                          <ion-label class="subSubAnswer">{{subSubAnswer.label}}</ion-label>\n\n                          <ion-radio value="{{subSubAnswer.name}}" (ionSelect)="changeAnswer(question, answer, \'\', subAnswer, subSubAnswer)"></ion-radio>\n\n                        </ion-item>\n\n                      </ng-container>\n\n                    </ion-list>\n\n                  </ng-container>\n\n                </ion-list>\n\n              </ng-container>\n\n            </ng-container>\n\n          </ion-list>\n\n        </ion-slide>\n\n        <ion-slide *ngIf="question.type == \'checkbox\'">\n\n          <h1>{{question.label}}</h1>\n\n          <ion-list *ngFor="let answer of question.answers">\n\n            <ion-item text-wrap item-divider>\n\n              <ion-label>{{answer.label}}</ion-label>\n\n              <ion-checkbox #checkValue (ionChange)="changeAnswer(question, answer, checkValue.value)"></ion-checkbox>\n\n            </ion-item>\n\n          </ion-list>\n\n        </ion-slide>\n\n\n\n      </ng-container>\n\n    </ng-container>\n\n  </ion-slides>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button full (click)="close()" *ngIf="slides._isBeginning">Fermer</button>\n\n        <button ion-button full (click)="previous()" *ngIf="!slides._isBeginning">Précédant</button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button full (click)="next()" *ngIf="!slides._isEnd">Suivant</button>\n\n        <button ion-button full (click)="close()" *ngIf="slides._isEnd">Fermer</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\advance-directives\QuestionsModal\questions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], QuestionsPage);

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PulseDailyDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(308);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('chartCanvas'),
    __metadata("design:type", Object)
], PulseDailyDataPage.prototype, "chartCanvas", void 0);
PulseDailyDataPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pulse-daily-data',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\blood\pulseDailyData\pulseDailyData.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button navPop icon-only>\n\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Blood pulse</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content has-footer no-bounce>\n\n  <h1>{{formatDate(dateOfDay, \'dddd Do MMMM YYYY\')}}</h1>\n\n  <ion-card *ngIf="dailyData.length > 3">\n\n    <ion-card-content>\n\n      <canvas #chartCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-list>\n\n    <ion-item-sliding #item *ngFor="let measure of dailyData">\n\n      <ion-item>\n\n        <ion-icon name="heart-outline" item-start color="danger"></ion-icon>\n\n        <h2>{{formatDate(measure.date, \'HH:mm\')}}</h2>\n\n        <p>{{measure.value}}</p>\n\n        </ion-item>\n\n        <ion-item-options>\n\n          <button ion-button color="danger" (click)="delete(item)">\n\n            <ion-icon name="trash"></ion-icon>\n\n            Delete\n\n        </button>\n\n        </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\blood\pulseDailyData\pulseDailyData.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PulseDailyDataPage);

//# sourceMappingURL=pulseDailyData.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PulseMeasurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(38);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pulse-measure',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\blood\pulse-measure\pulse-measure.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-buttons left>\n\n      <button ion-button navPop icon-only>\n\n        <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>{{ \'BLOOD.NEWMEASURE.TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{ \'BLOOD.NEWMEASURE.CAPTIONTITLE\' | translate }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      {{ \'BLOOD.NEWMEASURE.CAPTION\' | translate }}\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-row [hidden]="isMeasuring">\n\n    <ion-col>\n\n      <button ion-button (click)="takeMeasure()">{{ \'BLOOD.NEWMEASURE.START\' | translate }}</button>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row [hidden]="!isMeasuring">\n\n    <ion-col class="counter">\n\n      {{counter}}\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\blood\pulse-measure\pulse-measure.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
], PulseMeasurePage);

//# sourceMappingURL=pulse-measure.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MidataConnectionService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ModalService__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(65);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\login\login.html"*/'<ion-content>\n\n  <div id="midataLogoWrapper">\n\n      <span class="helper"></span>\n\n      <ion-img alt="MIDATA logo" src="assets/img/logo-midata-full.png" id="logoMidata" (click)="visitMidata()"></ion-img>\n\n  </div>\n\n  <div id="blockHeader">\n\n  </div>\n\n  <ion-slides pager>\n\n    <ion-slide>\n\n      <h2 class="slide-title">Welcome to MiDemo</h2>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <h2 class="slide-title">What can I do for you?</h2>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <h2 class="slide-title">Tipps!</h2>\n\n    </ion-slide>\n\n</ion-slides>\n\n\n\n  <div id="btnZone">\n\n    <div class="wrapper default" id="btnLogin" (click)="login()">\n\n        login\n\n    </div>\n\n    <div class="wrapper" id="btnRegister" (click)="register()">\n\n        register\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__services_ModalService__["a" /* ModalService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_3__services_MidataConnectionService__["a" /* MidataConnectionService */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/advance-directives/QuestionsModal/questions.module": [
		529,
		6
	],
	"../pages/advance-directives/advance-directives.module": [
		528,
		5
	],
	"../pages/blood/blood.module": [
		530,
		4
	],
	"../pages/blood/pulse-measure/pulse-measure.module": [
		531,
		3
	],
	"../pages/blood/pulseDailyData/pulseDailyData.module": [
		532,
		2
	],
	"../pages/impressum/impressum.module": [
		533,
		1
	],
	"../pages/login/login.module": [
		534,
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAnswer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Answer__ = __webpack_require__(101);
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioAnswer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Answer__ = __webpack_require__(101);
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

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxAnswer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Answer__ = __webpack_require__(101);
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

/***/ 323:
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
webpackEmptyAsyncContext.id = 323;

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(38);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* App */]])
], ModalService);

//# sourceMappingURL=ModalService.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    }
    return OverviewPage;
}());
OverviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-overview',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\overview\overview.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Übersicht</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <button ion-button block>\n\n      Test</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\overview\overview.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], OverviewPage);

//# sourceMappingURL=overview.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommunityPage = (function () {
    function CommunityPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CommunityPage;
}());
CommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-community',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\community\community.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Community</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <button ion-button block>\n\n      Test</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\community\community.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], CommunityPage);

//# sourceMappingURL=community.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroductionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    }
    return IntroductionPage;
}());
IntroductionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-introduction',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\introduction.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Einführung</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <button ion-button block>\n\n      Test</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\introduction.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], IntroductionPage);

//# sourceMappingURL=introduction.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEntryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return NewEntryPage;
}());
NewEntryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newEntry',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\newEntry.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <button id="btnX" ion-button color="light" round icon-only>\n\n      <ion-icon name=\'close\'></ion-icon>\n\n    </button>\n\n\n\n    <ion-item>\n\n      <!--img id="imgAlly" align="middle" src="assets/img/ally.jpg" style="width:150px;height:200px;"-->\n\n    </ion-item>\n\n\n\n    <h4 id="h4HalloTim">Hallo Tim!</h4>\n\n       <p id="pHalloTim">Mit jedem Eintrag, den Du\n\n         machst, hilfst Du uns eine\n\n         bessere Übersicht über die\n\n         aktuelle Pollenbelastung in\n\n         der Schweiz zu erhalten.</p>\n\n\n\n  <button id="btnForward" ion-button secondary>Weiter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\newEntry.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], NewEntryPage);

//# sourceMappingURL=newEntry.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blood_blood__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__impressum_impressum__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(131);
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
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__blood_blood__["a" /* BloodPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__impressum_impressum__["a" /* ImpressumPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Pinnwand" tabIcon="clipboard"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Profil" tabIcon="person"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Einstellungen" tabIcon="settings"></ion-tab>\n\n\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 372:
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
webpackEmptyAsyncContext.id = 372;

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(389);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_advance_directives_QuestionsModal_questions__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_impressum_impressum__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_MidataConnectionService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_InBrowserBrowser__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_blood_blood__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_blood_pulse_measure_pulse_measure__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_blood_pulseDailyData_pulseDailyData__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_overview_overview__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_community_community__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_introduction_introduction__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_introduction_allergy_allergy__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_introduction_drug_drug__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_introduction_finish_finish__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_introduction_heightweight_heightweight__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_introduction_job_job__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_introduction_remindertime_remindertime__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_introduction_reward_reward__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_introduction_takingdrug_takingdrug__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_newEntry_newEntry__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_newEntry_dateTime_dateTime__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_newEntry_complaints_complaints__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_newEntry_physicalActivity_physicalActivity__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_newEntry_medication_medication__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_newEntry_totalPoints_totalPoints__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_newEntry_additionalReward_additionalReward__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_newEntry_tips_tips__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__util__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__services_languageService_languageService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__services_parametersService_parametersService__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_login_login__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__ionic_native_secure_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__ionic_native_in_app_browser__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__ionic_native_network__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__angular_common_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_ModalService__ = __webpack_require__(324);
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
    Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_blood_blood__["a" /* BloodPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_blood_pulse_measure_pulse_measure__["a" /* PulseMeasurePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_blood_pulseDailyData_pulseDailyData__["a" /* PulseDailyDataPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_impressum_impressum__["a" /* ImpressumPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__["a" /* AdvanceDirectivesPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_advance_directives_QuestionsModal_questions__["a" /* QuestionsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_overview_overview__["a" /* OverviewPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_community_community__["a" /* CommunityPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_introduction_introduction__["a" /* IntroductionPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_introduction_allergy_allergy__["a" /* AllergyPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_introduction_drug_drug__["a" /* DrugPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_introduction_finish_finish__["a" /* FinishPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_introduction_heightweight_heightweight__["a" /* HeightWeightPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_introduction_job_job__["a" /* JobPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_introduction_remindertime_remindertime__["a" /* ReminderTimePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_introduction_reward_reward__["a" /* RewardPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_introduction_takingdrug_takingdrug__["a" /* TakingDrugPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_newEntry_newEntry__["a" /* NewEntryPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_newEntry_dateTime_dateTime__["a" /* DateTimePage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_newEntry_complaints_complaints__["a" /* ComplaintsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_newEntry_physicalActivity_physicalActivity__["a" /* PhysicalActivityPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_newEntry_medication_medication__["a" /* MedicationPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_newEntry_totalPoints_totalPoints__["a" /* TotalPointsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_newEntry_additionalReward_additionalReward__["a" /* AdditionalRewardPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_newEntry_tips_tips__["a" /* TipsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
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
            __WEBPACK_IMPORTED_MODULE_50__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (__WEBPACK_IMPORTED_MODULE_43__util__["a" /* createTranslateLoader */]),
                    deps: [__WEBPACK_IMPORTED_MODULE_50__angular_common_http__["a" /* HttpClient */]]
                }
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_blood_blood__["a" /* BloodPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_blood_pulse_measure_pulse_measure__["a" /* PulseMeasurePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_blood_pulseDailyData_pulseDailyData__["a" /* PulseDailyDataPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_impressum_impressum__["a" /* ImpressumPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__["a" /* AdvanceDirectivesPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_advance_directives_QuestionsModal_questions__["a" /* QuestionsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_overview_overview__["a" /* OverviewPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_community_community__["a" /* CommunityPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_introduction_introduction__["a" /* IntroductionPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_introduction_allergy_allergy__["a" /* AllergyPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_introduction_drug_drug__["a" /* DrugPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_introduction_finish_finish__["a" /* FinishPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_introduction_heightweight_heightweight__["a" /* HeightWeightPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_introduction_job_job__["a" /* JobPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_introduction_remindertime_remindertime__["a" /* ReminderTimePage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_introduction_reward_reward__["a" /* RewardPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_introduction_takingdrug_takingdrug__["a" /* TakingDrugPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_newEntry_newEntry__["a" /* NewEntryPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_newEntry_dateTime_dateTime__["a" /* DateTimePage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_newEntry_complaints_complaints__["a" /* ComplaintsPage */],
            __WEBPACK_IMPORTED_MODULE_36__pages_newEntry_physicalActivity_physicalActivity__["a" /* PhysicalActivityPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_newEntry_medication_medication__["a" /* MedicationPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_newEntry_totalPoints_totalPoints__["a" /* TotalPointsPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_newEntry_additionalReward_additionalReward__["a" /* AdditionalRewardPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_newEntry_tips_tips__["a" /* TipsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_41__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_42__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_44__services_languageService_languageService__["a" /* LanguageService */],
            { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_globalization__["a" /* Globalization */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_45__services_parametersService_parametersService__["a" /* ParametersService */],
            __WEBPACK_IMPORTED_MODULE_47__ionic_native_secure_storage__["a" /* SecureStorage */],
            __WEBPACK_IMPORTED_MODULE_49__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_48__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_13__services_InBrowserBrowser__["a" /* InBrowserBrowser */],
            __WEBPACK_IMPORTED_MODULE_12__services_MidataConnectionService__["a" /* MidataConnectionService */],
            __WEBPACK_IMPORTED_MODULE_51__services_ModalService__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 390:
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

/***/ 391:
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

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 193,
	"./af.js": 193,
	"./ar": 194,
	"./ar-dz": 195,
	"./ar-dz.js": 195,
	"./ar-kw": 196,
	"./ar-kw.js": 196,
	"./ar-ly": 197,
	"./ar-ly.js": 197,
	"./ar-ma": 198,
	"./ar-ma.js": 198,
	"./ar-sa": 199,
	"./ar-sa.js": 199,
	"./ar-tn": 200,
	"./ar-tn.js": 200,
	"./ar.js": 194,
	"./az": 201,
	"./az.js": 201,
	"./be": 202,
	"./be.js": 202,
	"./bg": 203,
	"./bg.js": 203,
	"./bn": 204,
	"./bn.js": 204,
	"./bo": 205,
	"./bo.js": 205,
	"./br": 206,
	"./br.js": 206,
	"./bs": 207,
	"./bs.js": 207,
	"./ca": 208,
	"./ca.js": 208,
	"./cs": 209,
	"./cs.js": 209,
	"./cv": 210,
	"./cv.js": 210,
	"./cy": 211,
	"./cy.js": 211,
	"./da": 212,
	"./da.js": 212,
	"./de": 213,
	"./de-at": 214,
	"./de-at.js": 214,
	"./de-ch": 215,
	"./de-ch.js": 215,
	"./de.js": 213,
	"./dv": 216,
	"./dv.js": 216,
	"./el": 217,
	"./el.js": 217,
	"./en-au": 218,
	"./en-au.js": 218,
	"./en-ca": 219,
	"./en-ca.js": 219,
	"./en-gb": 220,
	"./en-gb.js": 220,
	"./en-ie": 221,
	"./en-ie.js": 221,
	"./en-nz": 222,
	"./en-nz.js": 222,
	"./eo": 223,
	"./eo.js": 223,
	"./es": 224,
	"./es-do": 225,
	"./es-do.js": 225,
	"./es.js": 224,
	"./et": 226,
	"./et.js": 226,
	"./eu": 227,
	"./eu.js": 227,
	"./fa": 228,
	"./fa.js": 228,
	"./fi": 229,
	"./fi.js": 229,
	"./fo": 230,
	"./fo.js": 230,
	"./fr": 231,
	"./fr-ca": 232,
	"./fr-ca.js": 232,
	"./fr-ch": 233,
	"./fr-ch.js": 233,
	"./fr.js": 231,
	"./fy": 234,
	"./fy.js": 234,
	"./gd": 235,
	"./gd.js": 235,
	"./gl": 236,
	"./gl.js": 236,
	"./gom-latn": 237,
	"./gom-latn.js": 237,
	"./he": 238,
	"./he.js": 238,
	"./hi": 239,
	"./hi.js": 239,
	"./hr": 240,
	"./hr.js": 240,
	"./hu": 241,
	"./hu.js": 241,
	"./hy-am": 242,
	"./hy-am.js": 242,
	"./id": 243,
	"./id.js": 243,
	"./is": 244,
	"./is.js": 244,
	"./it": 245,
	"./it.js": 245,
	"./ja": 246,
	"./ja.js": 246,
	"./jv": 247,
	"./jv.js": 247,
	"./ka": 248,
	"./ka.js": 248,
	"./kk": 249,
	"./kk.js": 249,
	"./km": 250,
	"./km.js": 250,
	"./kn": 251,
	"./kn.js": 251,
	"./ko": 252,
	"./ko.js": 252,
	"./ky": 253,
	"./ky.js": 253,
	"./lb": 254,
	"./lb.js": 254,
	"./lo": 255,
	"./lo.js": 255,
	"./lt": 256,
	"./lt.js": 256,
	"./lv": 257,
	"./lv.js": 257,
	"./me": 258,
	"./me.js": 258,
	"./mi": 259,
	"./mi.js": 259,
	"./mk": 260,
	"./mk.js": 260,
	"./ml": 261,
	"./ml.js": 261,
	"./mr": 262,
	"./mr.js": 262,
	"./ms": 263,
	"./ms-my": 264,
	"./ms-my.js": 264,
	"./ms.js": 263,
	"./my": 265,
	"./my.js": 265,
	"./nb": 266,
	"./nb.js": 266,
	"./ne": 267,
	"./ne.js": 267,
	"./nl": 268,
	"./nl-be": 269,
	"./nl-be.js": 269,
	"./nl.js": 268,
	"./nn": 270,
	"./nn.js": 270,
	"./pa-in": 271,
	"./pa-in.js": 271,
	"./pl": 272,
	"./pl.js": 272,
	"./pt": 273,
	"./pt-br": 274,
	"./pt-br.js": 274,
	"./pt.js": 273,
	"./ro": 275,
	"./ro.js": 275,
	"./ru": 276,
	"./ru.js": 276,
	"./sd": 277,
	"./sd.js": 277,
	"./se": 278,
	"./se.js": 278,
	"./si": 279,
	"./si.js": 279,
	"./sk": 280,
	"./sk.js": 280,
	"./sl": 281,
	"./sl.js": 281,
	"./sq": 282,
	"./sq.js": 282,
	"./sr": 283,
	"./sr-cyrl": 284,
	"./sr-cyrl.js": 284,
	"./sr.js": 283,
	"./ss": 285,
	"./ss.js": 285,
	"./sv": 286,
	"./sv.js": 286,
	"./sw": 287,
	"./sw.js": 287,
	"./ta": 288,
	"./ta.js": 288,
	"./te": 289,
	"./te.js": 289,
	"./tet": 290,
	"./tet.js": 290,
	"./th": 291,
	"./th.js": 291,
	"./tl-ph": 292,
	"./tl-ph.js": 292,
	"./tlh": 293,
	"./tlh.js": 293,
	"./tr": 294,
	"./tr.js": 294,
	"./tzl": 295,
	"./tzl.js": 295,
	"./tzm": 296,
	"./tzm-latn": 297,
	"./tzm-latn.js": 297,
	"./tzm.js": 296,
	"./uk": 298,
	"./uk.js": 298,
	"./ur": 299,
	"./ur.js": 299,
	"./uz": 300,
	"./uz-latn": 301,
	"./uz-latn.js": 301,
	"./uz.js": 300,
	"./vi": 302,
	"./vi.js": 302,
	"./x-pseudo": 303,
	"./x-pseudo.js": 303,
	"./yo": 304,
	"./yo.js": 304,
	"./zh-cn": 305,
	"./zh-cn.js": 305,
	"./zh-hk": 306,
	"./zh-hk.js": 306,
	"./zh-tw": 307,
	"./zh-tw.js": 307
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
webpackContext.id = 414;

/***/ }),

/***/ 460:
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

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidataConnectionWrapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Midata__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Midata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_Midata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__ = __webpack_require__(63);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_Midata__["Midata"],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_secure_storage__["a" /* SecureStorage */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_network__["a" /* Network */]])
], MidataConnectionWrapper);

//# sourceMappingURL=MidataConnectionWrapper.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InBrowserBrowser; });
/* unused harmony export InBrowserBrowserObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
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
        event = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
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

/***/ 511:
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

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_advance_directives_advance_directives__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_impressum_impressum__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_blood_blood__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_MidataConnectionService__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__ = __webpack_require__(63);
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
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], undefined, undefined, function () {
                                loading.dismiss().catch();
                            });
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
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
        selector: 'page-app',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n\n    <ion-item>\n\n      <div class="userBadge" (click)=\'openModal(profilePage.value)\'>\n\n        <img class="profile-picture" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Danica_2010_cropped.jpg" />\n\n        <img class="editImage" src="http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/pen-icon.png"/>\n\n        <h3>Elisabeth Brönnimann</h3>\n\n      </div>\n\n    </ion-item>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        <ion-icon class="iconMenu" name="{{p.icon}}"></ion-icon>{{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_14__services_MidataConnectionService__["a" /* MidataConnectionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_MidataConnectionService__["a" /* MidataConnectionService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__["a" /* Network */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__ionic_native_network__["a" /* Network */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* LoadingController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__["a" /* LanguageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_languageService_languageService__["a" /* LanguageService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__["a" /* ParametersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_parametersService_parametersService__["a" /* ParametersService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]) === "function" && _l || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllergyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return AllergyPage;
}());
AllergyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-allergy',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\allergy\allergy.html"*/''/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\allergy\allergy.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], AllergyPage);

//# sourceMappingURL=allergy.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrugPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return DrugPage;
}());
DrugPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-drug',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\drug\drug.html"*/''/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\drug\drug.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], DrugPage);

//# sourceMappingURL=drug.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return FinishPage;
}());
FinishPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finish',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\finish\finish.html"*/''/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\finish\finish.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], FinishPage);

//# sourceMappingURL=finish.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeightWeightPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return HeightWeightPage;
}());
HeightWeightPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-heightweight',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\heightweight\heightweight.html"*/''/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\heightweight\heightweight.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], HeightWeightPage);

//# sourceMappingURL=heightweight.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return JobPage;
}());
JobPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-job',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\job\job.html"*/''/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\job\job.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], JobPage);

//# sourceMappingURL=job.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function ReminderTimePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ReminderTimePage;
}());
ReminderTimePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-remindertime',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\remindertime\remindertime.html"*/''/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\remindertime\remindertime.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ReminderTimePage);

//# sourceMappingURL=remindertime.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RewardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return RewardPage;
}());
RewardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reward',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\reward\reward.html"*/''/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\reward\reward.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], RewardPage);

//# sourceMappingURL=reward.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakingDrugPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function TakingDrugPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return TakingDrugPage;
}());
TakingDrugPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-takingdrug',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\takingdrug\takingdrug.html"*/''/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\introduction\takingdrug\takingdrug.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TakingDrugPage);

//# sourceMappingURL=takingdrug.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function DateTimePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return DateTimePage;
}());
DateTimePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-dateTime',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\dateTime\dateTime.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button id="btnX" ion-button color="light" round icon-only>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n  </button>\n\n\n\n  <ion-item>\n\n        <img id="imgAlly" align="middle" src="assets/img/ally.jpg" style="width:150px;height:200px;">\n\n    </ion-item>\n\n      <p>Wann sind deine Beschwerden aufgetreten?\n\n      </p>\n\n      <ion-item>\n\n        <ion-label>Datum</ion-label>\n\n        <ion-datetime displayFormat="MMM DD, YYYY" [(ngModel)]="myDate">\n\n        </ion-datetime>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Zeit</ion-label>\n\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="myDate"></ion-datetime>\n\n      </ion-item>\n\n      <button id="btnForward" ion-button secondary>Weiter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\dateTime\dateTime.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], DateTimePage);

//# sourceMappingURL=dateTime.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function ComplaintsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ComplaintsPage;
}());
ComplaintsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-complaints',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\complaints\complaints.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button id="btnX" ion-button color="light" round icon-only>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n  </button>\n\n\n\n  <ion-item>\n\n        <!-- img id="imgAlly" align="middle" src="assets/img/ally.jpg" style="width:150px;height:200px;" -->\n\n    </ion-item>\n\n\n\n    <p>Gib bitte spontan an, wie stark deine Beschwerden sind?</p>\n\n          <h5>Augenbeschwerden</h5>\n\n          <p>(Brennen, Jucken, Tränen)</p>\n\n            <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="Augenbeschwerden">\n\n              <ion-label range-left>0</ion-label>\n\n              <ion-label range-right>10</ion-label>\n\n            </ion-range>\n\n          </ion-item>\n\n          <h5>Nasenbeschwerden</h5>\n\n          <p>(Schnupfen, Juckreiz)</p>\n\n          <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="Nasenbeschwerden">\n\n              <ion-label range-left>0</ion-label>\n\n              <ion-label range-right>10</ion-label>\n\n            </ion-range>\n\n          </ion-item>\n\n          <h5>Atembeschwerden</h5>\n\n          <p>(Atemnot, Husten)</p>\n\n          <ion-item>\n\n            <ion-range min="0" max="10" [(ngModel)]="Atembeschwerden">\n\n              <ion-label range-left>0</ion-label>\n\n              <ion-label range-right>10</ion-label>\n\n            </ion-range>\n\n          </ion-item>\n\n      <button id="btnForward" ion-button secondary>Weiter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\complaints\complaints.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ComplaintsPage);

//# sourceMappingURL=complaints.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhysicalActivityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return PhysicalActivityPage;
}());
PhysicalActivityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-physicalActivity',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\physicalActivity\physicalActivity.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button id="btnX" ion-button color="light" round icon-only>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n  </button>\n\n\n\n  <ion-item>\n\n        <!--img id="imgAlly" align="middle" src="assets/img/ally.jpg" style="width:150px;height:200px;"-->\n\n    </ion-item>\n\n\n\n  <p>Wie stark hast Du dich körperlich betätigt?</p>\n\n\n\n  <ion-item>\n\n    <ion-range min="0" max="10" [(ngModel)]="physicalActivity">\n\n      <ion-label range-left>0</ion-label>\n\n      <ion-label range-right>10</ion-label>\n\n    </ion-range>\n\n  </ion-item>\n\n\n\n  <button id="btnForward" ion-button secondary>Weiter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\physicalActivity\physicalActivity.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], PhysicalActivityPage);

//# sourceMappingURL=physicalActivity.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function MedicationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return MedicationPage;
}());
MedicationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-medication',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\medication\medication.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button id="btnX" ion-button color="light" round icon-only>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n  </button>\n\n\n\n  <ion-item>\n\n        <img id="imgAlly" align="middle" src="assets/img/ally.jpg" style="width:150px;height:200px;">\n\n    </ion-item>\n\n\n\n    <p>Hast Du Medikamente eingenommen?</p>\n\n          <ion-list radio-group [(ngModel)]="MedisEingenommen">\n\n            <ion-item>\n\n              <ion-label>Ja</ion-label>\n\n              <ion-radio value="Ja"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Nein</ion-label>\n\n              <ion-radio value="Nein"></ion-radio>\n\n            </ion-item>\n\n          </ion-list>\n\n          <p>Wenn ja ...</p>\n\n          <ion-list radio-group [(ngModel)]="VorbeugendBeschwerden">\n\n            <ion-item>\n\n              <ion-label>Vorbeugend</ion-label>\n\n              <ion-radio value="Vorbeugend"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n              <ion-label>Wegen Beschwerden</ion-label>\n\n              <ion-radio value="wegen Beschwerden"></ion-radio>\n\n            </ion-item>\n\n          </ion-list>\n\n\n\n    <button id="btnForward" ion-button secondary>Weiter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\medication\medication.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], MedicationPage);

//# sourceMappingURL=medication.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createTranslateLoader;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__ = __webpack_require__(526);

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_0__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalPointsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return TotalPointsPage;
}());
TotalPointsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-totalPoints',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\totalPoints\totalPoints.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button id="btnX" ion-button color="light" round icon-only>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n  </button>\n\n\n\n  <ion-item>\n\n        <!-- img id="imgAlly" align="middle" src="assets/img/ally.jpg" style="width:150px;height:200px;"-->\n\n    </ion-item>\n\n\n\n  <p>Vielen Dank! Du hast soeben einen Punkt erhalten. :)</p>\n\n\n\n  <button id="btnForward" ion-button secondary>Weiter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\totalPoints\totalPoints.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TotalPointsPage);

//# sourceMappingURL=totalPoints.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalRewardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdditionalRewardPage = (function () {
    function AdditionalRewardPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AdditionalRewardPage;
}());
AdditionalRewardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-additionalReward',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\additionalReward\additionalReward.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button id="btnX" ion-button color="light" round icon-only>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n  </button>\n\n\n\n  <ion-item>\n\n        <!-- img id="imgAlly" align="middle" src="assets/img/ally.jpg" style="width:150px;height:200px;"-->\n\n    </ion-item>\n\n\n\n  <p>Öffne eine Truhe und hole dir zusätzliche Punkte und einen Tipp.</p>\n\n\n\n  <button id="btnForward" ion-button secondary>Weiter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\additionalReward\additionalReward.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], AdditionalRewardPage);

//# sourceMappingURL=additionalReward.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    return TipsPage;
}());
TipsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tips',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\tips\tips.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Neuer Eintrag</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button id="btnX" ion-button color="light" round icon-only>\n\n    <ion-icon name=\'close\'></ion-icon>\n\n  </button>\n\n\n\n  <ion-item>\n\n        <!--img id="imgAlly" align="middle" src="assets/img/ally.jpg" style="width:150px;height:200px;"-->\n\n    </ion-item>\n\n\n\n    <p>Ich habe deine Daten analysiert. Deine Beschwerden entsprechen\n\n           am ehesten einer Gräserpollenallergie!</p>\n\n         <h1>Mein Tipp:</h1>\n\n         <p>Halte dich wenig draussen auf.</p>\n\n         <p>Wasche dir täglich die Haare.</p>\n\n\n\n    <button id="btnForward" ion-button secondary>Weiter</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\newEntry\tips\tips.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], TipsPage);

//# sourceMappingURL=tips.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(52);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], ParametersService);

//# sourceMappingURL=parametersService.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MidataConnectionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_network__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_secure_storage__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Midata__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Midata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_Midata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__MidataConnectionWrapper__ = __webpack_require__(491);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
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

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overview_overview__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__community_community__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__introduction_introduction__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newEntry_newEntry__ = __webpack_require__(328);
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
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <button ion-button block (click)="pushNewEntryPage()">\n\n    Neuer Eintrag</button>\n\n  <button ion-button block (click)="pushOverviewPage()">\n\n    Übersicht</button>\n\n  <button ion-button block (click)="pushPollenPage()">\n\n   Pollenprognose</button>\n\n  <button ion-button block (click)="pushCommunityPage()">\n\n    Community</button>\n\n    <button ion-button block (click)="pushGamePage()">\n\n      Game</button>\n\n    <button ion-button block (click)="pushIntroductionPage()">\n\n        Einführung</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BloodPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pulseDailyData_pulseDailyData__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validators_pulseValidator__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pulse_measure_pulse_measure__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__(308);
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('chartCanvas'),
    __metadata("design:type", Object)
], BloodPage.prototype, "chartCanvas", void 0);
BloodPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-blood',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\blood\blood.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>{{ \'BLOOD.TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content has-footer no-bounce overflow-scroll=\'false\'>\n\n  <ion-fab right bottom #fab>\n\n    <button ion-fab mini><ion-icon name="add"></ion-icon></button>\n\n    <ion-fab-list side="top">\n\n      <button ion-fab (click)="showPromptMeasure(fab)"><ion-icon name="create"></ion-icon></button>\n\n      <button ion-fab (click)="showTakeMeasure(fab)"><ion-icon name="pulse"></ion-icon></button>\n\n    </ion-fab-list>\n\n  </ion-fab>\n\n  <ion-item>\n\n    <ion-label>{{ \'BLOOD.MYGROUP\' | translate }}</ion-label>\n\n    <ion-select interface="popover">\n\n      <ion-option value="a+">A+</ion-option>\n\n      <ion-option value="a-">A-</ion-option>\n\n      <ion-option value="b+">A+</ion-option>\n\n      <ion-option value="b-">A-</ion-option>\n\n      <ion-option value="o+">O+</ion-option>\n\n      <ion-option value="o-">O-</ion-option>\n\n      <ion-option value="ab">AB-</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-card>\n\n    <ion-card-content>\n\n      <canvas #chartCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-item>\n\n    <ion-label>{{ \'BLOOD.MYMEASURE\' | translate }}</ion-label>\n\n  </ion-item>\n\n    <ion-list [virtualScroll]="dayToBeDisplayed" [headerFn]="getWeeklyHeader" [approxItemHeight]="\'49px\'">\n\n      <ion-item-divider color="light" *virtualHeader="let header">\n\n        {{ header }}\n\n      </ion-item-divider>\n\n      <button ion-item *virtualItem="let day" (click)="showDate(day)">\n\n        <ion-icon name="heart-outline" item-start color="danger"></ion-icon>\n\n        <ion-label>{{formatDate(day)}}</ion-label>\n\n      </button>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\blood\blood.html"*/,
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

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImpressumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_parametersService_parametersService__ = __webpack_require__(61);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-impressum',template:/*ion-inline-start:"C:\Users\Roberto\GitHub\Ally\src\pages\impressum\impressum.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>{{ \'IMPRESSUM.TITLE\' | translate }}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div style="margin-left: 5%; margin-right: 5%; text-align:center;">\n\n      <h3>{{ \'IMPRESSUM.VERSION\' | translate }}</h3>\n\n      <p>{{appVersionNumber}}</p>\n\n      <hr>\n\n\n\n      <h3>{{ \'IMPRESSUM.PUBLISHER\' | translate }}</h3>\n\n      <p>{{ \'IMPRESSUM.PUBLISHERNAME\' | translate }}</p>\n\n      <hr>\n\n\n\n      <h3>{{ \'IMPRESSUM.IMPLEMENTATION\' | translate }}</h3>\n\n      <p><i>{{ \'IMPRESSUM.APP\' | translate }}</i><br>\n\n        {{ \'IMPRESSUM.BFH\' | translate }}<br>\n\n        {{ \'IMPRESSUM.i4mi\' | translate }}</p>\n\n      <p>&nbsp;</p>\n\n      <p><i>{{ \'IMPRESSUM.PLATFORM\' | translate }}</i><br>\n\n        {{ \'IMPRESSUM.ETH\' | translate }}<br>\n\n        {{ \'IMPRESSUM.iis\' | translate }}\n\n      </p>\n\n      <hr>\n\n\n\n      <h3>{{ \'IMPRESSUM.DATA_RETENTION\' | translate }}</h3>\n\n      <p><a href="{{parameters.midataPlatformURL}}">{{parameters.midataPlatformURL}}</a></p>\n\n\n\n      <br>\n\n\n\n      <div style="width: 90%" style="border: 0px;">\n\n        <table>\n\n          <tr>\n\n            <td style="width: 33%">\n\n              <img [src]="parameters.pathLogoBFH">\n\n            </td>\n\n            <td style="width: 33%">\n\n              <img [src]="parameters.pathLogoPublisher">\n\n            </td>\n\n            <td style="width: 33%">\n\n              <img [src]="parameters.pathLogoETH">\n\n            </td>\n\n          </tr>\n\n          <tr>\n\n            <td colspan="3">\n\n              <img [src]="parameters.pathLogoMIDATA">\n\n            </td>\n\n          </tr>\n\n        </table>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Roberto\GitHub\Ally\src\pages\impressum\impressum.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_app_version__["a" /* AppVersion */], __WEBPACK_IMPORTED_MODULE_2__services_parametersService_parametersService__["a" /* ParametersService */]])
], ImpressumPage);

//# sourceMappingURL=impressum.js.map

/***/ })

},[375]);
//# sourceMappingURL=main.js.map
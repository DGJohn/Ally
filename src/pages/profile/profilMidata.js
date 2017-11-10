
// import { ActivityUpdatePage } from './changeValues/activity-update/activity-update';
// import { TreatmentUpdatePage } from './changeValues/treatment-update/treatment-update';
// import { Component, ViewChild, NgZone, ElementRef } from '@angular/core';
// import { NavController, NavParams, AlertController, Content, Platform, ModalController } from 'ionic-angular';
// // import { Storage } from '@ionic/storage';
// import { NativeStorage } from '@ionic-native/native-storage';
// import { Camera, CameraOptions } from '@ionic-native/camera';
// import { MidataConnectionService } from '../../Providers/MidataConnectionServices';
// import { AlertPopupServices } from '../../Providers/AlertPopupServices';
// import { BodyHeight } from 'midata';
// import { FormControl } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
// import { LanguageServices } from '../../Providers/LanguageServices';
// import { Keyboard } from '@ionic-native/keyboard';
// import moment from 'moment';
// import { Globalization } from '@ionic-native/globalization';
// import * as Globals from '../../typings/globals';
// import { STEPSGOAL_MAXVALUE, STEPSGOAL_MINVALUE } from "../../typings/globals";
// import { HeightUpdatePage } from './changeValues/height-update/height-update';
// import { StepsGoalUpdatePage } from './changeValues/stepsGoal-update/stepsGoal-update';
// import { CameraModalPage } from "./camera-modal/camera-modal";

// // import * as $ from 'jquery';

// @Component({
//     selector: 'page-profile',
//     templateUrl: 'profile.html',
// })
// /**
//  * Class to manage the Profile Page
//  */
// export class Profile {
//     @ViewChild(Content) content: Content;
//     /**
//     * Attribute boolean activing or disabling the Steps item.
//     */
//     hideSteps: any;
//     /**
//     * Attribute boolean activing or disabling the Activity item.
//     */
//     hideActivity: any;
//     /**
//     * Attribute boolean activing or disabling the Height item.
//     */
//     hideHeight: any;
//     /**
//     * Attribute boolean activing or disabling the Treatment item.
//     */
//     hideTreatment: any;
//     /**
//     * Array containing the data of the forms
//     */
//     formData: {
//         treatment: ''
//     }
//     /**
//     * Name of the connected user
//     */
//     name: any;
//     /**
//     * Username of the connected user
//     */
//     username: any;
//     /**
//     * Birthdate of the connected user
//     */
//     birthDate: any;
//     /**
//     * String containing the base64 of the photo of the connected user
//     */
//     photo: any;
//     /**
//     * Gender of the connected user
//     */
//     gender: any;
//     /**
//     * Height of the connected user
//     */
//     height: any;
//     /**
//     * Unit of the height of the connected user
//     */
//     heightUnit: any;
//     /**
//     * Treatment of the connected user
//     */
//     treatment: any;
//     /**
//     * Level of activity of the connected user
//     */
//     activityLevel: any;
//     /**
//     * Activity of the connected user
//     */
//     activity: any;
//     /**
//     * Text of the select of possibles activities
//     */
//     activityText: any;
//     /**
//     * Last level of employement date
//     */
//     activityDate: any;
//     /**
//     * Unit of the level of activity of the connected user
//     */
//     activityUnit: any;
//     /**
//     * Goal of the steps of the connected user
//     */
//     stepsGoal: any;
//     /**
//     * Options of activity to be choice by the user
//     */
//     activityOptions: any;
//     /**
//     * Event of the activity form
//     */
//     heightEvent = new FormControl();
//     /**
//     * Initial value of the height of the connected user
//     */
//     heightInitial = true;
//     /**
//     * Event of the steps form
//     */
//     stepsEvent = new FormControl();
//     /**
//     * Initial value og the steps of the connected user
//     */
//     stepsInitial = true;
//     /**
//     * Gender icon of the connected user, saying if the user is female or male
//     */
//     genderIcon: any;

//     user = this.midata.getEvoliUser();

//     activityDisplay: string = '';
//     isActivityLevelText: boolean = false;
//     heightUpdate = HeightUpdatePage;
//     stepsGoalUpdate = StepsGoalUpdatePage;
//     treatmentUpdate = TreatmentUpdatePage;
//     activityUpdate = ActivityUpdatePage;
//     data111;
//     /**
//     * Constructor of the class.
//     * @param plt  Parameter to use the platform of the ionic framework.
//     * @param navCtrl  Parameter to controll the navigation of the page.
//     * @param translate  Parameter to use the provider LanguageServices in order to use the translations service.
//     * @param zone  Parameter to controll the zone of detection of asynchronours events.
//     * @param midata  Parameter to use the provider MidataConnectionService in order to manage the connection to midata.
//     * @param alert  Parameter to use the alert provider. It allow the possibility to show an alert to the user.
//     * @param storage  Parameter to get back the informations stock in the local storage of the device.
//     * @param user  Parameter to use the provider entity User in order to get the informations related to the connected user.
//     */
//     constructor(private globalization: Globalization, private nativeStorage: NativeStorage, public platform: Platform, private zone: NgZone, private translate: LanguageServices, public navCtrl: NavController, public navParams: NavParams, private midata: MidataConnectionService, private alert: AlertPopupServices, private keyboard: Keyboard, private camera: Camera, public modalCtrl: ModalController) {

//         //if URL of the phot is not defined, set the placeholder photo, else set the user photo
//         if (this.user.getPhotoURL() === null || typeof this.user.getPhotoURL() === 'undefined' || this.user.getPhotoURL() === '') {
//             this.photo = 'img/photo.png';
//         } else {
//             this.photo = this.user.getPhotoURL() + '&access_token=' + this.midata.getAuthToken();
//         }
//         //Search for the vales in the user entity
//         this.name = this.user.getName();
//         this.username = this.user.getUsername();
//         this.birthDate = new Date(this.user.getBirthdate());
//         //Translate the gender and set the correct icon corresponding to the gender of the user
//         if (this.user.getGender() === 'male') {
//             this.translate.get('PROFILE.MALE').subscribe(
//                 value => {
//                     this.gender = value;
//                 }
//             );
//             this.genderIcon = 'male';
//         } else {
//             this.translate.get('PROFILE.FEMALE').subscribe(
//                 value => {
//                     this.gender = value;
//                 }
//             );
//             this.genderIcon = 'female';
//         }
//         //Set all the values in the select input
//         this.translate.get(
//             [
//                 'PROFILE.ACTIVITY.INDUSTRY',
//                 'PROFILE.ACTIVITY.WOOD',
//                 'PROFILE.ACTIVITY.OFFICE',
//                 'PROFILE.ACTIVITY.TECHNIC',
//                 'PROFILE.ACTIVITY.MACHINE',
//                 'PROFILE.ACTIVITY.HOSPITALITY',
//                 'PROFILE.ACTIVITY.SALE',
//                 'PROFILE.ACTIVITY.MEDICINE',
//                 'PROFILE.ACTIVITY.HOUSEWIFE',
//                 'PROFILE.ACTIVITY.HOUSEMAN',
//                 'PROFILE.ACTIVITY.OTHERS'
//             ]).subscribe(
//             value => {
//                 if (this.user.getGender() === 'male') {
//                     this.activityOptions = [
//                         { title: value['PROFILE.ACTIVITY.INDUSTRY'], id: '0' },
//                         { title: value['PROFILE.ACTIVITY.WOOD'], id: '1' },
//                         { title: value['PROFILE.ACTIVITY.OFFICE'], id: '2' },
//                         { title: value['PROFILE.ACTIVITY.TECHNIC'], id: '3' },
//                         { title: value['PROFILE.ACTIVITY.MACHINE'], id: '4' },
//                         { title: value['PROFILE.ACTIVITY.HOSPITALITY'], id: '5' },
//                         { title: value['PROFILE.ACTIVITY.SALE'], id: '6' },
//                         { title: value['PROFILE.ACTIVITY.MEDICINE'], id: '7' },
//                         { title: value['PROFILE.ACTIVITY.HOUSEMAN'], id: '8' },
//                         { title: value['PROFILE.ACTIVITY.OTHERS'], id: '9' }
//                     ];
//                 } else {
//                     this.activityOptions = [
//                         { title: value['PROFILE.ACTIVITY.INDUSTRY'], id: '0' },
//                         { title: value['PROFILE.ACTIVITY.WOOD'], id: '1' },
//                         { title: value['PROFILE.ACTIVITY.OFFICE'], id: '2' },
//                         { title: value['PROFILE.ACTIVITY.TECHNIC'], id: '3' },
//                         { title: value['PROFILE.ACTIVITY.MACHINE'], id: '4' },
//                         { title: value['PROFILE.ACTIVITY.HOSPITALITY'], id: '5' },
//                         { title: value['PROFILE.ACTIVITY.SALE'], id: '6' },
//                         { title: value['PROFILE.ACTIVITY.MEDICINE'], id: '7' },
//                         { title: value['PROFILE.ACTIVITY.HOUSEWIFE'], id: '8' },
//                         { title: value['PROFILE.ACTIVITY.OTHERS'], id: '9' }
//                     ];
//                 }

//             }
//             );

//         this.getActivityLevel();
//         // this.presentProfileModal();
//     }

//     openBasicModal() {

//     }

//     ionViewDidEnter() {

//         //Use the height in cm, transforn m to cm if needed
//         if (this.user.getHeightUnit() === 'm') {
//             this.height = parseInt(this.user.getHeight());
//         } else if (this.user.getHeightUnit() === 'cm') {
//             this.height = this.user.getHeight();
//         } else {
//             this.height = 0;
//         }
//         console.log(this.user.getLastStepsGoal())
//         if (this.user.getLastStepsGoal()) {
//             this.stepsGoal = this.user.getLastStepsGoal();
//         } else {
//             this.stepsGoal = 0;
//         }
//         this.treatment = this.user.getLastTreatment();
//         this.getActivityLevel();
//     }
//     getActivityLevel() {
//         this.activityLevel = this.user.getLevelOfEmployement();

//         if (this.activityLevel === 'retired') {
//             this.translate.get('PROFILE.RETIREMENT').subscribe((value) => {
//                 this.isActivityLevelText = true;
//                 this.activityLevel = value;
//                 this.getActivityDisplay();
//             });
//         }
//         else if (this.activityLevel === 'invalid') {
//             this.translate.get('PROFILE.INVALID').subscribe((value) => {
//                 this.isActivityLevelText = true;
//                 this.activityLevel = value;
//                 this.getActivityDisplay();
//             });
//         } else {
//             this.isActivityLevelText = false;
//             this.getActivityDisplay();
//         }
//     }

//     getActivityDisplay() {
//         this.activity = this.user.getActivityField();
//         this.activityDate = this.user.getLevelOfEmployementDate();
//         if (this.activityDate === '') {
//             this.activityDate = new Date().toISOString();
//         }
//         this.activityUnit = this.user.getLevelOfEmployementUnit();
//         this.globalization.dateToString(new Date(this.activityDate), { formatLength: 'full', selector: 'date' })
//             .then(res => {
//                 let activityField;
//                 if (this.activity !== '' && typeof this.activity !== 'undefined') {
//                     activityField = this.activityOptions[this.activity].title;
//                 }
//                 if ((typeof this.activityLevel !== 'undefined' && this.activityLevel.length > 0) || (typeof this.activityLevel !== 'undefined' && this.activityLevel > 0)) {
//                     if (typeof this.activity !== 'undefined' && this.activity.length > 0 && this.activity > -1 && this.activity !== '') {
//                         this.zone.run(() => {
//                             if (this.isActivityLevelText) {
//                                 this.activityDisplay = this.activityLevel + ', ' + res.value;
//                             } else {
//                                 this.activityDisplay = this.activityLevel + '%' + ', ' + res.value + ', ' + activityField;
//                             }

//                         });
//                     } else {
//                         this.zone.run(() => {
//                             if (this.isActivityLevelText) {
//                                 this.activityDisplay = this.activityLevel + ', ' + res.value;
//                             } else {
//                                 // this.activityDisplay = this.activityLevel + '%' + ', ' + res.value + ', ' + activityField;
//                                 this.activityDisplay = this.activityLevel + '%' + ', ' + res.value;
//                             }
//                         });
//                     }
//                 } else {
//                     if (typeof this.activity !== 'undefined' && this.activity.length > 0) {
//                         this.zone.run(() => {
//                             this.activityDisplay = activityField;
//                         });
//                     } else {
//                         this.zone.run(() => {
//                             this.activityDisplay = '';
//                         });
//                     }
//                 }
//             })
//             .catch(e => {
//                 this.zone.run(() => {
//                     let activityField;
//                     if (this.activity !== '' && typeof this.activity !== 'undefined') {
//                         activityField = this.activityOptions[this.activity].title;
//                     }
//                     if (this.activityLevel.length === 0 && this.activityDate.length === 0 && this.activity.length > 0) {
//                         this.activityDisplay = activityField;
//                     }
//                     if (this.activityLevel.length === 0 && this.activityDate.length === 0 && this.activity.length === 0) {
//                         this.activityDisplay = '';
//                     }
//                 });
//             }
//             );
//     }

//     keyDownFunction(event) {
//         if (event.keyCode == 9) {
//             this.keyboard.close();
//             return false;
//         }
//     }

//     /**
//     * //Choice the photo from the device library
//     */
//     choicePhoto() {
//         // if (this.midata.getConnectionState()) {
//         //     //The photo is being created
//         //     this.nativeStorage.setItem('photoClick', true);
//         //     //Set the option of the photo which has to be savec
//         //     var options = {
//         //         quality: 100, //maximal resolution
//         //         destinationType: this.camera.DestinationType.FILE_URI, //Stock the photo in an URL
//         //         sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, //Take the photo from device library
//         //         encodingType: this.camera.EncodingType.PNG
//         //         , //Format of encoding the photo
//         //         allowEdit: true,
//         //         targetWidth: 200, //Width of the photo
//         //         targetHeight: 200, //Height of the photo
//         //         correctOrientation: true //Orientate the photo in portrait mode
//         //     };

//         //     //Use the plugin to get the picture from midata
//         //     this.camera.getPicture(options).then(
//         //         (imageData) => {
//         //             let base64Image = imageData;
//         //             // this.openBasicModal();
//         //             let myModal = this.modalCtrl.create(CameraModalPage, { 'image': imageData });
//         //             myModal.onDidDismiss(data => {
//         //                 let mediaPhoto = {
//         //                     "resourceType": "Media",
//         //                     "type": "photo",
//         //                     "subtype": {
//         //                         "coding": [
//         //                             {
//         //                                 "system": Globals.MEDIA.system,
//         //                                 "code": Globals.MEDIA.code
//         //                             }
//         //                         ]
//         //                     },
//         //                     "device": {
//         //                         "display": "Evoli App"
//         //                     },
//         //                     "height": 200,
//         //                     "width": 200,
//         //                     "frames": 1,
//         //                     "content": {
//         //                         "contentType": "image/jpeg",
//         //                         "data": data.data.substring(23),
//         //                         "creation": new Date(),
//         //                         "title": "Personal Photo"
//         //                     }
//         //                 }
//         //                 //Save the base64 photo to midata
//         //                 this.midata.save(mediaPhoto).map(() => { }).subscribe(() => {
//         //                     this.midata.updatePhoto().subscribe(() => {
//         //                         this.zone.run(() => {
//         //                             this.photo = this.user.getPhotoURL() + '&access_token=' + this.midata.getAuthToken();
//         //                         });

//         //                     });
//         //                 });
//         //             });
//         //             myModal.present();

//         //             this.nativeStorage.setItem('photoClick', false);
//         //         },
//         //         (error) => {
//         //             this.nativeStorage.setItem('photoClick', false);
//         //         });
//         // } else {
//         //     //If the value is blank or undefined, an alert say to the user
//         //     this.translate.get('NO_CONNECTION').subscribe(
//         //         value => {
//         //             this.alert.showAlert(value, '');
//         //         }
//         //     );
//         // }
//     }


//     /**
//     * The user has clicked on the photo or placeholder
//     */
//     imageClick() {
//     //     if (this.midata.getConnectionState()) {
//     //         //If photo isn't defined, set a placeholder
//     //         if (typeof this.user.getPhoto() !== 'undefined' && this.user.getPhoto() !== '') {
//     //             if (this.user.getPhoto().content.title === 'Placeholder') {
//     //                 this.choicePhoto();
//     //             } else {
//     //                 //An alert with 3 buttons is setted, delete, add or do nothing.
//     //                 this.translate.get(['PROFILE.ALERT.TITLE_PHOTO_UPDATE', 'PROFILE.ALERT.QUESTION_PHOTO_UPDATE', 'PROFILE.BUTTON.DELETE', 'PROFILE.BUTTON.ADD', 'PROFILE.BUTTON.CANCEL']).subscribe(
//     //                     value => {
//     //                         let placeholder = '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';
//     //                         let deleteButton =
//     //                             {
//     //                                 text: value['PROFILE.BUTTON.DELETE'],
//     //                                 handler: () => {
//     //                                     let mediaPhoto = {
//     //                                         "resourceType": "Media",
//     //                                         "type": "photo",
//     //                                         "subtype": {
//     //                                             "coding": [
//     //                                                 {
//     //                                                     "system": Globals.MEDIA.system,
//     //                                                     "code": Globals.MEDIA.code
//     //                                                 }
//     //                                             ]
//     //                                         },
//     //                                         "device": {
//     //                                             "display": "Evoli App"
//     //                                         },
//     //                                         "height": 200,
//     //                                         "width": 200,
//     //                                         "frames": 1,
//     //                                         "content": {
//     //                                             "contentType": "image/png",
//     //                                             "data": placeholder,
//     //                                             "creation": new Date(),
//     //                                             "title": "Placeholder"
//     //                                         }
//     //                                     }
//     //                                     this.midata.save(mediaPhoto).map(() => { }).subscribe(() => {
//     //                                         this.midata.updatePhoto().subscribe(() => {
//     //                                             this.zone.run(() => {
//     //                                                 this.photo = this.user.getPhotoURL() + '&access_token=' + this.midata.getAuthToken();
//     //                                             });
//     //                                         });
//     //                                     });
//     //                                 }
//     //                             }
//     //                         let addButton =
//     //                             {
//     //                                 text: value['PROFILE.BUTTON.ADD'],
//     //                                 handler: () => {
//     //                                     this.choicePhoto();
//     //                                 }
//     //                             };
//     //                         let cancelButton =
//     //                             {
//     //                                 text: value['PROFILE.BUTTON.CANCEL'],
//     //                                 handler: () => {
//     //                                 }
//     //                             };
//     //                         this.alert.showConfirm(value['PROFILE.ALERT.TITLE_PHOTO_UPDATE'], value['PROFILE.ALERT.QUESTION_PHOTO_UPDATE'], [deleteButton, addButton, cancelButton], false);
//     //                     }
//     //                 );

//     //             }
//     //         } else {
//     //             this.choicePhoto();
//     //         }
//     //     } else {
//     //         //If the value is blank or undefined, an alert say to the user
//     //         this.translate.get('NO_CONNECTION').subscribe(
//     //             value => {
//     //                 this.alert.showAlert(value, '');
//     //             }
//     //         );
//     //     }  
//     // }


// }

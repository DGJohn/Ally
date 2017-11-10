import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization';
import { NativeStorage } from '@ionic-native/native-storage';

@Injectable()
export class LanguageService {
	private _language: string;
 	public readonly availableLanguages = [{
		code: 'en',
		name: 'English'
	}, {
		code: 'de',
		name: 'Deutsch'
	}, {
		code: 'fr',
		name: 'Français'
	}];
	public readonly defaultLanguage = 'en';

    constructor(public platform: Platform,
    	private nativeStorage: NativeStorage,
    	private translate: TranslateService,
    	private globalization: Globalization) {
    }

    get language():string{
    	return this._language;
    }

    set language(language:string){
    	this._language = language;
		this.nativeStorage.setItem("lang", language)
		this.translate.use(language);
    }

    init(){
    	this.translate.setDefaultLang(this.defaultLanguage);

		this.nativeStorage.getItem('lang').then((lang) => {
			if(this.languageAvailable(lang))
				this.language = lang;
			else
				this.determineLanguage();
		}).catch((error) => {
			this.determineLanguage();
		});
    }

    languageAvailable(language:string){
    	return this.availableLanguages.some(x => x.code == language);
    }

    determineLanguage(){
    	if (!this.platform.is('browser')) {
			this.globalization.getPreferredLanguage().then(result => {
				var language = this.getSuitableLanguage(result.value);
				this.language = language;
			}).catch(() => {
				this.language = this.defaultLanguage;
			});
		} else {
			this.language = this.getSuitableLanguage(this.translate.getBrowserLang());
		}
    }

    getSuitableLanguage(language) {
		language = language.substring(0, 2).toLowerCase();
		return this.languageAvailable(language) ? language : this.defaultLanguage;
	}

}
import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MidataConnectionService } from '../../services/MidataConnectionService'
import { ModalService } from '../../services/ModalService'
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(
      public navCtrl: NavController,
      private loadingCtrl: LoadingController,
      private modalService: ModalService,
      private inAppBrowser: InAppBrowser,
      private midataConnectionService: MidataConnectionService) {
  }

  register(){
    this.inAppBrowser.create('https://test.midata.coop/#/portal/registration');
  }

  visitMidata(){
    this.inAppBrowser.create('https://midata.coop');
  }

  login() {
    let loading = this.loadingCtrl.create({
      content: 'Bitte warten...' // TODO: Translate
    });

    this.midataConnectionService.ensureConnection()
      .then(() => {
        loading.present();
      }, () => {
        this.modalService.showNoInternet();
        return Promise.reject('');
      })
      .then(() => {
        return this.midataConnectionService.getConnection().fetchFHIRConformanceStatement()
      })
      .then(() => {
        return this.midataConnectionService.loginOAuth(true)
      })
      .then(() => {
        this.navCtrl.setRoot(HomePage, undefined, undefined, () => {
          loading.dismiss();
        });
      })
      .catch(() => {
        loading.dismiss();
      });
  }
}

import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TotalPointsPage } from '../totalPoints/totalPoints';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html'
})
export class MedicationPage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
  }

  pushTotalPointsPage() {
    this.navCtrl.push(TotalPointsPage)
  }
/**
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
*/
presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Dein neuer Eintrag wurde gespeichert!',
    duration: 3000,
    position: 'bottom'
});

toast.onDidDismiss(() => {
  console.log('Dismissed toast');
});

toast.present();
}
}

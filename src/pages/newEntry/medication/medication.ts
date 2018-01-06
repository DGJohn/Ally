import { Component } from '@angular/core';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { TotalPointsPage } from '../totalPoints/totalPoints';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html'
})
export class MedicationPage {

  public isDisabled: boolean = true;
  questionMedication: any = {};

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private alertCtrl: AlertController) {
    this.questionMedication = false;
  }

    change(val: any) {
    if (val)
      this.openRadioPopUp()
    }

  openRadioPopUp(){
      let alert = this.alertCtrl.create();
      alert.setTitle('Medikamente');

      alert.addInput({
        type: 'radio',
        label: 'Vorbeugend',
        value: 'vorbeugend',
        checked: true
      });

      alert.addInput({
        type: 'radio',
        label: 'Wegen Beschwerden',
        value: 'beschwerden'
      });

      alert.addButton('Abbrechen');
      alert.addButton({
        text: 'Ok',
        handler: (data: any) => {
          console.log('Radio data:', data);
        }
      });
      alert.present();
  }

  pushTotalPointsPage() {
    this.navCtrl.push(TotalPointsPage)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

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

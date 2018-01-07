import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedicationPage } from '../medication/medication';
import { HomePage } from '../../../pages/home/home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-physicalActivity',
  templateUrl: 'physicalActivity.html'
})
export class PhysicalActivityPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  showInfo() {
    let confirm = this.alertCtrl.create({
      title: 'Körperliche Aktivität',
      message: '0 bedeutet keine körperliche Aktivität und 15 bedeutet maximale körperliche Aktivität',
      buttons: [
        {
          text: 'Verstanden',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
      ]
    });
    confirm.present();
  }


  pushMedicationPage() {
    this.navCtrl.push(MedicationPage)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

}

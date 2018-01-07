import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhysicalActivityPage } from '../physicalActivity/physicalActivity';
import { HomePage } from '../../../pages/home/home';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html'
})
export class ComplaintsPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  pushPhysicalActivityPage() {
    this.navCtrl.push(PhysicalActivityPage)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

  showInfoBeschwerden() {
    let confirm = this.alertCtrl.create({
      title: 'Beschwerden',
      message: '0 bedeutet keine Beschwerden und 15 bedeutet stärkste vorstellbare Beschwerden',
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

showInfoAugenbeschwerden() {
  let confirm = this.alertCtrl.create({
    title: 'Augenbeschwerden',
    message: '0 bedeutet keine Augenbeschwerden und 15 bedeutet stärkste vorstellbare Augenbeschwerden',
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

showInfoNasenbeschwerden() {
  let confirm = this.alertCtrl.create({
    title: 'Nasenbeschwerden',
    message: '0 bedeutet keine Nasenbeschwerden und 15 bedeutet stärkste vorstellbare Nasenbeschwerden',
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

showInfoAtembeschwerden() {
  let confirm = this.alertCtrl.create({
    title: 'Atembeschwerden',
    message: '0 bedeutet keine Atembeschwerden und 15 bedeutet stärkste vorstellbare Atembeschwerden',
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
}

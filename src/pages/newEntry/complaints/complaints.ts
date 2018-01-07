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

showInfoAugenbeschwerden() {
  let confirm = this.alertCtrl.create({
    title: 'Augenbeschwerden',
    message: '0 bedeutet keine Augenbeschwerden und 15 bedeutet stärkste vorstellbare Beschwerden',
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
    message: '0 bedeutet keine Augenbeschwerden und 15 bedeutet stärkste vorstellbare Beschwerden',
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
    message: '0 bedeutet keine Augenbeschwerden und 15 bedeutet stärkste vorstellbare Beschwerden',
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

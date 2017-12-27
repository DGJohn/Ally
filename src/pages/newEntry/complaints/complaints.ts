import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhysicalActivityPage } from '../physicalActivity/physicalActivity';
//import { HomePage } from '../home/home';
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
/**
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
*/
showInfoAugenbeschwerden() {
  let confirm = this.alertCtrl.create({
    title: 'Augenbeschwerden',
    message: 'Brennende Augen können harmlose Ursachen haben, die (meist) von alleine wieder verschwinden. Augenbrennen ist mitunter aber auch Ausdruck verschiedener Erkrankungen, die einer Behandlung bedürfen. Wer bereits längere Zeit unter Augenbrennen leidet und zusätzlich andere Beschwerden oder Schmerzen hat, sollte deshalb zum Arzt gehen.',
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
    message: 'Unsere Nase kann Gerüche aufnehmen und verarbeiten, Atemluft reinigen und befeuchten sowie eingeatmete Erreger und Partikel abtransportieren. Durch verschiedene Nasenbeschwerden wie Nasenscheidewandverkrümmung oder Nasenbruch sowie aufgrund von Allergien, kann es zu Einschränkungen dieser Funktionen kommen.',
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
    message: 'Es gibt viele Ursachen für akute und chronische Atembeschwerden. Die Behandlung dieses Symptoms gehört grundsätzlich in die Hand eines Arztes. Atembeschwerden können anfallartig oder auch permanent auftreten.',
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

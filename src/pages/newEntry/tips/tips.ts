import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html'
})
export class TipsPage {

  constructor(public navCtrl: NavController) {
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
}

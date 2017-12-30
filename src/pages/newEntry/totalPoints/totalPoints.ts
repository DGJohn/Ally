import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipsPage } from '../tips/tips';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-totalPoints',
  templateUrl: 'totalPoints.html'
})
export class TotalPointsPage {

  constructor(public navCtrl: NavController) {
  }

  pushTipsPage() {
    this.navCtrl.push(TipsPage)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

}

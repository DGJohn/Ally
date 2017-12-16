import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipsPage } from '../tips/tips';
//import { HomePage } from '../home/home';


@Component({
  selector: 'page-additionalReward',
  templateUrl: 'additionalReward.html'
})
export class AdditionalRewardPage {

  constructor(public navCtrl: NavController) {
  }

  pushTipsPage() {
    this.navCtrl.push(TipsPage)
  }
/**
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
*/
}

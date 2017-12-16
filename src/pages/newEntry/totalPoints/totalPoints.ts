import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdditionalRewardPage } from '../additionalReward/additionalReward';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-totalPoints',
  templateUrl: 'totalPoints.html'
})
export class TotalPointsPage {

  constructor(public navCtrl: NavController) {
  }

  pushAdditionalRewardPage() {
    this.navCtrl.push(AdditionalRewardPage)
  }

/**  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
*/
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RewardPage } from '../introduction/reward/reward';

@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html'
})
export class IntroductionPage {

  constructor(public navCtrl: NavController) {
  }

  pushRewardPage() {
    this.navCtrl.push(RewardPage)
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeightWeightPage } from '../heightweight/heightweight';

@Component({
  selector: 'page-reward',
  templateUrl: 'reward.html'
})
export class RewardPage {

  constructor(public navCtrl: NavController) {
  }

  pushHeightWeightPage() {
    this.navCtrl.push(HeightWeightPage)
  }
}

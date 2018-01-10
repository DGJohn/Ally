import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RewardPage } from '../introduction/reward/reward';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html'
})
export class IntroductionPage {

  tabBarElement : any;

  constructor(public navCtrl: NavController) {

  }



  pushRewardPage() {
    this.navCtrl.push(RewardPage)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RewardPage } from '../introduction/reward/reward';

@Component({
  selector: 'page-introduction',
  templateUrl: 'introduction.html'
})
export class IntroductionPage {

  tabBarElement : any;

  constructor(public navCtrl: NavController) {
    this.tabBarElement = document.querySelector ('.tabbar.show-tabbar');

  }
 ionViewWillEnter()
 {
     this.tabBarElement.style.display = 'none';
 }


  pushRewardPage() {
    this.navCtrl.push(RewardPage)
  }
}

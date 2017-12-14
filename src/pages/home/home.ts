import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OverviewPage } from '../overview/overview';
import { CommunityPage } from '../community/community';
import { IntroductionPage } from '../introduction/introduction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

pushOverviewPage() {
  this.navCtrl.push(OverviewPage)
}

pushCommunityPage() {
  this.navCtrl.push(CommunityPage)
}

pushIntroductionPage() {
  this.navCtrl.push(IntroductionPage)
}
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OverviewPage } from '../overview/overview';
import { CommunityPage } from '../community/community';
import { IntroductionPage } from '../introduction/introduction';
import { NewEntryPage } from '../newEntry/newEntry';
import { PollenPage } from '../pollen/pollen';
import { GamePage } from '../game/game';

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

pushNewEntryPage() {
  this.navCtrl.push(NewEntryPage)
}

pushPollenPage() {
  this.navCtrl.push(PollenPage)
}

pushGamePage() {
  this.navCtrl.push(GamePage)
}
}

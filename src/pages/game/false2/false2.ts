import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Question3Page } from '../question3/question3';
import { HomePage } from '../../../pages/home/home';


@Component({
  selector: 'page-false2',
  templateUrl: 'false2.html',
})
export class False2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClick() {
    this.navCtrl.push(Question3Page);
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Question4Page } from '../question4/question4';
import { HomePage } from '../../../pages/home/home';


@Component({
  selector: 'page-false3',
  templateUrl: 'false3.html',
})
export class False3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClick() {
    this.navCtrl.push(Question4Page);
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

}

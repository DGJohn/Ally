import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Question2Page } from '../question2/question2';



@Component({
  selector: 'page-right1',
  templateUrl: 'right1.html',
})
export class Right1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClick() {
    this.navCtrl.push(Question2Page);
  }

}

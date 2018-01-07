import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Question3Page } from '../question3/question3';
import { HomePage } from '../../../pages/home/home';



@Component({
  selector: 'page-right2',
  templateUrl: 'right2.html',
})
export class Right2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClick() {
    this.navCtrl.push(Question3Page);
  }
  
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

}

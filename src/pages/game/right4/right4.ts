import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';


@Component({
  selector: 'page-right4',
  templateUrl: 'right4.html',
})
export class Right4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClick() {
    this.navCtrl.push(HomePage);
  }

}

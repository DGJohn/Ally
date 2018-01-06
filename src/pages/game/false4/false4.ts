import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../home/home';


@Component({
  selector: 'page-false4',
  templateUrl: 'false4.html',
})
export class False4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClick() {
    this.navCtrl.push(HomePage);
  }

}

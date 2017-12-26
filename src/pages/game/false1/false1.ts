import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Question2Page } from '../question2/question2';



@Component({
  selector: 'page-false1',
  templateUrl: 'false1.html',
})
export class False1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onClick() {
    this.navCtrl.push(Question2Page);
  }

}

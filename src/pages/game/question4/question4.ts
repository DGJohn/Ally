import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Right4Page } from '../right4/right4';
import { False4Page } from '../false4/false4';



@Component({
  selector: 'page-question4',
  templateUrl: 'question4.html',
})
export class Question4Page {

  frage: string = "Welche Pollenallergie tritt am häufigsten auf?";
  rightAnswer: string = "answer1"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  onClick() {
    console.log("TEST");
    this.navCtrl.pop();

  }

  onSelect(selected: any) {
    console.log(selected);
    if (selected.value === this.rightAnswer) {
      console.log("RICHTIG");
      this.navCtrl.push(Right4Page);
    } else {
      console.log("FALSCH");
      this.navCtrl.push(False4Page);
    }
  }

}



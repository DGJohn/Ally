import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Right3Page } from '../right3/right3';
import { False3Page } from '../false3/false3';



@Component({
  selector: 'page-question3',
  templateUrl: 'question3.html',
})
export class Question3Page {

  frage: string = "Was blüht im April und Mai?";
  rightAnswer: string = "answer2"

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
      this.navCtrl.push(Right3Page);
    } else {
      console.log("FALSCH");
      this.navCtrl.push(False3Page);
    }
  }

}



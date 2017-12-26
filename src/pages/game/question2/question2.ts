import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Right2Page } from '../right2/right2';
import { False2Page } from '../false2/false2';



@Component({
  selector: 'page-question2',
  templateUrl: 'question2.html',
})
export class Question2Page {

  frage: string = "Ist Heuschnupfen eine ansteckende Krankheit?";
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
      this.navCtrl.push(Right2Page);
    } else {
      console.log("FALSCH");
      this.navCtrl.push(False2Page);
    }
  }

}



import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RightPage } from '../right/right';


@IonicPage()
@Component({
  selector: 'page-question1',
  templateUrl: 'question1.html',
})
export class Question1Page {

  frage: string = "Wie heissen die Medikamente, die bei Allergien angewendet werden?";
  rightAnswer : string = "answer1"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  onClick(){
    console.log("TEST");
    this.navCtrl.pop();

  }

  onSelect(selected: any){
console.log(selected);
if(selected.value === this.rightAnswer){
  console.log("RICHTIG");
  this.navCtrl.push(RightPage);
    } else {
  console.log("FALSCH");
  // TODO: Push other Page
    }
  }

}



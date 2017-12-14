import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RightPage } from '../right/right';

@IonicPage()
@Component({
  selector: 'page-question4',
  templateUrl: 'question4.html',
})
export class Question4Page {

  frage: string = "Welche Pollenallergie tritt am häufigsten auf?";
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

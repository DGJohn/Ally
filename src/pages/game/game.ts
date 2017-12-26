import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Question1Page } from '../../pages/game/question1/question1';


@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  constructor(public navCtrl: NavController) {

  }

  onNext1() {
    this.navCtrl.push(Question1Page);
  }

  


}

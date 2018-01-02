import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html'
})
export class FinishPage {


  constructor(public navCtrl: NavController) {

}
pushHomePage() {
  this.navCtrl.push(HomePage)
}
}

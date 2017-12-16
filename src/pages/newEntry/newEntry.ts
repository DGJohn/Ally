import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DateTimePage } from '../newEntry/dateTime/dateTime';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-newEntry',
  templateUrl: 'newEntry.html'
})
export class NewEntryPage {

  constructor(public navCtrl: NavController) {
  }

  pushDateTimePage() {
    this.navCtrl.push(DateTimePage)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

}

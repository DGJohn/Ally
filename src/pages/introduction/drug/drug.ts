import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReminderTimePage } from '../remindertime/remindertime';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-drug',
  templateUrl: 'drug.html'
})
export class DrugPage {

  constructor(public navCtrl: NavController) {
  }

  pushReminderTimePage() {
    this.navCtrl.push(ReminderTimePage)
}
pushHomePage() {
  this.navCtrl.push(HomePage)
}
}

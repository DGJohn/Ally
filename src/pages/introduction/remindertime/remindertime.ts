import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinishPage } from '../finish/finish';

@Component({
  selector: 'page-remindertime',
  templateUrl: 'remindertime.html'
})
export class ReminderTimePage {

  constructor(public navCtrl: NavController) {
  }

  pushFinishPage() {
    this.navCtrl.push(FinishPage)
}
}

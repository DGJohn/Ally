import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinishPage } from '../finish/finish';

@Component({
  selector: 'page-remindertime',
  templateUrl: 'remindertime.html'
})
export class ReminderTimePage {

date : any = new Date();

  constructor(public navCtrl: NavController, private zone: NgZone) {

    this.date.setHours(this.date.getHours() + 1)
    this.date = this.date.toISOString();


  }

  pushFinishPage() {
    this.navCtrl.push(FinishPage)
}
}

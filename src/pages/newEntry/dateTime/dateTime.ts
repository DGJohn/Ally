import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComplaintsPage } from '../complaints/complaints';
//import { HomePage } from '@home/home';

@Component({
  selector: 'page-dateTime',
  templateUrl: 'dateTime.html'
})
export class DateTimePage {

  date : any = new Date();

  constructor(public navCtrl: NavController, private zone: NgZone) {

    this.date.setHours(this.date.getHours() +1)
    this.date = this.date.toISOString();
  }

  pushComplaintsPage() {
    this.navCtrl.push(ComplaintsPage)
  }


/**
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
*/
}

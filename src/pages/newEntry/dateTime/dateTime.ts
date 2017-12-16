import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ComplaintsPage } from '../complaints/complaints';
//import { HomePage } from '../pages/home/home';

@Component({
  selector: 'page-dateTime',
  templateUrl: 'dateTime.html'
})
export class DateTimePage {

  constructor(public navCtrl: NavController) {
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

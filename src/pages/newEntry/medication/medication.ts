import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TotalPointsPage } from '../totalPoints/totalPoints';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html'
})
export class MedicationPage {

  constructor(public navCtrl: NavController) {
  }

  pushTotalPointsPage() {
    this.navCtrl.push(TotalPointsPage)
  }


/**
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
*/
}

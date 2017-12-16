import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MedicationPage } from '../medication/medication';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-physicalActivity',
  templateUrl: 'physicalActivity.html'
})
export class PhysicalActivityPage {

  constructor(public navCtrl: NavController) {
  }

  pushMedicationPage() {
    this.navCtrl.push(MedicationPage)
  }
/**
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
*/
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhysicalActivityPage } from '../physicalActivity/physicalActivity';
//import { HomePage } from '../home/home';

@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html'
})
export class ComplaintsPage {

  constructor(public navCtrl: NavController) {
  }

  pushPhysicalActivityPage() {
    this.navCtrl.push(PhysicalActivityPage)
  }
/**
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
*/
}

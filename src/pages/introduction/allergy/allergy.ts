import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TakingDrugPage } from '../takingdrug/takingdrug';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-allergy',
  templateUrl: 'allergy.html'
})
export class AllergyPage {

  constructor(public navCtrl: NavController) {
  }

  pushTakingDrugPage() {
    this.navCtrl.push(TakingDrugPage)
}
pushHomePage() {
  this.navCtrl.push(HomePage)
}
}

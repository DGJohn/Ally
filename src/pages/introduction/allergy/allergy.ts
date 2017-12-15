import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TakingDrugPage } from '../takingdrug/takingdrug';

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
}

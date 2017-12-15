import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DrugPage } from '../drug/drug';

@Component({
  selector: 'page-takingdrug',
  templateUrl: 'takingdrug.html'
})
export class TakingDrugPage {

  constructor(public navCtrl: NavController) {
  }

  pushDrugPage() {
    this.navCtrl.push(DrugPage)
  }
}

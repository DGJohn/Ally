import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AllergyPage } from '../allergy/allergy';

@Component({
  selector: 'page-job',
  templateUrl: 'job.html'
})
export class JobPage {

  constructor(public navCtrl: NavController) {
  }


  pushAllergyPage() {
    this.navCtrl.push(AllergyPage)
}
}

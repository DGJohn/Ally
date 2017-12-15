import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobPage } from '../job/job';

@Component({
  selector: 'page-heightweight',
  templateUrl: 'heightweight.html'
})
export class HeightWeightPage {

  constructor(public navCtrl: NavController) {
  }

  pushJobPage() {
    this.navCtrl.push(JobPage)
}
}

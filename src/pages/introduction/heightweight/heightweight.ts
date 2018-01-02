import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobPage } from '../job/job';
import { HomePage } from '../../../pages/home/home';

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
pushHomePage() {
  this.navCtrl.push(HomePage)
}
}

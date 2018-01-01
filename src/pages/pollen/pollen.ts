import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-pollen',
  templateUrl: 'pollen.html'
})
export class PollenPage {
  orte:string = "aktuellerOrt";
  constructor(public navCtrl: NavController) {
  }

  selectedCurrentLocation() {

  }

  selectedBern() {

  }

  selectedBiel() {

  }

}

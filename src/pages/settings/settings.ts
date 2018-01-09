import { Component, NgZone} from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  date : any = new Date();

  constructor(public navCtrl: NavController, private zone: NgZone) {

    this.date = "18:00"
  }


}

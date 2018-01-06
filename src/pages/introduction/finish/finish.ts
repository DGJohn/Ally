import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../../pages/tabs/tabs';

@Component({
  selector: 'page-finish',
  templateUrl: 'finish.html'
})
export class FinishPage {


  constructor(public navCtrl: NavController) {

}
pushTabsPage() {
  this.navCtrl.push(TabsPage)
}
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DrugPage } from '../drug/drug';
import { HCIService } from '../../../services/HCIService';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-takingdrug',
  templateUrl: 'takingdrug.html'
})
export class TakingDrugPage {

  constructor(public navCtrl: NavController, private hciService: HCIService) {

  }

  _getProduct(){
    this.hciService.getProduct().then(response=>{
      console.log(response);
    }, error=>{
      console.log(error);
    });
  }

  pushDrugPage() {
    this.navCtrl.push(DrugPage)
  }
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
}

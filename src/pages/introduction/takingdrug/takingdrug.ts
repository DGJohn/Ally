import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { DrugPage } from '../drug/drug';
import { HCIService } from '../../../services/HCIService';
import { HomePage } from '../../../pages/home/home';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-takingdrug',
  templateUrl: 'takingdrug.html'
})
export class TakingDrugPage {
  description: String;
  val: any;

  constructor(public navCtrl: NavController, private hciService: HCIService, private barcodeScanner: BarcodeScanner) {
    this.description = "";
  }

  // Search by name
  getDSCRD() {
   return this.hciService.getData(this.description, 'hospINDEX', 'DSCRD');
  }

  // Open Scanner
  scanBarcode() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.getBarCode(barcodeData.text);
    }, (err) => {
      console.log(err);
    });
  }

  // Search by barcode
  getBarCode(barCodeVal) {
    return this.hciService.getData(barCodeVal, 'hospINDEX', 'ARTBAR');
  }

  pushDrugPage() {
    this.navCtrl.push(DrugPage)
  }
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
}

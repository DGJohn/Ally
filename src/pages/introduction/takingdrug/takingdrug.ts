import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ReminderTimePage } from '../remindertime/remindertime';
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

  constructor(public navCtrl: NavController, private hciService: HCIService, private barcodeScanner: BarcodeScanner, private alertCtrl: AlertController) {
    this.description = "";
  }

  // Search by name
     getDSCRD(){
       this.val = this.hciService.getData(this.description, 'hospINDEX', 'DSCRD');
     }

     // Open Scanner
     scanBarcode(){
       this.barcodeScanner.scan().then((barcodeData) => {
         // Success! Barcode data is here
         this.getBarCode(barcodeData.text);
         this.showProduct();
        }, (err) => {
          // Error appears
         console.log(err);
        });
     }

     // Search by barcode
     getBarCode(barCodeVal){
       this.val = this.hciService.getData(barCodeVal, 'hospINDEX', 'ARTBAR');
     }




     showProduct() {
      let alert = this.alertCtrl.create({
        title: 'Medikament',
        message: 'Ist das Ihr Produkt ' + this.val + " ?",
        buttons: [
          {
            text: 'Nein',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Ja',
            handler: () => {
              console.log('Medikament erfasst');
                this.navCtrl.push(DrugPage)
            }
          }
        ]
      });
      alert.present();
    }



  pushReminderTimePage() {
    this.navCtrl.push(ReminderTimePage)
  }
  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
}

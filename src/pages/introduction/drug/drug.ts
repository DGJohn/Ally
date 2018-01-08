import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ReminderTimePage } from '../remindertime/remindertime';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-drug',
  templateUrl: 'drug.html'
})
export class DrugPage {

  public isDisabled: boolean = true;
  useMedication: any = {};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.useMedication = false;
  }

  change(val: any) {
   if (val)
     this.openCheckPopUp()
   }

   openCheckPopUp(){
       let alert = this.alertCtrl.create();
       alert.setTitle('tägliche Dosierung');

       alert.addInput({
         type: 'checkbox',
         label: 'morgens',
         value: 'morgens',
         checked: true
       });

       alert.addInput({
         type: 'checkbox',
         label: 'mittags',
         value: 'mittags'
       });

       alert.addInput({
         type: 'checkbox',
         label: 'abends',
         value: 'abends'
       });

       alert.addInput({
         type: 'checkbox',
         label: 'nachts',
         value: 'nachts'
       });

       alert.addButton('Abbrechen');
       alert.addButton({
         text: 'Ok',
         handler: (data: any) => {
           console.log('Radio data:', data);
         }
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

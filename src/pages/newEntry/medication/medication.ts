import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TotalPointsPage } from '../totalPoints/totalPoints';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html'
})
export class MedicationPage {

  private isDisabled:boolean = true;
  private questionMedication:any={};
  private questionMedicationWhy:any={};


  constructor(private zone:NgZone, public navCtrl: NavController, private toastCtrl: ToastController) {
    this.questionMedication = true;
    this.questionMedicationWhy = true;
    this.isDisabled = false;
  }

  change(val: any) {
    this.zone.run(()=>{
      if(val)
        this.isDisabled = false;
      else
        this.isDisabled = true;
        console.log(this.isDisabled);
    })
 }

  pushTotalPointsPage() {
    this.navCtrl.push(TotalPointsPage)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }

presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Dein neuer Eintrag wurde gespeichert!',
    duration: 3000,
    position: 'bottom'
});

toast.onDidDismiss(() => {
  console.log('Dismissed toast');
});

toast.present();
}
}

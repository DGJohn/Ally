import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TakingDrugPage } from '../takingdrug/takingdrug';
import { HomePage } from '../../../pages/home/home';

@Component({
  selector: 'page-allergy',
  templateUrl: 'allergy.html'
})
export class AllergyPage {

  public isDisabled: boolean = true;
  questionAllergy: any = {};

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    this.questionAllergy = false;
  }

 change(val: any) {
  if (val)
    this.openCheckPopUp()
  }

  openCheckPopUp(){
      let alert = this.alertCtrl.create();
      alert.setTitle('Allergien');

      alert.addInput({
        type: 'checkbox',
        label: 'Ambrosia',
        value: 'ambrosia',
        checked: true
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Ampfer',
        value: 'ampfer'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Beifuss',
        value: 'beifuss'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Birke',
        value: 'birke'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Buche',
        value: 'buche'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Edelkastanie',
        value: 'edelkastanie'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Eiche',
        value: 'eiche'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Erle',
        value: 'erle'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Esche',
        value: 'esche'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Gräser',
        value: 'gräser'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Hagebuche',
        value: 'hagebuche'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Hasel',
        value: 'hasel'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Platane',
        value: 'platane'
      });

      alert.addInput({
        type: 'checkbox',
        label: 'Wegerich',
        value: 'wegerich'
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

  pushTakingDrugPage() {
    this.navCtrl.push(TakingDrugPage)
  }

  pushHomePage() {
    this.navCtrl.push(HomePage)
  }
}

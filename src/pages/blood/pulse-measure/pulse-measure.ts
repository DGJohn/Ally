import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { TranslateService } from '@ngx-translate/core';
declare var heartbeat;

@IonicPage()
@Component({
  selector: 'page-pulse-measure',
  templateUrl: 'pulse-measure.html',
})
export class PulseMeasurePage {

  counter: number = 10;
  interval;
  isMeasuring: boolean = false;
  lastMeasure: number = 0;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private diagnostic: Diagnostic,
    public translate: TranslateService) {
  }

  reinitialise() {
    clearInterval(this.interval);
    this.counter = 10;
    this.isMeasuring = false;
  }

  takeMeasure() {

    let successCallback = (isAvailable) => {
      this.interval = setInterval(() => {
        this.counter--;
        this.isMeasuring = true;
        if (this.counter < 1) {
          this.reinitialise();
        }
      }, 1000);
      this.diagnostic.requestCameraAuthorization().then(() => {
        var props = {
          seconds: 10,
          fps: 30
        };
        heartbeat.take(props, (bpm) => {
          let title, caption, unit: string;
          this.lastMeasure = bpm;

          console.log("Your heart beat per minute is: " + bpm);

          this.translate.get("BLOOD.NEWMEASURE.RESULTTITLE").subscribe(value => {
            title = value;
          });

          this.translate.get("BLOOD.NEWMEASURE.RESULTTITLE").subscribe(value => {
            caption = value;
          });

          this.translate.get("BLOOD.NEWMEASURE.UNIT").subscribe(value => {
            unit = value;
          });

          let alert = this.alertCtrl.create({
            title: title,
            subTitle: caption + bpm + ' ' + unit,
            buttons: ['OK']
          });
          alert.present();
          this.viewCtrl.dismiss(this.lastMeasure);

        }, (error) => {
          console.log("Has not posible measure your heart beat");
        });
      })
        .catch(() => {
          console.log('autorization not done')
        })
    };
    let errorCallback = (e) => console.error(e);

    this.diagnostic.isCameraAvailable().then(successCallback).catch(errorCallback);
  }

}

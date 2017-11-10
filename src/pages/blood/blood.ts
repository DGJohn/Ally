import { PulseDailyDataPage } from './pulseDailyData/pulseDailyData';
import { PulseValidator } from './../../validators/pulseValidator';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, FabContainer, Modal, Alert } from 'ionic-angular';
import { AlertController, ModalController, LoadingController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { PulseMeasurePage } from './pulse-measure/pulse-measure';
import * as moment from 'moment';
import Chart from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-blood',
  templateUrl: 'blood.html',
})

export class BloodPage {
  @ViewChild('chartCanvas') chartCanvas;
  private pulseChart: Chart;
  pulseData: Array<{ date: Date, value: number }>;  // store the raw data in this Array
  dayToBeDisplayed: Date[] = new Array();
  currentWeekDisplayed: Date = moment().add(-1, "week").toDate();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public translate: TranslateService) {

    this.pulseData = new Array<{ date: Date, value: number }>();
    moment.locale(translate.currentLang);
  }

  ionViewDidLoad() {

    let loading = this.loadingCtrl.create({
      content: "Please wait..."
    });

    this.translate.get("COMMON.PLEASEWAIT").subscribe(value => {
      loading.setContent(value);
    });

    loading.present();

    this.generatePulseData();
    this.sortPulseDataByDay();
    this.listDayWithData();
    this.generatGraph();

    loading.dismiss();

  }

  private generatGraph(): void {
    var graphLabels = [], graphDatas = [];
    let max: number = -1;

    if (this.pulseData.length > 30) {
      for (let i = 0; i < 30; i++) {
        graphLabels.push(moment(this.pulseData[i].date).format('D MMM'));
        graphDatas.push(this.pulseData[i].value);
      }
    } else {
      this.pulseData.forEach(function(measure) {
        graphLabels.push(moment(measure.date).format('D MMM'));
        graphDatas.push(measure.value);
      });
    }

    max = Math.max(...graphDatas) + 30;

    this.pulseChart = new Chart(this.chartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: graphLabels,
        datasets: [{
          fill: false,
          lineTension: 0.5,
          borderColor: "#42a5f5",
          borderCapStyle: 'round',
          borderJoinStyle: 'round',
          spanGaps: false,
          data: graphDatas
        }]
      },
      options: {
        bezierCurve: true,
        scales: {
          yAxes: [{
            ticks: {
              min: 40,
              max: (max > 100) ? max : 100
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        elements: {
          point: {
            radius: 0
          }
        }
      }
    });
  }

  private addPulseMeasure(mesure: number, date: Date): void {
    if (moment().diff(date) > 0) {
      this.pulseData.push({ date: date, value: mesure });
    }
  }

  private listDayWithData(): void {
    let day: Date = moment().add(1, 'days').toDate();

    this.pulseData.forEach((value, index) => {
      if (!moment(value.date).isSame(day, 'day')) {
        day = value.date;
        this.dayToBeDisplayed.push(day);
      }
    });
  }

  private sortPulseDataByDay(): void {
    this.pulseData.sort(function(a, b) {
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateA < dateB ? 1 : -1;
    });
  }

  private getPulseByDay(day: Date): Array<{ date: Date, value: number }> {
    var dailyData = new Array<{ date: Date, value: number }>();
    this.pulseData.forEach(element => {
      if (moment(element.date).isSame(day, 'day'))
        dailyData.push(element);
    });

    dailyData.sort(function(a, b) {
      var dateA = new Date(a.date).getTime();
      var dateB = new Date(b.date).getTime();
      return dateA > dateB ? 1 : -1;
    });

    return dailyData;
  }

  showPromptMeasure(fab: FabContainer): void {
    let title, message, cancel, save: string;
    fab.close();

    this.translate.get("BLOOD.NEWMANUALVALUE.TITLE").subscribe(value => {
      title = value;
    });

    this.translate.get("BLOOD.NEWMANUALVALUE.CAPTION").subscribe(value => {
      message = value;
    });

    this.translate.get("BLOOD.NEWMANUALVALUE.SAVE").subscribe(value => {
      save = value;
    });

    this.translate.get("BLOOD.NEWMANUALVALUE.CANCEL").subscribe(value => {
      cancel = value;
    });

    let prompt: Alert = this.alertCtrl.create({
      title: title,
      message: message,
      enableBackdropDismiss: false,
      inputs: [
        {
          name: 'Pulse',
          placeholder: '80',
          type: 'number',
        },
      ],
      buttons: [
        {
          text: cancel,
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: save,
          handler: data => {
            if (PulseValidator.isValid(data.Pulse) === null) {
              this.addPulseMeasure(data.Pulse, new Date());
              this.generatGraph();
              return true;
            } else {
              if (PulseValidator.isValid(data.Pulse).isNotANumber || PulseValidator.isValid(data.Pulse).isAWholeNumber || PulseValidator.isValid(data.Pulse).isInferiorTo40 || PulseValidator.isValid(data.Pulse).isSuperiorTo220) {
                this.translate.get("BLOOD.ERRORS.NOVALUEENTERED").subscribe(value => {
                  title = value;
                });
                this.alertCtrl.create({
                  title: title,
                  buttons: ['ok']
                }).present();
                return false;
              }
            }
          }
        }
      ]
    });
    prompt.present();
  }

  showTakeMeasure(fab: FabContainer): void {
    fab.close();
    let myModal: Modal = this.modalCtrl.create(PulseMeasurePage);
    myModal.onDidDismiss(data => {
      if (typeof data !== 'undefined') {
        this.addPulseMeasure(data, new Date());
        this.generatGraph();
      }
    })
    myModal.present();
  }

  showDate(day: Date) {
    let dailyData = new Array<{ date: Date, value: number }>();

    dailyData = this.getPulseByDay(day);

    let dailyValue = this.modalCtrl.create(PulseDailyDataPage, { date: day, data: dailyData });
    dailyValue.onDidDismiss(data => {
      if (typeof data !== 'undefined') {
        this.pulseData.splice(data, 1);
        this.generatGraph();
      }
    })
    dailyValue.present();
  }

  generatePulseData() {
    let randDays = Math.floor(Math.random() * (300 - 10) + 300);
    for (let i = 0; i < randDays; i++) {
      let randValue = Math.floor(Math.random() * (30 - 2) + 2);
      for (let j = 0; j < randValue; j++) {
        this.addPulseMeasure(Math.floor(Math.random() * (190 - 50) + 50), moment().add(j * 10, 'minutes').add((-1 * i) - 1, 'days').toDate());
      }
    }
  }

  // Display methode
  formatDate(date: Date): string {
    let format: string = (moment().isSame(date, 'year') ? 'dddd, D MMM' : 'dddd, D MMM YYYY');
    return moment(date).format(format);
  }

  private getFirstDayOfWeek(dateInAWeek: Date): Date {
    return moment(dateInAWeek).startOf('isoWeek').toDate();
  }

  private getLastDayOfWeek(dateInAWeek: Date): Date {
    dateInAWeek.setHours(23, 59, 59);
    return moment(dateInAWeek).startOf('week').add(6, 'days').toDate();
  }

  private formatWeek(startDate: Date): string {
    let endDate = this.getLastDayOfWeek(startDate);

    if (moment(startDate).isSame(moment(), 'week')){
      let labelText: string;
      this.translate.get("COMMON.THISWEEK").subscribe(value => {
        labelText = value;
      });
      return labelText;
    }else if (moment(startDate.toISOString()).add(1, 'weeks').isSame(moment(), 'week')){
      let labelText: string;
      this.translate.get("COMMON.LASTWEEK").subscribe(value => {
        labelText = value;
      });
      return labelText;
    }

    return this.formatDate(startDate) + " - " + this.formatDate(endDate);
  }

  getWeeklyHeader = (record, recordIndex, records) => {
    if (!moment(record).isSame(this.currentWeekDisplayed, "week")) {
      this.currentWeekDisplayed = record;
      return this.formatWeek(this.getFirstDayOfWeek(record));
    }
    return null;
  };
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as HighCharts from 'highcharts';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  private isWeek:boolean;
  private isMonth:boolean;
  private isYear:boolean;
  private view:any;


  private season:String;

  constructor(public navCtrl: NavController) {
    this.isWeek = false;
    this.isMonth = true;
    this.isYear = true;
    this.season = "week";
  }

  ionViewDidLoad() {

    var myChart = HighCharts.chart('container', {
      chart: {
      type: 'column'
      },
      title: {
      text: 'Beschwerdeverlauf über die letzten 7 Tage'
      },
      xAxis: {
      categories: ['Freitag', 'Samstag', 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag']
      },
      yAxis: {
      min: 0,
      max: 15,
      title: {
      text: 'Beschwerdestärke'
      }
      },
      series: [{
      name: 'Augenbeschwerden',
      data: [10, 4, 6, 8, 2, 6, 7]
      }, {
      name: 'Nasenbeschwerden',
      data: [5, 7, 3, 3, 1, 9, 12]
      }, {
      name: 'Atembeschwerden',
      data: [5, 7, 3, 10, 9, 4, 6]
      }]
      });

      var myChartMonth = HighCharts.chart('containerMonth', {
        chart: {
        type: 'column'
        },
        title: {
        text: 'Beschwerdeverlauf über die letzten 30 Tage'
        },
        xAxis: {
        categories: ['18.-24.12.2017', '25.-31.12.2017', '01.-07.01.2018', '08.-14.01.2018']
        },
        yAxis: {
        min: 0,
        max: 15,
        title: {
        text: 'Beschwerdestärke'
        }
        },
        series: [{
        name: 'Augenbeschwerden',
        data: [10, 4, 6, 8]
        }, {
        name: 'Nasenbeschwerden',
        data: [5, 7, 3, 3]
        }, {
        name: 'Atembeschwerden',
        data: [5, 7, 3, 10]
        }]
        });

        var myChartYear = HighCharts.chart('containerYear', {
          chart: {
          type: 'column'
          },
          title: {
          text: 'Beschwerdeverlauf über das gesamte Jahr'
          },
          xAxis: {
          categories: ['Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August']
          },
          yAxis: {
          min: 0,
          max: 15,
          title: {
          text: 'Beschwerdestärke'
          }
          },
          series: [{
          name: 'Augenbeschwerden',
          data: [10, 4, 6, 8, 2, 6, 7]
          }, {
          name: 'Nasenbeschwerden',
          data: [5, 7, 3, 3, 1, 9, 12]
          }, {
          name: 'Atembeschwerden',
          data: [5, 7, 3, 10, 9, 4, 6]
          }]
          });
  }

  pushPage(val: String){
    if(val == 'week'){
      this.isWeek = false
      this.isMonth = true
      this.isYear = true
    }

    if(val == 'month'){
      this.isWeek = true
      this.isMonth = false
      this.isYear = true
    }

    if(val == 'year'){
      this.isWeek = true
      this.isMonth = true
      this.isYear = false
    }

  };



}

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
      text: 'Beschwerdeverlauf über die Woche',
         style: {
         fontSize: '15px'
        }
      },
      credits: {
      text: '',
      href: ''
      },
      xAxis: {
      categories: ['Donnerstag', 'Mittwoch', 'Dienstag', 'Montag', 'Sonntag', 'Samstag', 'Freitag']
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
      data: [10, 4, 6, 8, 2, 6, 7],
      }, {
      name: 'Nasenbeschwerden',
      data: [5, 7, 3, 3, 1, 9, 12],
      }, {
      name: 'Atembeschwerden',
      data: [5, 7, 3, 10, 9, 4, 6],
      }]
      });

      var myChartMonth = HighCharts.chart('containerMonth', {
        chart: {
        type: 'column'
        },
        title: {
        text: 'Beschwerdeverlauf über den Monat',
           style: {
           fontSize: '15px'
          }
        },
        credits: {
        text: '',
        href: ''
        },
        xAxis: {
        categories: ['08.-14.01.2018', '01.-07.01.2018', '25.-31.12.2017', '18.-24.12.2017']
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
        data: [10, 4, 6, 8],
        }, {
        name: 'Nasenbeschwerden',
        data: [5, 7, 3, 3],
        }, {
        name: 'Atembeschwerden',
        data: [5, 7, 3, 10],
        }]
        });

        var myChartYear = HighCharts.chart('containerYear', {
          chart: {
          type: 'column'
          },
          title: {
          text: 'Beschwerdeverlauf über das Jahr',
             style: {
             fontSize: '15px'
            }
          },
          credits: {
          text: '',
          href: ''
          },
          xAxis: {
          categories: ['Januar 2018', 'Dezember 2017', 'November 2017', 'Oktober 2017', 'September 2017', 'August 2017'],
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
          data: [0, 0, 0, 0, 1, 3],
          }, {
          name: 'Nasenbeschwerden',
          data: [1, 1, 0, 0, 2, 4],
          }, {
          name: 'Atembeschwerden',
          data: [0, 0, 0, 0, 2, 2],
          }]
          });

          var myChartYear = HighCharts.chart('containerYearTwo', {
            chart: {
            type: 'column'
            },
            title: {
            text: '',
            },
            credits: {
            text: '',
            href: ''
            },
            xAxis: {
            categories: ['Juli 2017', 'Juni 2017', 'Mai 2017', 'April 2017', 'März 2017', 'Februar 2017']
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
            data: [8, 12, 10, 5, 1, 0],
            }, {
            name: 'Nasenbeschwerden',
            data: [6, 5, 5, 1, 1, 0],
            }, {
            name: 'Atembeschwerden',
            data: [3, 3, 3, 1, 1, 0],
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

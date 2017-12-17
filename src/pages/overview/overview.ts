import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html'
})
export class OverviewPage {

  public barChartOptions:any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels:string[] = ['Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August'];
public barChartType:string = 'bar';
public barChartLegend:boolean = true;

public barChartData:any[] = [
  {data: [0, 2, 5, 8, 9, 7, 3], label: 'Augenbeschwerden'},
  {data: [2, 6, 6, 10, 8, 2, 0], label: 'Nasenbeschwerden'},
  {data: [2, 4, 5, 7, 9, 7, 3], label: 'Atembeschwerden'},
];

public barChartLabelsMonth:string[] = ['01.-07.02.2017', '08.-15.02.2017', '16.-23.02.2017', '24.02.-28.02.2017'];
public barChartTypeMonth:string = 'bar';
public barChartLegendMonth:boolean = true;

public barChartDataMonth:any[] = [
  {data: [0, 2, 5, 8], label: 'Augenbeschwerden'},
  {data: [2, 6, 6, 10], label: 'Nasenbeschwerden'},
  {data: [2, 4, 5, 7,], label: 'Atembeschwerden'},
];

public barChartLabelsWeek:string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];
public barChartTypeWeek:string = 'bar';
public barChartLegendWeek:boolean = true;

public barChartDataWeek:any[] = [
  {data: [5, 6, 8, 7, 5, 5, 7], label: 'Augenbeschwerden'},
  {data: [2, 6, 6, 10, 0, 2, 1], label: 'Nasenbeschwerden'},
  {data: [2, 4, 5, 7, 3, 4, 2], label: 'Atembeschwerden'},
];

// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}


  constructor(public navCtrl: NavController) {
  }



}

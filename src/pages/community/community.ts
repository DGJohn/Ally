import { Component, ViewChild, ElementRef  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


declare var google:any;
var icon = {
    url: "../assets/img/roterPunkt.png", // url
};
var iconBlue = {
    url: "../assets/img/blauerPunkt.png", // url
};
var iconGreen = {
    url: "../assets/img/gruenerPunkt.png", // url
};

@Component({
  selector: 'page-community',
  templateUrl: 'community.html'
})
export class CommunityPage {

  @ViewChild('map') mapRef:ElementRef;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  ionViewDidLoad() {
    this.DisplayMap();
  }

  DisplayMap() {
    const location = new google.maps.LatLng('47.141011','7.240413');
    const jegenstorf = new google.maps.LatLng('47.052221', '7.508239');
    const lindenhof = new google.maps.LatLng('46.958121', '7.427746');
    const muenchenbuchsee = new google.maps.LatLng('47.021621', '7.450367');
    const ostring = new google.maps.LatLng('46.943196', '7.469334');
    const buempliz = new google.maps.LatLng('46.940063', '7.390292');
    const solothurn = new google.maps.LatLng('47.208835', '7.532291');
    const luzern = new google.maps.LatLng('47.050168', '8.309307');
    const biberist = new google.maps.LatLng('47.181834', '7.557780');
    const grafenried = new google.maps.LatLng('47.078703', '7.510729');
    const oerlikon = new google.maps.LatLng('47.409334', '8.544875');
    const doerfli = new google.maps.LatLng('47.354834', '8.443423');
    const baden = new google.maps.LatLng('47.472880', '8.308090');
    const lyss = new google.maps.LatLng('47.074650', '7.307702');
    const kongres = new google.maps.LatLng('47.134965', '7.248026');
    const ostermundigen = new google.maps.LatLng('46.957708', '7.487307');
    const ittigen = new google.maps.LatLng('46.976143', '7.481894');
    const zurich = new google.maps.LatLng('47.376696', '8.540271');

    const options = {
      center:location,
      zoom:12,
      streetViewControl:false,
      mapTypeId:'roadmap' //roadmap is default, other possibilities are terrain, hybrid, satellite
    };


    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);
    this.addMarker(jegenstorf, map);
    this.addMarkerGreen(lindenhof, map);
    this.addMarkerBlue(zurich, map);
    this.addMarker(muenchenbuchsee, map);
    this.addMarker(ostring, map);
    this.addMarker(buempliz, map);
    this.addMarker(solothurn, map);
    this.addMarker(luzern, map);
    this.addMarker(biberist, map);
    this.addMarker(grafenried, map);
    this.addMarker(oerlikon, map);
    this.addMarker(doerfli, map);
    this.addMarker(baden, map);
    this.addMarker(lyss, map);
    this.addMarker(kongres, map);
    this.addMarker(ostermundigen, map);
    this.addMarker(ittigen, map);
  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map,
      icon,
    });
  }

  addMarkerGreen(position, map) {
    return new google.maps.Marker({
      position,
      map,
      iconGreen,
    });
  }
    addMarkerBlue(position, map) {
      return new google.maps.Marker({
        position,
        map,
        iconBlue,
      });
    }
    showExplanation() {
      let confirm = this.alertCtrl.create({
        title: 'Erklärung',
        message: 'In dieser Karte siehst du, wo es User gibt, die unter Allergie-Beschwerden leiden. Dabei werden die drei Allergie-Arten Augenbeschwerden, Nasenbeschwerden und Atembeschwerden farblich unterschieden.',
        buttons: [
          {
            text: 'Verstanden',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
        ]
      });
      confirm.present();
    }
}

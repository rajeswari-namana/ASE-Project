import { Component ,ViewChild ,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from "@ionic-native/geolocation";

import {MallsdetailsProvider} from "../../providers/mallsdetails/mallsdetails";


/**
 * Generated class for the MallsinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mallsinfo',
  templateUrl: 'mallsinfo.html',
})
export class MallsinfoPage {
  mallsinfo: any;
  mallsData: any={};
  pic: any;
  rev: any;
  options : GeolocationOptions;
  currentLat: any;
  currentLong: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public malls: MallsdetailsProvider, private geolocation : Geolocation) {
    this.mallsinfo=navParams.get('mallsinfo')
       this.malls.detailedMalls(this.mallsinfo)
      .then(data => {
        this.mallsData = data;
        this.pic= this.mallsData.photos;
        this.rev= this.mallsData.reviews;

      })


  }
  getUserPosition(){
    this.options = {
      enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

      this.currentLat = pos.coords.latitude;
      this.currentLong = pos.coords.longitude;



    },(err : PositionError)=>{
      console.log("error : " + err.message);
    });
  }
  ionViewDidEnter(){
    this.getUserPosition();
  }


  getArray(size): Array<any> {
    return new Array(size);
  }
}

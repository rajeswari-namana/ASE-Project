import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MustseeProvider} from "../../providers/mustsee/mustsee";
import {Geolocation ,GeolocationOptions ,Geoposition ,PositionError} from "@ionic-native/geolocation";

/**
 * Generated class for the MustseeinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mustseeinfo',
  templateUrl: 'mustseeinfo.html',
})
export class MustseeinfoPage {
venueid: any;
data: any={};
placesData: any={};
prefix: any;
suffix: any;
loc: any={};
category: Array<any>;
contact: any={};
rating: any;
open: any={};
options : GeolocationOptions;
  currentLat: any;
  currentLong: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public malls: MustseeProvider, public geolocation: Geolocation ) {
    this.venueid=navParams.get('venueid')
    this.malls.detailedmustseeplaces(this.venueid)
      .then(data => {
        this.data = data;
        this.placesData=this.data.response.venue;
        this.prefix=this.data.response.venue.photos.groups[0].items[1].prefix;
        this.suffix=this.data.response.venue.photos.groups[0].items[1].suffix;
        this.category=this.data.response.venue.categories;
        this.loc=this.placesData.location;
        this.contact=this.placesData.contact;
        this.rating=this.placesData.rating;
        this.open=this.placesData.hours;
        console.log(this.open);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad MustseeinfoPage');
  }


}

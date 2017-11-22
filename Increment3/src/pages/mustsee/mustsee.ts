import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MustseeProvider} from "../../providers/mustsee/mustsee";
import {MustseeinfoPage} from "../mustseeinfo/mustseeinfo";


/**
 * Generated class for the MustseePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mustsee',
  templateUrl: 'mustsee.html',
})
export class MustseePage {
  lat: any;
  lon: any;
  mustData: any={};
  pho: any={};
  response: Array<any>;
  grp: any;
  cou: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public must: MustseeProvider) {
    this.lat=navParams.get('lat')
    this.lon=navParams.get('lon')
    this.must.mustSeePlaces(this.lat,this.lon)
      .then(data => {
         this.mustData=data;
         this.response=this.mustData.response.groups[0].items;
        //for(let ex of this.response) {
          //this.cou = ex.venue.photos.count;

        //}

        /* this.forecast = this.foreData.forecast;
         this.txt_forecast = this.forecast.txt_forecast;
         this.forecastday = this.txt_forecast.forecastday;
         this.forecastday1=this.forecastday[0];
         this.forecastday2=this.forecastday[1];*/

      })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MustseePage');
  }

  viewItem(placeid){
    this.navCtrl.push(MustseeinfoPage,{
      venueid: placeid
    });
  }


}

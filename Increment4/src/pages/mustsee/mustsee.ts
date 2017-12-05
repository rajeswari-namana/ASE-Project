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
/*ionViewDidLoad() {
    console.log('ionViewDidLoad MustseePage');
  }

  viewItem(placeid){
    this.navCtrl.push(MustseeinfoPage,{
      venueid: placeid
    });
  }
*/

}

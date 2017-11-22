import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MallsdetailsProvider} from "../../providers/mallsdetails/mallsdetails";

/**
 * Generated class for the DealsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deals',
  templateUrl: 'deals.html',
})
export class DealsPage {
lat: any;
lon: any;
data: any={};
image: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public deals: MallsdetailsProvider) {
    this.lat=navParams.get('lat');
    this.lon=navParams.get('lon');
    this.deals.detailedDeals(this.lat,this.lon)
      .then(data => {
        this.data = data;
        this.image= this.data.deals;
        console.log(this.image[0].deal.title);
  });


}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');
  }

}

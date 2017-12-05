import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MallsdetailsProvider} from "../../providers/mallsdetails/mallsdetails";

/**
 * Generated class for the DealsinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dealsinfo',
  templateUrl: 'dealsinfo.html',
})
export class DealsinfoPage {
id: any;
data: any={};
url: any;
  image: any={};
  merchant: any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public malls: MallsdetailsProvider) {

    this.id=navParams.get('deal');
    this.malls.infoDeals(this.id)
      .then(data => {
        this.data=data;
        this.image = this.data.deal;
        this.url=this.image.image_url;
        this.merchant=this.image.merchant;
console.log(this.merchant);

      })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsinfoPage');
  }

}

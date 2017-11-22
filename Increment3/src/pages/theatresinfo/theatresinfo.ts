import { Component ,ViewChild ,ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TheatresdetailsProvider} from "../../providers/theatresdetails/theatresdetails";

/**
 * Generated class for the MallsinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-theatresinfo',
  templateUrl: 'theatresinfo.html',
})
export class TheatresinfoPage {
  theatresinfo: any;
  theatresData: any={};
  pic: any={};
  rev: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public malls: TheatresdetailsProvider) {
    this.theatresinfo=navParams.get('theatresinfo')
    this.malls.detailedMalls(this.theatresinfo)
      .then(data => {
        this.theatresData = data;
        this.pic= this.theatresData.photos[0];
        this.rev= this.theatresData.reviews;
        console.log(this.theatresData.rating);
      })


  }


  getArray(size): Array<any> {
    return new Array(size);
  }
}

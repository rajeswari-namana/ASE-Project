import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MallsdetailsProvider} from "../../providers/mallsdetails/mallsdetails";
import {DealsinfoPage} from "../dealsinfo/dealsinfo";

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
  data: any = {};
  backupdata: any = {};
  image: Array<any>;
  ima: Array<any>;
  deal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public deals: MallsdetailsProvider) {
    this.lat = navParams.get('lat');
    this.lon = navParams.get('lon');
    this.deals.detailedDeals(this.lat, this.lon)
      .then(data => {
        this.data = data;

        this.image = this.data.deals;
        this.ima = this.data.deals;
        console.log(this.image[0].deal.title);
      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsPage');
  }

  onInputChange(value) {
    if (value == "") {
      this.image = this.ima;
    }
  }

  filterData(searchInput) {
    console.log("Entered the method");
    console.log(searchInput);

    this.image = this.image.filter((de) => {
      console.log(searchInput);


      if (de.deal.category_slug.indexOf(searchInput) !== -1) {
        // return de.restaurant.cuisines == searchInput;
        return true;
      } else {
        return false;
      }

      // return resto.restaurant.cuisines == searchInput;
      //return resto.restaurant.average_cost_for_two > searchInput;


    });
  }

  viewDeals(id){
    this.navCtrl.push(DealsinfoPage,{
      deal: id

    });

  }

}

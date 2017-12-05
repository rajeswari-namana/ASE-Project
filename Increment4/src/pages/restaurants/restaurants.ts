import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { RestaurantInfoPage } from '../restaurant-info/restaurant-info';

/**
 * Generated class for the RestaurantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurants',
  templateUrl: 'restaurants.html',
})
export class RestaurantsPage {
  lng: any;
  lat: any;
  restaurantInfo:any;
  backupRestaurantInfo: any;
  restaurantId:any;
  previousId:any;
  modifiedData:any;

  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams,
               public geolocation: Geolocation, public restoService: RestaurantProvider) {
    this.lat = null;
    this.lng = null;
    this.previousId = -1;
  }

  getUserLocation() {
    this.platform.ready().then(() => {
            this.geolocation.getCurrentPosition().then(pos => {
              this.lat=pos.coords.latitude;
              this.lng=pos.coords.longitude;
            });
          });
  }

  getRandomInt() {
    if (this.previousId < 12) {
      this.previousId++;
      return this.previousId;
    }
    else if (this.previousId == 12) {
      this.previousId = -1;
      return 12;
    }
    return this.previousId;
  }

  loadRestaurants(){
    this.restoService.loadRestaurantsNearLocation()
    .then(data => {
        this.restaurantInfo = data;
        this.backupRestaurantInfo = data;
        if (Array.isArray(this.restaurantInfo)) {
          this.restaurantInfo.forEach(function(resto){
              resto['imageURL'] = 'assets/restaurantImages/img'+ this.getRandomInt() +'.jpeg';
          },this);
        }
    });
    }

    onInputChange(value){
      if (value == ""){
        this.restaurantInfo = this.backupRestaurantInfo;
      }
    }
    filterData(searchInput){
      console.log("Entered the method");
      console.log(searchInput);

 this.restaurantInfo = this.restaurantInfo.filter((resto) => {
    console.log(searchInput);
    console.log(resto.restaurant.cuisines);

    if (resto.restaurant.cuisines.indexOf(searchInput) !== -1) {
      // return resto.restaurant.cuisines == searchInput;
      return true;
    } else {
      return false;
    }

  // return resto.restaurant.cuisines == searchInput;
   //return resto.restaurant.average_cost_for_two > searchInput;



    });
  }

  ionViewDidLoad() {
    this.getUserLocation();
    this.loadRestaurants();
  }

  viewRestaurantInfo(restaurantid){
    console.log(restaurantid);
    this.navCtrl.push(RestaurantInfoPage,{
      details: restaurantid,
    });
  }

}









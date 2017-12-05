import { Component ,ViewChild ,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantProvider } from '../../providers/restaurant/restaurant';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from "@ionic-native/geolocation";
import {RestaurantMapPage} from '../restaurant-map/restaurant-map';
declare var google;
/**
 * Generated class for the RestaurantInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant-info',
  templateUrl: 'restaurant-info.html',
})
export class RestaurantInfoPage {
  options : GeolocationOptions;
  currentPos : Geoposition;
  places : Array<any>;

  details:any;
  details1:any;
  details2:any;
  details3:any;
  details4:any;
  restaurantInfo:any;
  restaurantId:any;
  reviewId:any;
  reviewInfo:any;
  restoLattitude:any;
  restoLongitude:any;
  currentLattitude: any;
  currentLongitude:any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, private geolocation : Geolocation , public navParams: NavParams,public restoService: RestaurantProvider) {
    this.navParams.get('details');
    this.details = navParams.get('details')
    console.log('Id: '+ JSON.stringify(this.details));
    this.restaurantInfo = {
      location: {},
      user_rating: {}
    };
  }

  getUserPosition(){
    this.options = {
      enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

      this.currentPos = pos;
      console.log(pos);
      this.currentLattitude=pos.coords.latitude;
      this.currentLongitude=pos.coords.longitude;
      this.addMap(pos.coords.latitude,pos.coords.longitude);

    },(err : PositionError)=>{
      console.log("error : " + err.message);
    });
  }

  addMap(lat,long){
    
        let latLng = new google.maps.LatLng(lat, long);
    
        let mapOptions = {
          center: latLng,
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
    
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
         this.addMarker();
    
      }
     
       addMarker(){
        
            let marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: this.map.getCenter()
            });
        
            let content = "<p>This is your current position !</p>";
            let infoWindow = new google.maps.InfoWindow({
              content: content
            });
        
            google.maps.event.addListener(marker, 'click', () => {
              infoWindow.open(this.map, marker);
            });
        
          }
          createMarker(place)
          {
            let marker = new google.maps.Marker({
              map: this.map,
              animation: google.maps.Animation.DROP,
              position: place.geometry.location
            });
          }









  loadRestoInfo(){
    this.restoService.loadRestaurantDetails(this.details)
    .then(data => {
      console.log("GOT DATA: " + JSON.stringify(data));
        this.restaurantInfo = data;
        this.restoLattitude=this.restaurantInfo.location.latitude;
        this.restoLongitude=this.restaurantInfo.location.longitude;
        console.log(this.restoLattitude);
        console.log(this.restoLongitude);


    });
    }


  loadRestoReview(restoReviewId){
    this.reviewId=restoReviewId;
    console.log("Review Id : "+ this.reviewId);
    this.restoService.loadRestaurantReview(this.reviewId)
    .then(data => {
      console.log("GOT DATA: " + JSON.stringify(data));
      this.reviewInfo=data;

      console.log("GOT DATA Data: " + JSON.stringify(this.reviewInfo));
     // console.log("Rating :" + this.reviewInfo.rating);
      //console.log("Rating :" + this.reviewInfo.review_text);

    });
    }
    loadMap(restoLattitude,restoLongitude){
      console.log(restoLattitude);
      console.log(restoLongitude);
      this.navCtrl.push(RestaurantMapPage,{
        details4: restoLattitude,
        details1: restoLongitude,
        details2: this.currentLattitude,
        details3: this.currentLongitude,

      });
    }

    // viewRestaurantInfo(restaurantid){
    //   console.log(restaurantid);
    //   this.navCtrl.push(RestaurantInfoPage,{
    //     details: restaurantid,
    //   });
    // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantInfoPage');
    this.loadRestoInfo();
    console.log("Got restaurants Info");
   //this.loadRestoReview()
    console.log("Got restaurants Reviews");

    this.getUserPosition();
    console.log("Got  maps");
    
  }

}

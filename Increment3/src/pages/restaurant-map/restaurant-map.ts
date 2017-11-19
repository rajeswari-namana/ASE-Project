import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the RestaurantMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-restaurant-map',
  templateUrl: 'restaurant-map.html',
})
export class RestaurantMapPage {
  details1:any;
  details2:any;
  details3:any;
  details4:any;
  start :any;
  end:any;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  // start = 'chicago, il';
  // end = 'chicago, il';
  mode='DRIVING';
   
  //start = new google.maps.LatLng(39.053,-94.590);
  //end =  new google.maps.LatLng(39.040,-94.596);
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.navParams.get('details1');
    this.details1 = navParams.get('details1');
    console.log(this.details1);

    this.navParams.get('details4');
    this.details4 = navParams.get('details4');
    console.log(this.details4);

    this.navParams.get('details2');
    this.details2 = navParams.get('details2');
    console.log(this.details2);

    this.navParams.get('details3');
    this.details3 = navParams.get('details3');
    console.log(this.details3);
    this.start = new google.maps.LatLng(this.details2,this.details3);;
    this.end =  new google.maps.LatLng(this.details4,this.details1);
  
    //this.initMap()
  }


  initMap() {
    console.log("Entered init function");
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 7,
      center: {lat: 39.08, lng: -94.58}
      
    });

    this.directionsDisplay.setMap(this.map);
    this.calculateAndDisplayRoute(this.mode);
    this.directionsDisplay.setOptions({
      polylineOptions: {
        strokeColor: 'red'
      }
    });
  }

  calculateAndDisplayRoute(mode) {
    console.log("Entered calculate function");
    var selectedMode = mode;
    console.log(selectedMode);
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: google.maps.TravelMode[selectedMode]
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

 

  ionViewDidLoad() {
    this.initMap();
    console.log('ionViewDidLoad RestaurantMapPage');
  }

}

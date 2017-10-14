import { Component ,ViewChild ,ElementRef } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from "@ionic-native/geolocation";
import { WeatherProvider } from "../../providers/weather/weather";
import { AngularFireAuth} from "angularfire2/auth";

declare var google;

@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
options : GeolocationOptions;
currentPos : Geoposition;
places : Array<any>;
weatherData: any={};
trail : any={};
full_address : any={};


@ViewChild('map') mapElement: ElementRef;
map: any;
  constructor(public navCtrl: NavController,private geolocation : Geolocation, private weather : WeatherProvider,public navParams: NavParams, private afAuth: AngularFireAuth, private toast: ToastController ) {

  }
  getUserPosition(){
    this.options = {
      enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

      this.currentPos = pos;
      console.log(pos);

      this.getWeather(pos.coords.latitude, pos.coords.longitude)

    },(err : PositionError)=>{
      console.log("error : " + err.message);
    });
  }
  ionViewDidEnter(){
    this.getUserPosition();
  }
  getWeather(latitude, longitude){
    this.weather.weatherForLocation(latitude, longitude)
      .then(data => {
        this.weatherData = data;
        this.trail= this.weatherData.display_location;
        this.full_address= this.weatherData.observation_location;

      })
  }
  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
      this.toast.create({
        message: `welcome , ${data.email}`,
        duration: 3000

      }).present();
      }
      else{
        this.toast.create({
          message: `welcome wrong`,
          duration: 3000

        }).present();

      }
    });
  }

}

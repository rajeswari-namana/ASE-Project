import { Component ,ViewChild ,ElementRef } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from "@ionic-native/geolocation";
import { WeatherProvider } from "../../providers/weather/weather";
import { AngularFireAuth} from "angularfire2/auth";

import {AboutPage} from "../about/about";
import {MoviesPage} from "../movies/movies";
import {MallsinfoPage} from "../mallsinfo/mallsinfo";
import {ForecastPage} from "../forecast/forecast";
import {TheatresPage} from "../theatres/theatres";
import {MustseePage} from "../mustsee/mustsee";


declare var google;

@IonicPage()
@Component({
  selector: 'page-weather',
  templateUrl: 'weather.html'
})
export class WeatherPage {
  options: GeolocationOptions;
  currentPos: Geoposition;
  places: Array<any>;
  weatherData: any = {};
  trail: any = {};
  full_address: any = {};


  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, private geolocation: Geolocation, private weather: WeatherProvider, public navParams: NavParams) {

  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy: true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;
      console.log(pos);

      this.getWeather(pos.coords.latitude, pos.coords.longitude)

    }, (err: PositionError) => {
      console.log("error : " + err.message);
    });
  }

  ionViewDidEnter() {
    this.getUserPosition();
  }

  getWeather(latitude, longitude) {
    this.weather.weatherForLocation(latitude, longitude)
      .then(data => {
        this.weatherData = data;
        this.trail = this.weatherData.display_location;
        this.full_address = this.weatherData.observation_location;

      })

  }

  getForecast(latitude, longitude) {
    this.navCtrl.push(ForecastPage, {
      lat: latitude,
      lon: longitude
    });

  }

  getMust(latitude, longitude) {
    this.navCtrl.push(MustseePage, {
      lat: latitude,
      lon: longitude
    });

  }




}

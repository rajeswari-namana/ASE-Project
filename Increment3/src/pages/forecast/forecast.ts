import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";

/**
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {
lat: any;
lon: any;
foreData: any={};
hourly: any;
timely: any;
forecast: any={};
txt_forecast: any={};
forecastday: any;
forecastday1: any={};
forecastday2: any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, public wea: WeatherProvider) {
    this.lat=navParams.get('lat')
    this.lon=navParams.get('lon')
    this.wea.weatherForecast(this.lat,this.lon)
      .then(data => {
        this.foreData = data;
       /* this.forecast = this.foreData.forecast;
        this.txt_forecast = this.forecast.txt_forecast;
        this.forecastday = this.txt_forecast.forecastday;
        this.forecastday1=this.forecastday[0];
        this.forecastday2=this.forecastday[1];*/
       this.hourly= this.foreData.hourly_forecast;
       this.timely= this.hourly;
        console.log(this.timely);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

}

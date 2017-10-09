import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherPage} from "../weather/weather";
import {RegisterPage} from "../register/register";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
weatherPage=WeatherPage;
registerPage=RegisterPage;

  constructor(public navCtrl: NavController) {

  }

}

import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {WeatherPage} from "../weather/weather";
import {RegisterPage} from "../register/register";
import {User} from "../../models/user";
import { AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  user = {} as User;
weatherPage=WeatherPage;
registerPage=RegisterPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {

  }




}

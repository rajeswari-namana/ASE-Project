import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieDataProvider } from '../providers/movie-data/movie-data';
import { WeatherProvider } from "../providers/weather/weather";


import {AboutPage} from "../pages/about/about";
import {TabsPage} from "../pages/tabs/tabs";

import {MoviesPage} from "../pages/movies/movies";
import {RegisterPage} from "../pages/register/register";

@Component({
  templateUrl: 'app.html',
  providers: [
    MovieDataProvider,
    WeatherProvider
  ]
})
export class MyApp {
  rootPage = AboutPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // onLoad(page : any){
  //  this.nav.setRoot(page);
  //  this.menuCtrl.close();
  // }
  // onLogout(){

//}-->
}

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {WeatherPage} from "../weather/weather";
import {MoviesPage} from "../movies/movies";
import {MallsinfoPage} from "../mallsinfo/mallsinfo";
import { AngularFireAuth} from "angularfire2/auth";
import {IonicPage, ToastController} from "ionic-angular";
import {SigninPage} from "../signin/signin";
import {ShoppingPage} from "../shopping/shopping";
import {RestaurantsPage} from "../restaurants/restaurants";
import {AccountPage} from "../account/account";


@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = WeatherPage;
  tab2Root = MoviesPage;
  tab3Root = ShoppingPage;
  tab4Root = RestaurantsPage;
  tab5Root = SigninPage;
  tab6Root = AccountPage;
  

  constructor(private afAuth: AngularFireAuth, private toast: ToastController) {

  }

  ionViewwillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.toast.create({
          message: `Welcome to APP_NAME, ${data.email}`,
          duration: 3000
        }).present();
      }
      else {
        this.toast.create({
          message: `Could not find details`,
          duration: 3000
        }).present();
      }
    });

  }
}

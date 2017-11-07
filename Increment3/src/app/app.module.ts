import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Http, HttpModule} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';

import { WeatherPage } from '../pages/weather/weather'
import {TheatresPage} from "../pages/theatres/theatres";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieDataProvider } from '../providers/movie-data/movie-data';

import { Geolocation } from '@ionic-native/geolocation';

import { WeatherProvider } from '../providers/weather/weather';
import {MoviesPage} from "../pages/movies/movies";
import {MallsinfoPage} from "../pages/mallsinfo/mallsinfo";
import {MallsdetailsProvider} from "../providers/mallsdetails/mallsdetails";
import {AngularFireModule} from "angularfire2";
import {config} from "./app.firebase.config";
import {AngularFireAuth, AngularFireAuthModule} from "angularfire2/auth";
import {ForecastPage} from "../pages/forecast/forecast";
import {TabsPage} from "../pages/tabs/tabs";
import {SigninPage} from "../pages/signin/signin";
import {ShoppingPage} from "../pages/shopping/shopping";
import {GooglePlus} from "@ionic-native/google-plus";
import firebase from 'firebase';
import {RestaurantsPage} from "../pages/restaurants/restaurants";
import {RestaurantInfoPage} from "../pages/restaurant-info/restaurant-info";
import {RestaurantProvider} from "../providers/restaurant/restaurant";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,

    DetailsPage,
    HomePage,
    TheatresPage,
    MoviesPage,
    WeatherPage,
    ShoppingPage,
    RestaurantsPage,
    RestaurantInfoPage,
    SigninPage,
    ForecastPage,
    MallsinfoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WeatherPage,
    DetailsPage,
    TheatresPage,
    MoviesPage,
    HomePage,
    SigninPage,
    ShoppingPage,
    RestaurantsPage,
    RestaurantInfoPage,
    ForecastPage,
    MallsinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieDataProvider,
    Geolocation,
    AngularFireAuth,
    WeatherProvider,
    GooglePlus,
    MallsdetailsProvider,
    RestaurantProvider

  ]
})
export class AppModule {}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {Http, HttpModule} from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';
import { WeatherPage } from '../pages/weather/weather'
import {TheatresPage} from "../pages/theatres/theatres";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieDataProvider } from '../providers/movie-data/movie-data';
import {RegisterPage} from "../pages/register/register";
import { Geolocation } from '@ionic-native/geolocation';

import { WeatherProvider } from '../providers/weather/weather';
import {MoviesPage} from "../pages/movies/movies";
import {MallsinfoPage} from "../pages/mallsinfo/mallsinfo";
import {MallsdetailsProvider} from "../providers/mallsdetails/mallsdetails";
import {AngularFireModule} from "angularfire2";
import {config} from "./app.firebase.config";
import { AngularFireAuthModule} from "angularfire2/auth";



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DetailsPage,
    HomePage,
    TheatresPage,
    MoviesPage,
    RegisterPage,
    TabsPage,
    WeatherPage,
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
    RegisterPage,
    DetailsPage,
    TheatresPage,
    MoviesPage,
    HomePage,
    TabsPage,
    WeatherPage,
    MallsinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieDataProvider,
    Geolocation,

    WeatherProvider,
    MallsdetailsProvider

  ]
})
export class AppModule {}

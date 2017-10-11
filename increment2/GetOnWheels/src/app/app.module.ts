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
import { Facebook } from '@ionic-native/facebook';


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
    WeatherPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    DetailsPage,
    TheatresPage,
    MoviesPage,
    HomePage,
    RegisterPage,
    TabsPage,
    WeatherPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieDataProvider,
    Facebook,
    Geolocation,

    WeatherProvider

  ]
})
export class AppModule {}

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {WeatherPage} from "../weather/weather";
import {MoviesPage} from "../movies/movies";


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = WeatherPage;
  tab3Root = MoviesPage;

    constructor() {

  }
}

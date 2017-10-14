import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {WeatherPage} from "../weather/weather";
import {MoviesPage} from "../movies/movies";
<<<<<<< HEAD
import {MallsinfoPage} from "../mallsinfo/mallsinfo";
=======
import { RestaurantsPage } from '../restaurants/restaurants'

>>>>>>> f5307f77d382020d2c0cacb5bd17c55d35dd6355


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AboutPage;
  tab2Root = WeatherPage;
<<<<<<< HEAD
  tab3Root = MoviesPage;
  tab4Root = MallsinfoPage;
=======
  tab3Root = RestaurantsPage;
  tab4Root = MoviesPage;
>>>>>>> f5307f77d382020d2c0cacb5bd17c55d35dd6355

    constructor() {

  }
}

/**
 * Created by rajin on 10/9/2017.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {TheatresPage} from "../theatres/theatres";


@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html'
})
export class MoviesPage {
  theatresPage=TheatresPage;
  homePage=HomePage;

  constructor(public navCtrl: NavController) {

  }

}

import { Component } from '@angular/core';
import {MovieDataProvider} from '../../providers/movie-data/movie-data';
import { NavController } from 'ionic-angular';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MovieDataProvider]
})
export class HomePage {
  contactPage=ContactPage;
  trail:any;

    constructor(public navCtrl: NavController, public movieservice: MovieDataProvider) {
      this.loadpeople();

  }

  loadpeople(){
    this.movieservice.load().
      then(data => {
      this.trail = data;
    });
  }


}




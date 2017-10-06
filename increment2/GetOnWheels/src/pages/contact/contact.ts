import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieRatingProvider} from "../../providers/movie-rating/movie-rating";
import {MovieDataProvider} from "../../providers/movie-data/movie-data";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [MovieRatingProvider,MovieDataProvider]
  })
export class ContactPage {
  rating: any;
  x: any;
  y: any;

  constructor(public navCtrl: NavController, public movieservice: MovieDataProvider) {
    this.loadrating();
  }

  loadrating() {
    this.movieservice.load().then(data => {
      this.rating = data;
      this.y=this.rating[2].title;
      this.x=this.rating[2].popularity;
    });
  }
}




import { Component } from '@angular/core';
import {MovieDataProvider} from '../../providers/movie-data/movie-data';
import {NavController, NavParams} from 'ionic-angular';
import { DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MovieDataProvider]
})
export class HomePage {
    traill:any;

    constructor(public navCtrl: NavController, public movieservice: MovieDataProvider, public navParams: NavParams) {
      this.loadpeople();

    }

  loadpeople(){
    this.movieservice.load().
      then(data => {
      this.traill = data;

    });
  }
  viewItem(details){
    this.navCtrl.push(DetailsPage,{
      details: details
    });
  }


}




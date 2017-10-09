import { Component } from '@angular/core';
import {MovieDataProvider} from '../../providers/movie-data/movie-data';
import { NavController } from 'ionic-angular';
import { DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MovieDataProvider]
})
export class HomePage {
    traill:any;

    constructor(public navCtrl: NavController, public movieservice: MovieDataProvider) {
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




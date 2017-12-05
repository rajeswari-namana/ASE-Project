import { Component } from '@angular/core';
import {MovieDataProvider} from '../../providers/movie-data/movie-data';
import {NavController, NavParams} from 'ionic-angular';
import { DetailsPage} from '../details/details';
import {Pipe, PipeTransform} from '@angular/core'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [MovieDataProvider]
})
export class HomePage {
    traill:any;
  trail2:any;
  private gernes=[{text:'Action'}, {text:'Drama'}, {text:'Adventure'}, {text:'Animation'},
    {text:'Comedy'}, {text:'Crime'}, {text:'Documentary'}, {text:'Family'}, {text:'Fantasy'},
    {text:'History'}, {text:'Horror'}, {text:'Music'}, {text:'Mystery'}, {text:'Romance'},
    {text:'Science Fiction'}, {text:'TV Movie'}, {text:'Thriller'}, {text:'War'}, {text:'Western'}
      ];
    constructor(public navCtrl: NavController, public movieservice: MovieDataProvider, public navParams: NavParams) {
      this.loadpeople();


    }

  loadpeople(){
    this.movieservice.load().
      then(data => {
      this.traill = data;
      this.trail2= data;

    });
  }
  viewItem(details){
    this.navCtrl.push(DetailsPage,{
      details: details
    });
  }


  onInputChange(value){
    if (value == ""){
      this.traill = this.trail2;
    }
  }
  filterData(searchInput){

    this.traill = this.traill.filter((details) => {
      if (details.title.indexOf(searchInput) !== -1) {
        // return resto.restaurant.cuisines == searchInput;
        return true;
      } else {
        return false;
       }

    });
  }

}




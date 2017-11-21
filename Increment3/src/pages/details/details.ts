import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {httpFactory} from "@angular/http/src/http_module";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
  details: any;
  data1: any;
  data2: any;
  link:any;
  url: string;
  constructor(public navCtrl: NavController, public params: NavParams, private http: Http) {
    this.details = params.get('details');
    console.log(this.details.id);

    //openWebpage(url: string){
    //  const browser = this.inAppBrowser.create(url,'_self');
    // }


    this.http.get('http://api.themoviedb.org/3/movie/'+this.details.id+'/videos?api_key=1dd53393337c4051b0c109c18e659e56')
      .map(res => res.json())
      .subscribe(data1 => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data1 = data1.results[0].key;
        console.log(this.data1);
        this.link="https://www.youtube.com/embed/"+this.data1;


      });

    this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1dd53393337c4051b0c109c18e659e56&language=en-US')
      .map(res => res.json())
      .subscribe(data2 => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data2 = data2.genres;
        console.log(this.data2);



      });

  }

}


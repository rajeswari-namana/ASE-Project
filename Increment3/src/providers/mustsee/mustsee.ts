import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MustseeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MustseeProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello MustseeProvider Provider');
  }
  mustSeePlaces(latitude, longitude){
    return new Promise(resolve => {
      this.http.get("https://api.foursquare.com/v2/venues/explore?client_id=IP2D3AJWFIVOXSYINLDIH1ODS4J2ETUUGK5VGWUUZSEZXOFM&client_secret=IEN4ZFCAGNTYWDPQ0GIOUFKG0BGSOP4FLVD1B4NPNANDVHYI&v=20160215&limit=50&near="+latitude+","+longitude+"&categoryId=4d4b7104d754a06370d81259,4bf58dd8d48988d181941735,507c8c4091d498d9fc8c67a9,4bf58dd8d48988d182941735,4bf58dd8d48988d193941735,4d4b7105d754a06373d81259,4bf58dd8d48988d165941735&venuePhotos=1")

        .map(res => res.json())
        .subscribe(data => {

          this.data = data;

          resolve(this.data);
          //console.log(data);


        })
    })
  }


  detailedmustseeplaces(venueid){
    return new Promise(resolve => {
      this.http.get("https://api.foursquare.com/v2/venues/"+venueid+"?client_id=IP2D3AJWFIVOXSYINLDIH1ODS4J2ETUUGK5VGWUUZSEZXOFM&client_secret=IEN4ZFCAGNTYWDPQ0GIOUFKG0BGSOP4FLVD1B4NPNANDVHYI&v=20160215")
        .map(res => res.json())
        .subscribe(data => {

          this.data = data;
          resolve(this.data);





        })
    })
  }


}

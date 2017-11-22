import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MallsdetailsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MallsdetailsProvider {
  data: any;

  constructor(public http: Http) {
    console.log('Hello MallsdetailsProvider Provider');
  }

  detailedMalls(mallsinfo) {
    return new Promise(resolve => {
      this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + mallsinfo + "&key=AIzaSyCXpd1MNs44B5NJ5xs2PsTDeGFjlXC8ORw&callback=initmap")
        .map(res => res.json())
        .subscribe(data => {

          this.data = data;
          resolve(this.data.result);


        })
    })
  }


  getArray(size): Array<any> {
    return new Array(size);
  }

  detailedDeals(lat, lon) {
    return new Promise(resolve => {
      this.http.get("http://api.sqoot.com/v2/deals?api_key=hws8td&location=" + lat + "," + lon + "&category_slugs=electronics,womens-clothing,beauty_health,audio,automotive,automative-services,baby,bars-clubs,beauty_health,bowling,bridal,electronics,facial")
        .map(res => res.json())
        .subscribe(data => {

          this.data = data;
          resolve(this.data);
          console.log(this.data);
        });
    });
  }
}

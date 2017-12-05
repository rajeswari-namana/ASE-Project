import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {DealsinfoPage} from "../../pages/dealsinfo/dealsinfo";

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
      this.http.get("http://api.sqoot.com/v2/deals?api_key=hws8td&location=" + lat + "," + lon + "&category_slugs=electronics,womens-clothing,beauty_health,audio,automotive,automative-services,baby,bars-clubs,beauty_health,bowling,bridal,electronics,facialactivities-events,audio,automotive,automotive-services,baby,chiropractic,city-tours,college,comedy-clubs,concerts,crafts_hobbies,dance-classes,dental,dermatology,dining-nightlife,eye-vision,facial,fitness,restaurants,yoga,food-alcohol,golf,kitchen,luggage,manicure-pedicure,martial-arts,massage,mens-clothing,mens_fashion,mobile")
        .map(res => res.json())
        .subscribe(data => {

          this.data = data;
          resolve(this.data);

        });
    });
  }

  infoDeals(dealid) {
    return new Promise(resolve => {
      this.http.get("http://api.sqoot.com/v2/deals/"+dealid+"?api_key=hws8td")
        .map(res => res.json())
        .subscribe(data => {

          this.data = data;
          resolve(this.data);

        });
    });
  }



}

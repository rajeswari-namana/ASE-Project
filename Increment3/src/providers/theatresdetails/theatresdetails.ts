import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the MallsdetailsProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class TheatresdetailsProvider {
  data: any;
  constructor(public http: Http) {
    console.log('Hello TheatresdetailsProvider Provider');
  }

  detailedMalls(theatresinfo){
    return new Promise(resolve => {
      this.http.get("https://maps.googleapis.com/maps/api/place/details/json?placeid="+theatresinfo+"&key=AIzaSyCXpd1MNs44B5NJ5xs2PsTDeGFjlXC8ORw&callback=initmap")
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

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
data: any;


  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }

  weatherForLocation(latitude, longitude){
    return new Promise(resolve => {
      this.http.get("http://api.wunderground.com/api/9eff93bd00e32bc4/conditions/q/"+latitude+","+longitude+".json")
        .map(res => res.json())
        .subscribe(data => {

          this.data = data;
          resolve(this.data.current_observation);
          console.log(this.data.current_observation.display_location.full);
          console.log(this.data.current_observation.UV);


        })
    })
  }


}


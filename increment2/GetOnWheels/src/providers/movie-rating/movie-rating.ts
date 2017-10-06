/**
 * Created by rajin on 10/4/2017.
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieRatingProvider {
  data: any;

  constructor(private http: Http) {
    console.log('Hello MovieRatingProvider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get("https://api.uclassify.com/v1/rajeswari/sentiment/classify?readkey=H2NmEMjuRiLt&text=49.9999")
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          console.log(data);
          resolve(this.data);
        });
    });
  }
}

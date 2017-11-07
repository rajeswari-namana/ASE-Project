import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieDataProvider {
  data: any;

  constructor(private http: Http) {
    console.log('Hello MovieDataProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=1dd53393337c4051b0c109c18e659e56&primary_release_date.gte=2017-09-30')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data.results;
          resolve(this.data);
        });
    });
  }
}

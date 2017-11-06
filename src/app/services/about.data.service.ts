import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Experience} from '../models/exprience';
import 'rxjs/add/operator/map';
@Injectable()
export class AboutDataService {
Experiences: Experience[];
// private postUrl = 'http://localhost:52826/';
 private postUrl = 'http://blog.shahidulla.com/';
constructor(private http: Http) {

}

getExperience(): Observable<Experience[]> {
  return this.http.get('../assets/data/experience.json')
      .map(res => <Experience[]>res.json());
}
}

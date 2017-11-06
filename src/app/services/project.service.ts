import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Project} from '../models/project';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectService {
  Projects: Project[];
    // tslint:disable-next-line:one-line
    constructor(private http: Http) {

    }
    getProjects(): Observable<Project[]> {
      return this.http.get('../assets/data/project.json')
      .map(res => <Project[]>res.json());
    }

   // getOneProject(id: number | string) {
       // return this.projectPromise
           // .then(project => project.find(project => project.id === +id));
  //  }
}

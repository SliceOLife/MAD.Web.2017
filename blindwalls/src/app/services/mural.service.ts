import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Mural }         from '../models/mural'

@Injectable()
export class MuralService {
  private headers = new Headers({'Content-Type': 'application/json', 
  'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJibGluZHdhbGwiLCJleHAiOjE0NzcwNTUyNDM4Mzd9.xCUtndY08RdDTVFaSdocsfdsZZ1m4-Zu6lxrgqt5GOQ'});

  private baseUrl = 'https://api.blindwalls.gallery/apiv2';

  constructor(private http: Http) { 
  }

  getMurals(): Promise<any[]> {
    const url = `${this.baseUrl}/murals`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

  getMuralsNew(){
    const url = `${this.baseUrl}/murals`;
    return this.http.get(url).map(res => res.json());
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

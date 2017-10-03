import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Mural } from '../models/mural';

@Injectable()
export class MuralService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'X-Access-Token':
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJibGluZHdhbGwiLCJleHAiOjE0NzcwNTUyNDM4Mzd9.xCUtndY08RdDTVFaSdocsfdsZZ1m4-Zu6lxrgqt5GOQ'
  });

  private baseUrl = 'https://api.blindwalls.gallery/apiv2';

  constructor(private _http: Http) {
  }

  getMurals(): Observable<Mural[]> {
    return this._http
      .get(this.baseUrl + '/murals')
      .map((response: Response) => {
        return <Mural[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}

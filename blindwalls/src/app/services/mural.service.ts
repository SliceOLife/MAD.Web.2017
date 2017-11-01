import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AsyncLocalStorage} from 'angular-async-local-storage';

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

  constructor(private _http: Http, protected localStorage: AsyncLocalStorage) {
  }

  getMurals(): Observable<Mural[]> {
    // Check if we have anything in storage
    this.localStorage.getItem('murals').subscribe((data) => {
      if (data != null) {
        return <Mural[]>data;
      }
    });

    return this.loadMurals();
  }

  loadMurals(): Observable<Mural[]> {
    return this._http
      .get(this.baseUrl + '/murals')
      .map((response: Response) => {
        this.storeMurals(<Mural[]>response.json());
        return <Mural[]>response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

  storeMurals(data) {
    this.localStorage.setItem('murals', JSON.stringify(data)).subscribe(() => {
      console.log('Loaded Murals into localStorage');
    });
  }
}

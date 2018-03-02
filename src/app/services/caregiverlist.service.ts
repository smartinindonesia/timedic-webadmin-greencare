import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class CaregiverlistService {

  authToken: any;
  user: any;

  constructor(private http: Http) { }

  getCareGivers(params) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    let strpar = '?page='+params.page+'&size='+params.size+'&sort='+params.sort+'&sortField='+params.sortField;
    return this.http.get('https://timedic.id:8443/api/caregiverswithpagination'+strpar, {headers: headers}).map(res => res.json());
  }

  registerCareGivers(params){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.post('https://timedic.id:8443/api/caregiver', params, {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}

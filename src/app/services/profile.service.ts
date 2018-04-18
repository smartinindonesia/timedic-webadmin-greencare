import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment'

@Injectable()
export class ProfileService {

  authToken: any;
  user: any;

  constructor(private http: Http) {
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    this.loadUser();
    headers.append('Authorization', this.authToken);
    return this.http.get(environment.origin_host+'api/clinicAdmin/' + this.user.id, {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadUser() {
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
  }

  getUser(){
    return this.user;
  }
}

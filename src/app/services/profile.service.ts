import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

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
    return this.http.get('https://timedic.id:8443/api/user/' + this.user.id, {headers: headers}).map(res => res.json());
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

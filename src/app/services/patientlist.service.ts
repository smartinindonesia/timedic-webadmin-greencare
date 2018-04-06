import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import '../../route_config'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment';

@Injectable()
export class PatientlistService {
  authToken: any;
  user: any;

  constructor(private http: Http) {
  }

  getPatientList() {
    let headers = new Headers();
    this.loadToken();
    console.log(this.authToken);
    headers.append('Authorization', this.authToken);
    return this.http.get(environment.origin_host+'api/patients', {headers: headers}).map(res => res.json());
  }

  getPatientByUserId(id: number) {
    let headers = new Headers();
    this.loadToken();
    console.log(this.authToken);
    headers.append('Authorization', this.authToken);
    return this.http.get(environment.origin_host+'api/patients/findbyiduser/' + id, {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}

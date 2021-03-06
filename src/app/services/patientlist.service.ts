import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import '../../route_config'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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
    return this.http.get('https://timedic.id:8443/api/patients' , {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}

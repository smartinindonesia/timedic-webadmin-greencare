import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import '../../route_config'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OrderlistService {

  authToken: any;
  user: any;

  constructor(private http: Http) {
  }

  getOderList() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get('https://timedic.id:8443/api/transactions/homecare/' , {headers: headers}).map(res => res.json());
  }

  updateOrder(input, id){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.put('https://timedic.id:8443/api/transactions/homecare/'+id, input,{headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}

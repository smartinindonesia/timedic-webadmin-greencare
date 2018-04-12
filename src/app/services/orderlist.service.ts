import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import '../../route_config'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment'

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
    return this.http.get(environment.origin_host + 'api/transactions/homecare/', {headers: headers}).map(res => res.json());
  }

  getOrderById(idOrder: number) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get(environment.origin_host + 'api/transactions/homecare/' + idOrder, {headers: headers}).map(res => res.json());
  }

  getOrderListWithPagination(page, sze, srt, srtFld) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    let strpar = '?page=' + page + '&size=' + sze + '&sort=' + srt + '&sortField=' + srtFld;
    return this.http.get(environment.origin_host + 'api/transactionWithPagination/homecare' + strpar, {headers: headers}).map(res => res.json());
  }

  updateOrder(input, id) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.put(environment.origin_host + 'api/transactions/homecare/' + id, input, {headers: headers});
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}

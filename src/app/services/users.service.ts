import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import '../../route_config'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from '../../environments/environment'

@Injectable()
export class UsersService {

  authToken: any;
  user: any;

  constructor(private http: Http) {
  }

  getUserList(page, sze, srt, srtFld) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    let strpar = '?page=' + page + '&size=' + sze + '&sort=' + srt + '&sortField=' + srtFld;
    console.log(strpar);
    return this.http.get(environment.origin_host + 'api/userswithpagination' + strpar, {headers: headers}).map(res => res.json());
  }

  getUserListBySearchField(page, sze, srt, srtFld, searchFields, searchValue) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    let strpar = '?page=' + page + '&size=' + sze + '&sort=' + srt + '&sortField=' + srtFld + '&searchField=' + searchFields + '&value=' + searchValue;
    console.log(strpar);
    return this.http.get(environment.origin_host + 'api/usersWithPaginationByField' + strpar, {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}

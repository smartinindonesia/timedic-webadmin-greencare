import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class CaregiverlistService {

  authToken: any;
  user: any;

  constructor(private http: Http) {
  }

  getCareGivers(page, sze, srt, srtFld) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    let strpar = '?page=' + page + '&size=' + sze + '&sort=' + srt + '&sortField=' + srtFld;
    console.log(strpar);
    return this.http.get('https://timedic.id:8443/api/caregiversWithPagination' + strpar, {headers: headers}).map(res => res.json());
  }

  registerCareGivers(params) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.post('https://timedic.id:8443/api/caregiver', params, {headers: headers}).map(res => res.json());
  }

  editCareGivers(params:any, id:number) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.put('https://timedic.id:8443/api/caregiver/' + id, params, {headers: headers}).map(res => res.json());
  }

  deleteCareGiver(params){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.delete('https://timedic.id:8443/api/caregiver/' + params.id, {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}

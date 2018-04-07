import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment'

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
    return this.http.get(environment.origin_host + 'api/caregiversWithPagination' + strpar, {headers: headers}).map(res => res.json());
  }

  registerCareGivers(params) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.post(environment.origin_host + 'api/caregiver', params, {headers: headers}).map(res => res.json());
  }

  editCareGivers(params: any, id: number) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.put(environment.origin_host + 'api/caregiver/' + id, params, {headers: headers}).map(res => res.json());
  }

  deleteCareGiver(params) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.delete(environment.origin_host + 'api/caregiver/' + params.id, {headers: headers}).map(res => res.json());
  }

  fetchCaregiverSchedule(id: number) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get(environment.origin_host + 'api/SchedulleByIdCaregiver/' + id, {headers: headers}).map(res => res.json());
  }

  caregiverAssignSchedule(body: Object) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.post(environment.origin_host + 'api/caregiverTrxList/', body, {headers: headers}).map(res => res.json());
  }

  caregiverDeleteAssignedSchedule(id: number) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.delete(environment.origin_host + 'api/caregiverTrxList/' + id, {headers: headers});
  }

  caregiverEditSchedule(body: Object, id: number) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.put(environment.origin_host + 'api/caregiverTrxList/' + id, body, {headers: headers}).map(res => res.json());
  }

  caregiverDeleteSchedule(id: number) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.delete(environment.origin_host + 'api/caregiverTrxList/' + id, {headers: headers}).map(res => res.json());
  }

  fetchCaregiverScheduleByTime(time: string, day: string) {
    let param = '?time=' + time + '&' + 'day=' + day;
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.post(environment.origin_host + 'api/caregiverSchedulleByTime' + param, null, {headers: headers}).map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}

import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DatatransferService {

  serviceData: Object;
  serviceData2: Object;
  serviceData3: Object;
  refreshData: boolean;
  public _subject = new Subject<Object>();
  public event = this._subject.asObservable();

  public publish(data: any) {
    this._subject.next(data);
  }

  constructor() { }

  getDataTransfer(){
    return this.serviceData;
  }

  getDataTransfer2(){
    return this.serviceData2
  }

  getDataTransfer3(){
    return this.serviceData3;
  }

  setDataTransfer(data: Object){
    this.serviceData = data;
  }

  setDataTransfer2(data: Object){
    this.serviceData2 = data;
  }

  setDataTransfer3(data: Object){
    this.serviceData3 = data;
  }

  isRefresh(){
    return this.refreshData;
  }

  setRefresh(type: boolean){
    this.refreshData = type;
  }
}

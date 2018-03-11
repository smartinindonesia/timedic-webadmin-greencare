import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DatatransferService {

  serviceData: Object;
  public _subject = new Subject<Object>();
  public event = this._subject.asObservable();

  public publish(data: any) {
    this._subject.next(data);
  }

  constructor() { }

  getDataTransfer(){
    return this.serviceData;
  }

  setDataTransfer(data: Object){
    this.serviceData = data;
  }

}

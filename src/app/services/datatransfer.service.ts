import { Injectable } from '@angular/core';

@Injectable()
export class DatatransferService {
  serviceData: Object;
  constructor() { }

  getDataTransfer(){
    return this.serviceData;
  }

  setDataTransfer(data: Object){
    this.serviceData = data;
  }
}

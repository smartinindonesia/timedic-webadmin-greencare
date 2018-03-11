import { Component, OnInit } from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';

@Component({
  selector: 'app-assignschedule',
  templateUrl: './assignschedule.component.html',
  styleUrls: ['./assignschedule.component.css']
})
export class AssignscheduleComponent implements OnInit {

  objectCaregiver:Object;

  constructor(private dataTransfer:DatatransferService) {

  }

  ngOnInit() {
    this.getDataFromService();
  }

  getDataFromService(){
    this.objectCaregiver = this.dataTransfer.getDataTransfer();
  }

}

import { Component, OnInit } from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service'
import {DatatransferService} from '../../services/datatransfer.service'
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-caregiverschedules',
  templateUrl: './caregiverschedules.component.html',
  styleUrls: ['./caregiverschedules.component.css']
})
export class CaregiverschedulesComponent implements OnInit {
  caregiver:any;
  schedules:any;

  constructor(private caregiverlistService:CaregiverlistService,
              private datatransferService:DatatransferService,
              private flashMessage:FlashMessagesService) {
  }

  ngOnInit() {
    let that = this;
    this.caregiver = this.datatransferService.getDataTransfer();
    this.caregiverlistService.fetchCaregiverSchedule(this.caregiver.id).subscribe(data => {
      that.schedules = data;
    }, error => {
      console.log(error);
      that.flashMessage.show('Gagal mengambil data. Jaringan bermasalah!', {cssClass: 'alert-danger', timeout: 5000});
    });
  }

}

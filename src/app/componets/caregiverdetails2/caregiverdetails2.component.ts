import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-caregiverdetails2',
  templateUrl: './caregiverdetails2.component.html',
  styleUrls: ['./caregiverdetails2.component.css']
})
export class Caregiverdetails2Component implements OnInit {

  caregiver: Object;

  constructor(private router: Router,
              private dataTransferService: DatatransferService,
              private flashMessage: FlashMessagesService,
              private utilityService: UtilityService) {

  }

  ngOnInit() {
    this.caregiver = this.dataTransferService.getDataTransfer2();
  }

  convertDateTime(date:number){
    return this.utilityService.milisToDateText(new Date(date));
  }
}

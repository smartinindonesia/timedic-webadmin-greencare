import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-caregiverdetails',
  templateUrl: './caregiverdetails.component.html',
  styleUrls: ['./caregiverdetails.component.css']
})
export class CaregiverdetailsComponent implements OnInit {

  caregiver: Object;

  constructor(private router: Router,
              private dataTransferService: DatatransferService,
              private flashMessage: FlashMessagesService,
              private utilityService: UtilityService) {

  }

  ngOnInit() {
    this.caregiver = this.dataTransferService.getDataTransfer();
  }

  convertDateTime(date:number){
    return this.utilityService.milisToDateText(new Date(date));
  }

}

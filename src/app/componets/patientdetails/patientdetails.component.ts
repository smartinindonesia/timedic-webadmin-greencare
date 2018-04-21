import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ModalService} from '../../services/modal.service';
import {DatatransferService} from '../../services/datatransfer.service';
import * as Util from 'util';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {

  patient: Object;

  constructor(private modalService: ModalService,
              private router: Router,
              private dataTransferService: DatatransferService,
              private utilityService: UtilityService,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.patient = this.dataTransferService.getDataTransfer();
  }

  formatDate(date: number) {
    return this.utilityService.milisToDateText(new Date(date));
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ModalService} from '../../services/modal.service';
import {DatatransferService} from '../../services/datatransfer.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {

  patient:Object;

  constructor(private modalService: ModalService,
              private router: Router,
              private dataTransferService: DatatransferService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.patient = this.dataTransferService.getDataTransfer();
  }

}

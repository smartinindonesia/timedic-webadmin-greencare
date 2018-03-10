import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';

@Component({
  selector: 'app-assessmentorder',
  templateUrl: './assessmentorder.component.html',
  styleUrls: ['./assessmentorder.component.css']
})
export class AssessmentorderComponent implements OnInit {

  dataTransfer: Object;

  constructor(private dataTransferService: DatatransferService) {
  }

  ngOnInit() {
    this.dataTransfer = this.dataTransferService.getDataTransfer();
  }

}

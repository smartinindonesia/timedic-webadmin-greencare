import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';

@Component({
  selector: 'app-assessmentorder',
  templateUrl: './assessmentorder.component.html',
  styleUrls: ['./assessmentorder.component.css']
})
export class AssessmentorderComponent implements OnInit {

  orderObject: Object;

  constructor(private dataTransferService: DatatransferService) {
  }

  ngOnInit() {
    this.orderObject = this.dataTransferService.getDataTransfer();
  }

}

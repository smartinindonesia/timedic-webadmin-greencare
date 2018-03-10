import { Component, OnInit } from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';

@Component({
  selector: 'app-assignperawat',
  templateUrl: './assignperawat.component.html',
  styleUrls: ['./assignperawat.component.css']
})
export class AssignperawatComponent implements OnInit {

  orderObject: Object;

  constructor(private dataTransferService: DatatransferService) {
  }

  ngOnInit() {
    this.orderObject = this.dataTransferService.getDataTransfer();
  }

}

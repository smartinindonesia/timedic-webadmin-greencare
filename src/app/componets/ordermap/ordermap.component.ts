import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DatatransferService} from '../../services/datatransfer.service';
import {OrderlistService} from '../../services/orderlist.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-ordermap',
  templateUrl: './ordermap.component.html',
  styleUrls: ['./ordermap.component.css']
})
export class OrdermapComponent implements OnInit {

  orderObject: Object;
  lat:number;
  lang:number;

  constructor(private router: Router, private dataTransferService: DatatransferService, private orderListService: OrderlistService, private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.orderObject = this.dataTransferService.getDataTransfer();
  }
}

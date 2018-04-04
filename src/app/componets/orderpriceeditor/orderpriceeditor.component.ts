import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DatatransferService} from '../../services/datatransfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orderpriceeditor',
  templateUrl: './orderpriceeditor.component.html',
  styleUrls: ['./orderpriceeditor.component.css']
})
export class OrderpriceeditorComponent implements OnInit {

  order:Object;
  fixedPrice: number;

  constructor(private router: Router, private dataTransferService: DatatransferService, private flashMessage: FlashMessagesService){

  }

  ngOnInit() {
    this.order = this.dataTransferService.getDataTransfer();
    this.fixedPrice = this.order['fixedPrice'];
  }

}

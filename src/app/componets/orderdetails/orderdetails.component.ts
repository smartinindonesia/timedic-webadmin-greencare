import {Component, OnInit} from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {DatatransferService} from '../../services/datatransfer.service';
import {OrderlistService} from '../../services/orderlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  order: Object;

  constructor(private router: Router, private dataTransferService: DatatransferService, private orderListService: OrderlistService, private flashMessage: FlashMessagesService) {

  }

  ngOnInit() {
    this.order = this.dataTransferService.getDataTransfer();
  }

  goToOrderMap(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['ordermap']);
  }

  goToAssesmentOrder(data: Object){
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['assessmentorder']);
  }

}

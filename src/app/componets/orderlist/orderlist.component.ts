import {Component, OnInit} from '@angular/core';
import {OrderlistService} from '../../services/orderlist.service';
import {Data, Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DatatransferService} from '../../services/datatransfer.service';
import {log} from 'util';
import {forEach} from '@angular/router/src/utils/collection';
import {} from '@angular/common';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})

export class OrderlistComponent implements OnInit {

  orderList: Object;

  constructor(private dataTransferService: DatatransferService,
              private orderListService: OrderlistService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.getOrderList();
  }

  goToAssessmentOrder(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['assessmentorder']);
  }

  goToOrderMap(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['ordermap']);
  }

  goToEditTransaction(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['orderstatus']);
  }

  updateOrder(orders: Object, type: number) {
    console.log('Order ' + orders['transactionStatusId']['id']);
    let updateparams = {
      'transactionStatusId': {
        'id': type
      }
    };
    this.orderListService.updateOrder(updateparams, orders['id']).subscribe(
      data => {
        this.getOrderList();
        this.router.navigate(['orderlist']);
      }, error => {
        this.getOrderList();
        this.router.navigate(['orderlist']);
      }
    );
  }

  assignCaregiver(myorder: Object) {
    this.dataTransferService.setDataTransfer(myorder);
    this.router.navigate(['assigncaregiver'])
  }

  getOrderList() {
    this.orderListService.getOderList().subscribe(
      data => {
        for (var i = 0; i < data.length; i++) {
          let time = new Date(data[i].expiredTransactionTime);
          data[i]['expiredTransactionTimeConv'] = formatDate(time);
        }
        this.orderList = data;
        console.log(data);
      }, error => {
        console.log(error);
        return false;
      }
    );

    function formatDate(date) {
      var monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
      ];

      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      var d = new Date(date);
      var dayName = days[d.getDay()];
      var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

      return dayName + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year + ' : ' + time;
    }

  }


}

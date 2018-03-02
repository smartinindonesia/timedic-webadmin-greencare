import {Component, OnInit} from '@angular/core';
import {OrderlistService} from '../../services/orderlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})

export class OrderlistComponent implements OnInit {

  orderList: Object;

  constructor(private orderListService: OrderlistService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this.orderListService.getOderList().subscribe(
      data => {
        this.orderList = data;
        console.log(data);
      }, error => {
        console.log(error);
        return false;
      }
    );
  }


}

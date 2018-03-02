import {Component, OnInit} from '@angular/core';
import {OrderlistService} from '../../services/orderlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {log} from 'util';
import {forEach} from '@angular/router/src/utils/collection';

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
        for(var i = 0; i < data.length; i++)
        {
          let time = new Date(data[i].expiredTransactionTime);
          data[i]["expiredTransactionTimeConv"] = formatDate(time);
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

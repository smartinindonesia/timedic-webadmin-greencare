import {Component, OnInit, PLATFORM_ID, Inject, Injector} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {OrderlistService} from '../../services/orderlist.service';
import {Data, Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DatatransferService} from '../../services/datatransfer.service';
import {forEach} from '@angular/router/src/utils/collection';
import {PushNotificationsService} from 'ng-push';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})

export class OrderlistComponent implements OnInit {

  private stompClient;
  private connected: boolean = false;
  private serverUrl = 'https://timedic.id:8443/socket';
  private title = 'WebSockets chat';

  private _push: PushNotificationsService;
  orderList: Object;
  audio: any;

  constructor(@Inject(PLATFORM_ID) platformId: string,
              private _pushNotifications: PushNotificationsService,
              private injector: Injector,
              private dataTransferService: DatatransferService,
              private orderListService: OrderlistService,
              private router: Router,
              private flashMessage: FlashMessagesService) {

    if (isPlatformBrowser(platformId)) {
      //inject service only on browser platform
      this._push = this.injector.get(PushNotificationsService);
    }
  }

  ngOnInit() {
    this._pushNotifications.requestPermission();
    this.getOrderList();
    this.initAudio();
    this.loadAudio();
    this.connectWebSocket();
  }

  initAudio() {
    this.audio = new Audio();
    this.audio.src = '../../../assets/audio/message.mx';
  }

  loadAudio() {
    this.audio.load();
  }

  playAudio() {
    this.audio.play();
  }

  restartAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  connectWebSocket() {
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      this.connected = true;
      that.stompClient.subscribe('/notification', (message) => {
        if (message.body) {
          let msj = JSON.parse(message.body);
          console.log('BODY ', msj.toString());
          that.addNotification('Pemesanan Jasa Perawat', msj);
        }
      });
    });
  }

  addNotification(title: string, messagebody: any): any {
    let notif = messagebody.homecarePatientId.idAppUser.frontName +
      ' ' + messagebody.homecarePatientId.idAppUser.middleName +
      ' ' + messagebody.homecarePatientId.idAppUser.lastName +
      ' telah memesan layanan perawat. Klik notifikasi ini untuk melihat detail pemesanan';
    let bd = {
      body: notif,
    }
    this._pushNotifications.create(title, bd).subscribe(
      res => {
        this.playAudio();
        this.getOrderList();
        if (res.event.type === 'click') {
          this.restartAudio();
          this.goToOrderDetails(messagebody);
          res.notification.close();
        }
      },
      err => console.log(err)
    )
  }

  goToAssessmentOrder(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['assessmentorder']);
  }

  goToOrderPrice(data: Object){
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['orderpriceeditor']);
  }

  goToOrderMap(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['ordermap']);
  }

  goToEditTransaction(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['orderstatus']);
  }

  goToOrderDetails(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['orderdetails']);
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

import {Component, OnInit} from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {DatatransferService} from '../../services/datatransfer.service';
import {OrderlistService} from '../../services/orderlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-orderdetaileditor',
  templateUrl: './orderdetaileditor.component.html',
  styleUrls: ['./orderdetaileditor.component.css']
})
export class OrderdetaileditorComponent implements OnInit {

  order: Object;
  sumOfDays: number;
  startDate: any;
  endDate: any;

  constructor(private router: Router,
              private dataTransferService: DatatransferService,
              private orderListService: OrderlistService,
              private flashMessage: FlashMessagesService,
              private utilityService: UtilityService) {

  }

  ngOnInit() {
    if (this.dataTransferService.isRefresh()) {
      this.order = this.dataTransferService.getDataTransfer();
      this.getOrderById();
    } else {
      this.order = this.dataTransferService.getDataTransfer();
    }
    this.setOrderDetail(this.order);
  }

  setOrderDetail(order:Object){
    this.sumOfDays = order['sumOfDays'];
    this.startDate = this.getDateISO(order['dateTreatementStart']);
    this.endDate = this.getDateISO(order['dateTreatementEnd']);
  }

  goToOrderMap(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['ordermap']);
  }

  goToAssesmentOrder(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['assessmentorder']);
  }

  goToOrderPrice(data: Object) {
    this.dataTransferService.setDataTransfer(data);
    this.router.navigate(['orderpriceeditor']);
  }

  getOrderById() {
    this.orderListService.getOrderById(this.order['id']).subscribe(
      data => {
        this.order = data;
        console.log(data);
      }, error => {
        console.log('ini sedang error');
        console.log(error);
      }
    );
  }

  convertToRupiah(val: number) {
    return this.utilityService.convertNumberToRupiah(val);
  }

  convertDateTime(val: number) {
    return this.utilityService.milisToDateText(new Date(val));
  }

  getDateISO(val: number) {
    return this.utilityService.milisToDateOnly(val);
  }

  getDataDetails() {
    this.orderListService.getOrderById(this.order['id']).subscribe(
      data => {
        this.order = data;
        this.setOrderDetail(data);
        console.log(data);
      }, error => {
        console.log('ini sedang error');
        console.log(error);
      });
  }

  updateServiceDate(orders: Object){
    var myStDate = new Date(this.startDate);
    var myEdDate = new Date(this.endDate);
    let updateparams = {
      'dateTreatementStart': myStDate.getTime(),
      'dateTreatementEnd': myEdDate.getTime()
    };
    this.orderListService.updateOrder(updateparams, orders['id']).subscribe(data => {
        this.flashMessage.show('Tanggal transaksi ' + this.order['homecarePatientId']['name'] + ' telah berhasil dirubah', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.getDataDetails();
      }, error => {
        console.log(error);
        this.flashMessage.show('Tanggal transaksi ' + this.order['homecarePatientId']['name'] + ' gagal dirubah! mohon periksa kembali', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    );
  }

  updateOrderDaySum(orders: Object, val: number) {
    let updateparams = {
      'sumOfDays': val
    };

    this.orderListService.updateOrder(updateparams, orders['id']).subscribe(data => {
        this.flashMessage.show('Status transaksi ' + this.order['homecarePatientId']['name'] + ' telah berhasil dirubah', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.getDataDetails();
      }, error => {
        console.log(error);
        this.flashMessage.show('Status transaksi ' + this.order['homecarePatientId']['name'] + ' gagal dirubah! mohon periksa kembali', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    );
  }

  updateOrderPrepaidPrice(orders: Object, type: number) {
    let updateparams = {
      'paymentPrepaidPriceStatusId': {
        'id': type
      }
    };

    this.orderListService.updateOrder(updateparams, orders['id']).subscribe(data => {
        this.flashMessage.show('Status transaksi ' + this.order['homecarePatientId']['name'] + ' telah berhasil dirubah', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.getDataDetails();
      }, error => {
        console.log(error);
        this.flashMessage.show('Status transaksi ' + this.order['homecarePatientId']['name'] + ' gagal dirubah! mohon periksa kembali', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    );
  }

  updateOrderFixedPrice(orders: Object, type: number) {
    let updateparams = {
      'paymentFixedPriceStatusId': {
        'id': type
      }
    };

    this.orderListService.updateOrder(updateparams, orders['id']).subscribe(data => {
        this.flashMessage.show('Status transaksi ' + this.order['homecarePatientId']['name'] + ' telah berhasil dirubah', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.getDataDetails();
      }, error => {
        console.log(error);
        this.flashMessage.show('Status transaksi ' + this.order['homecarePatientId']['name'] + ' gagal dirubah! mohon periksa kembali', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    );
  }

}

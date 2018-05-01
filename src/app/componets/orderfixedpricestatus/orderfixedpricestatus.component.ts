import {Component, OnInit} from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {DatatransferService} from '../../services/datatransfer.service';
import {OrderlistService} from '../../services/orderlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-orderfixedpricestatus',
  templateUrl: './orderfixedpricestatus.component.html',
  styleUrls: ['./orderfixedpricestatus.component.css']
})
export class OrderfixedpricestatusComponent implements OnInit {

  order: Object;

  constructor(private router: Router, private dataTransferService: DatatransferService, private orderListService: OrderlistService, private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.order = this.dataTransferService.getDataTransfer();
  }

  updateOrder(orders: Object, type: number) {
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
        this.router.navigate(['orderlist']);
      }, error => {
        console.log(error);
        this.router.navigate(['orderlist']);
        this.flashMessage.show('Status transaksi ' + this.order['homecarePatientId']['name'] + ' gagal dirubah! mohon periksa kembali', {
          cssClass: 'alert-danger',
          timeout: 5000
        });
      }
    );
  }
}

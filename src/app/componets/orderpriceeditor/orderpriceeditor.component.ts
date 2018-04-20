import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {Router} from '@angular/router';
import {OrderlistService} from '../../services/orderlist.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-orderpriceeditor',
  templateUrl: './orderpriceeditor.component.html',
  styleUrls: ['./orderpriceeditor.component.css']
})
export class OrderpriceeditorComponent implements OnInit {

  order: Object;
  fixedPrice: number;
  function: any;


  constructor(private orderListService: OrderlistService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private dataTransferService: DatatransferService,
              private utilityService: UtilityService) {
  }

  updatePrice() {
    let updateParams = {
      'fixedPrice': this.fixedPrice
    }

    let that = this;
    this.orderListService.updateOrder(updateParams, this.order['id']).subscribe(function (data) {
      that.flashMessage.show('Harga telah diubah', {cssClass: 'alert-success', timeout: 5000});
      that.router.navigate(['orderlist']);
    }, function (error) {
      that.flashMessage.show('Harga gagal diubah', {cssClass: 'alert-danger', timeout: 5000});
    });
  }

  ngOnInit() {
    this.order = this.dataTransferService.getDataTransfer();
    this.fixedPrice = this.order['fixedPrice'];
  }

  convertToRupiah(val:number){
    return this.utilityService.convertNumberToRupiah(val);
  }

}

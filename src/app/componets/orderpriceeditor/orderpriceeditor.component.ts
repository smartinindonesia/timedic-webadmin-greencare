import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {Router} from '@angular/router';
import {OrderlistService} from '../../services/orderlist.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-orderpriceeditor',
  templateUrl: './orderpriceeditor.component.html',
  styleUrls: ['./orderpriceeditor.component.css']
})
export class OrderpriceeditorComponent implements OnInit {

  order: Object;
  fixedPrice: number;



  constructor(private orderListService: OrderlistService,
              private flashMessage: FlashMessagesService,
              private router: Router,
              private dataTransferService: DatatransferService) {
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

  convertToRupiah(angka: number) {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
  }

}

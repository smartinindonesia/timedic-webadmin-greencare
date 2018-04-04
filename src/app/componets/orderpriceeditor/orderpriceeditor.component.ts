import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderpriceeditor',
  templateUrl: './orderpriceeditor.component.html',
  styleUrls: ['./orderpriceeditor.component.css']
})
export class OrderpriceeditorComponent implements OnInit {

  order:Object;
  fixedPrice: number;

  ngOnInit() {
    this.order = this.dataTransferService.getDataTransfer();
  }

}

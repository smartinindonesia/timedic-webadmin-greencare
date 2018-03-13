import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {CaregiverlistService} from '../../services/caregiverlist.service';

@Component({
  selector: 'app-assignperawat',
  templateUrl: './assignperawat.component.html',
  styleUrls: ['./assignperawat.component.css']
})
export class AssignperawatComponent implements OnInit {

  orderObject: Object;
  careGiverList: Object;

  pagetab1: number;
  sizetab1: number;
  maxpagetab1: number;

  constructor(private dataTransferService: DatatransferService, private caregiverListSvc: CaregiverlistService) {
  }

  ngOnInit() {
    this.pagetab1 = 0;
    this.sizetab1 = 2;
    this.orderObject = this.dataTransferService.getDataTransfer();
    this.getCareGiverList();
  }

  getCareGiverList() {
    this.caregiverListSvc.getCareGivers(this.pagetab1, this.sizetab1, 'ASC', 'id').subscribe(data => {
      for (var i = 0; i < data[0].length; i++) {
        data[0][i].dobtext = formatDate(new Date(data[0][i].dateOfBirth));
      }
      this.maxpagetab1 = Math.ceil(data[1].numOfRows / this.sizetab1);
      this.careGiverList = data[0];
      console.log(data);
    }, error => {
      console.log(error);
      return false;
    });

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

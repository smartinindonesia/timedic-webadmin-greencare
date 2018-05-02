import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {OrderlistService} from '../../services/orderlist.service';
import {Router} from '@angular/router';
import {UtilityService} from '../../services/utility.service';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-assignperawat',
  templateUrl: './assignperawat.component.html',
  styleUrls: ['./assignperawat.component.css']
})
export class AssignperawatComponent implements OnInit {

  orderObject: Object;
  careGiverList: any[];

  maxpagetab1: number;

  month: string;
  years: string;
  day: string;
  hours: string;

  date: string;
  time: string;

  changing: boolean;

  constructor(private router: Router,
              private dataTransferService: DatatransferService,
              private caregiverListSvc: CaregiverlistService,
              private flashMessage: FlashMessagesService,
              private utiltyService: UtilityService,
              private orderListService: OrderlistService) {
  }

  ngOnInit() {
    this.orderObject = this.dataTransferService.getDataTransfer();
    this.setDateProperties(new Date(this.orderObject['date']));
    this.getCareGiverList();
  }

  onModelChanged() {
    this.changing = true;
    console.log('model changed');
  }

  onSubmitCaregiverItem(item: Object) {
    let that = this;
    let date = null;
    if (this.date === undefined || this.time === undefined || this.changing) {
      if (this.changing) {
        if (item['readysubmit']) this.flashMessage.show('Tanggal dan waktu belum diubah', {cssClass: 'alert-danger', timeout: 5000});
      } else {
        if (item['readysubmit']) this.flashMessage.show('Tanggal dan waktu belum ditentukan!', {cssClass: 'alert-danger', timeout: 5000});
      }
    } else {
      date = this.date + ' ' + this.time + ':00';
      let convDate = new Date(date).toISOString();
      let convDate2 = new Date(convDate).getTime();
      console.log(convDate + ' ' + convDate2);
      if (item['readysubmit']) {
        console.log(item['frontName']);
        var uploadItem =
          {
            'caregiverName': item['frontName'] + ' ' + item['middleName'] + ' ' + item['lastName'],
            'registerNurseNumber': item['registerNurseNumber'],
            'idHomecareClinic': {'id': 1},
            'date': convDate2,
            'idTransaction': that.orderObject['id'],
            'idCaregiver': item['id'],
            'rateStatus': false
          }
        console.log(uploadItem);
        that.caregiverListSvc.caregiverAssignSchedule(uploadItem).subscribe(data => {
          this.getOrderById();
        }, error => {
          console.log(error);
        });
      }
    }
  }

  getOrderById() {
    this.orderListService.getOrderById(this.orderObject['id']).subscribe(data => {
      this.gotoThisPage(data);
    }, error => {
      console.log(error);
    });
  }

  gotoThisPage(data: Object) {
    console.log('DATA LEWAT SINI');
    this.orderObject = data;
  }

  goToDetail(data: object) {
    this.dataTransferService.setDataTransfer2(data);
    this.router.navigate(['caredetails2']);
  }

  searchClick() {
    var dateParts = this.date;
    var timeParts = this.time;
    var datetime = (dateParts + 'T' + timeParts);
    this.setDateProperties(new Date(datetime));
    this.getCareGiverList();
    this.changing = false;
  }

  getCareGiverList() {
    let that = this;
    this.careGiverList = new Array();
    this.caregiverListSvc.fetchCaregiverScheduleByTime(this.hours, this.day).subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        data[i].idHomecareCaregiver.dobtext = this.formatDate(data[i].idHomecareCaregiver.dateOfBirth);
        data[i].idHomecareCaregiver.readysubmit = false;
        console.log(data[i].idHomecareCaregiver);
        var tempdata = data[i].idHomecareCaregiver;
        that.careGiverList[i] = tempdata;
      }
    }, error => {
      console.log(error);
    });
  }

  deleteAssignedCaregiver(item: any) {
    this.caregiverListSvc.caregiverDeleteAssignedSchedule(item.id).subscribe(data => {
      this.getOrderById();
    }, error => {
      console.log(error);
    });
  }

  formatDate(date) {
    return this.utiltyService.milisToDateText(new Date(date));
  }

  setDateProperties(date) {
    var monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];

    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var d = new Date(date);
    var dayName = days[d.getDay()];
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    this.month = monthNames[monthIndex];
    this.years = year;
    this.hours = time;
    this.day = dayName;
  }
}

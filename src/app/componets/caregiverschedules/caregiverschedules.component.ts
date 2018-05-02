import { Component, OnInit } from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service'
import {DatatransferService} from '../../services/datatransfer.service'
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-caregiverschedules',
  templateUrl: './caregiverschedules.component.html',
  styleUrls: ['./caregiverschedules.component.css']
})
export class CaregiverschedulesComponent implements OnInit {
  caregiver:any;
  schedules:any;

  constructor(private caregiverlistService:CaregiverlistService,
              private datatransferService:DatatransferService,
              private flashMessage:FlashMessagesService) {
  }

  ngOnInit() {
    let that = this;
    this.caregiver = this.datatransferService.getDataTransfer();
    this.caregiverlistService.fetchCaregiverSchedule(this.caregiver['id']).subscribe(data => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        let time = new Date(data[i].date);
        data[i]['dateConv'] = that.formatDate(time);
        if (data[i].status) {
          data[i]['statConv'] = "On";
        } else {
          data[i]['statConv'] = "Off";
        }
      }
      that.schedules = data;
    }, error => {
      console.log(error);
      that.flashMessage.show('Gagal mengambil data. Jaringan bermasalah!', {cssClass: 'alert-danger', timeout: 5000});
    });
  }

  changeDay(input:string){
    if (input == 'sunday') return 'Minggu';
    if (input == 'monday') return 'Senin';
    if (input == 'tuesday') return 'Selasa';
    if (input == 'wednesday') return 'Rabu';
    if (input == 'thursday') return 'Kamis';
    if (input == 'friday') return 'Jumat';
    if (input == 'saturday') return 'Sabtu';
    return '';
  }

  formatDate(date) {
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

    return dayName + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

}

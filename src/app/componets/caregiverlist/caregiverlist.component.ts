import {Component, OnInit, ViewChild} from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ModalService} from '../../services/modal.service';

@Component({
  selector: 'app-caregiverlist',
  templateUrl: './caregiverlist.component.html',
  styleUrls: ['./caregiverlist.component.css']
})

export class CaregiverlistComponent implements OnInit {

  careGiverList: Object;
  page: number;
  size: number;
  maxpage: number;
  registerFeedback: Object;

  caregiverObj: Object;


  constructor(private modalService: ModalService, private caregiverListSvc: CaregiverlistService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.page = 0;
    this.size = 20;
    this.maxpage = 10;
    this.getCareGiverList();
  }

  openModal(id: string, caregiver: Object) {
    this.caregiverObj = caregiver;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onClickNext() {
    if (this.page < this.maxpage) {
      this.page++;
      this.getCareGiverList();
    }
  }

  onClickSelectedPage(input) {
    if (input >= 0 && input < (this.maxpage - 1)) {
      this.page = input;
      this.getCareGiverList();
    }
  }

  onClickPrevious() {
    if (this.page >= 0) {
      this.page--;
      this.getCareGiverList();
    }
  }

  getCareGiverList() {
    this.caregiverListSvc.getCareGivers(this.page, this.size, 'ASC', 'id').subscribe(data => {
      this.careGiverList = data;
      for (var i = 0; i < data.length; i++) {
        data[i].dobtext = formatDate(new Date(data[i].dateOfBirth));
      }
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


  onItemEdit() {
    delete this.caregiverObj['username'];
    this.caregiverListSvc.editCareGivers(this.caregiverObj).subscribe(data => {
      this.registerFeedback = data;
      console.log(data);
      this.router.navigate(['caregiverlist']);
      this.flashMessage.show('Berhasil mengubah data perawat!', {cssClass: 'alert-success', timeout: 5000});
    }, error => {
      console.log(error);
      this.router.navigate(['caregiverlist']);
    });

  }

  addCareGiver() {
    let param;
    this.caregiverListSvc.registerCareGivers(param).subscribe(data => {
      this.registerFeedback = data;
      console.log(data);
      this.router.navigate(['caregiverlist']);
    }, error => {
      console.log(error);
      this.router.navigate(['caregiverlist']);
    });
  }

}

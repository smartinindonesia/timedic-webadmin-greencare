import {Component, OnInit, ViewChild} from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ModalService} from '../../services/modal.service';
import {DatatransferService} from '../../services/datatransfer.service';

@Component({
  selector: 'app-caregiverlist',
  templateUrl: './caregiverlist.component.html',
  styleUrls: ['./caregiverlist.component.css']
})

export class CaregiverlistComponent implements OnInit {

  careGiverList: Object;
  page: number; //current page number
  size: number; //number of item per page
  maxpage: number; //maximum page of table view
  registerFeedback: Object;

  caregiverObj: Object;
  dist: boolean;

  constructor(private modalService: ModalService,
              private caregiverListSvc: CaregiverlistService,
              private router: Router,
              private dataTransferService: DatatransferService,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.page = 0;
    this.size = 2;
    this.getCareGiverList();
    this.dist = false;
  }

  openModal(id: string, caregiver: Object) {
    this.caregiverObj = caregiver;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onClickNext() {
    if (this.page < (this.maxpage - 1)) {
      this.page++;
      this.getCareGiverList();
    }
  }

  onClickSelectedPage(input) {
    if (input > 0 && input < (this.maxpage - 1)) {
      this.page = input - 1;
      this.getCareGiverList();
    }
  }

  onClickPrevious() {
    if (this.page > 0) {
      this.page--;
      this.getCareGiverList();
    }
  }

  getCareGiverList() {
    this.caregiverListSvc.getCareGivers(this.page, this.size, 'ASC', 'id').subscribe(data => {
      for (var i = 0; i < data[0].length; i++) {
        data[0][i].dobtext = formatDate(new Date(data[0][i].dateOfBirth));
      }
      this.maxpage = Math.ceil(data[1].numOfRows / this.size);
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

  onItemDelete() {
    this.caregiverListSvc.deleteCareGiver(this.caregiverObj).subscribe(data => {
      this.registerFeedback = data;
      console.log(data);
      this.flashMessage.show('Berhasil menghapus data perawat!', {cssClass: 'alert-success', timeout: 5000});
      this.getCareGiverList();
      this.router.navigate(['caregiverlist']);
    }, error => {
      console.log(error);
      this.getCareGiverList();
      this.router.navigate(['caregiverlist']);
    });
  }

  onItemEdit() {
    delete this.caregiverObj['username'];
    this.caregiverListSvc.editCareGivers(this.caregiverObj, this.caregiverObj['id']).subscribe(data => {
      this.registerFeedback = data;
      console.log(data);
      this.getCareGiverList();
      this.router.navigate(['caregiverlist']);
      this.flashMessage.show('Berhasil mengubah data perawat!', {cssClass: 'alert-success', timeout: 5000});
    }, error => {
      console.log(error);
      this.router.navigate(['caregiverlist']);
      this.flashMessage.show('Berhasil mengubah data perawat!', {cssClass: 'alert-success', timeout: 5000});
    });

  }

  onItemEditStatus(obj: any, input: number) {
    let param = {
      'idCaregiverStatus': {
        'id': input
      }
    };
    this.caregiverListSvc.editCareGivers(param, obj.id).subscribe(data => {
      this.registerFeedback = data;
      console.log(data);
      this.router.navigate(['caregiverlist']);
      this.getCareGiverList();
      this.flashMessage.show('Berhasil mengubah data perawat!', {cssClass: 'alert-success', timeout: 5000});
    }, error => {
      console.log(error);
      this.router.navigate(['caregiverlist']);
      this.flashMessage.show('Berhasil mengubah data perawat!', {cssClass: 'alert-danger', timeout: 5000});
    });
  }

  goToCaregiverDetails(caregiver:Object){
    this.dataTransferService.setDataTransfer(caregiver);
    this.router.navigate(['caredetails']);
  }

  addCareGiver() {
    let param;
    this.caregiverListSvc.registerCareGivers(param).subscribe(data => {
      this.registerFeedback = data;
      console.log(data);
      this.getCareGiverList();
      this.router.navigate(['caregiverlist']);
    }, error => {
      console.log(error);
      this.router.navigate(['caregiverlist']);
    });
  }

}

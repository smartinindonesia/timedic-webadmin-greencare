import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ModalService} from '../../services/modal.service';
import {DatatransferService} from '../../services/datatransfer.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: Object;
  page: number; //current page number
  size: number; //number of item per page
  maxpage: number; //maximum page of table view
  registerFeedback: Object;

  userObj: Object;
  dist: boolean;

  constructor(private modalService: ModalService,
              private userListSvc: UsersService,
              private router: Router,
              private dataTransferService: DatatransferService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.page = 0;
    this.size = 2;
    this.getUserList();
    this.dist = false;
  }

  onClickNext() {
    if (this.page < (this.maxpage - 1)) {
      this.page++;
      this.getUserList();
    }
  }

  onClickSelectedPage(input) {
    if (input > 0 && input < (this.maxpage - 1)) {
      this.page = input - 1;
      this.getUserList();
    }
  }

  onClickPrevious() {
    if (this.page > 0) {
      this.page--;
      this.getUserList();
    }
  }

  getUserList() {
    this.userListSvc.getUserList(this.page, this.size, 'ASC', 'id').subscribe(data => {
      for (var i = 0; i < data[0].length; i++) {
        data[0][i].dobtext = formatDate(new Date(data[0][i].dateBirth));
      }
      this.maxpage = Math.ceil(data[1].numOfRows / this.size);
      this.userList = data[0];
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

  gotoDetails(userdetails:Object){
    this.dataTransferService.setDataTransfer(userdetails);
    this.router.navigate(['userdetails']);
  }

}

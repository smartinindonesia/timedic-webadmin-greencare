import {Component, OnInit, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ModalService} from '../../services/modal.service';
import {DatatransferService} from '../../services/datatransfer.service';
import {ConstantsvariablesService} from '../../services/constantsvariables.service';
import {UtilityService} from '../../services/utility.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userList: Object;
  page: number; //current page number
  size: number; //number of item per page
  sizeOpt: any;
  maxpage: number; //maximum page of table view
  registerFeedback: Object;

  userObj: Object;
  dist: boolean;

  searchField: any;
  searchFieldSel: string;
  filterState: boolean;
  filterValue: string;

  constructor(private modalService: ModalService,
              private userListSvc: UsersService,
              private router: Router,
              private dataTransferService: DatatransferService,
              private flashMessage: FlashMessagesService,
              private constantService: ConstantsvariablesService,
              private utilityService: UtilityService) {
  }

  ngOnInit() {
    this.filterState = false;
    this.searchField = this.constantService.getUserSearchField();
    this.sizeOpt = this.constantService.getPagesOption();
    this.page = 0;
    this.size = 10;
    this.getUserList();
    this.dist = false;
  }

  searchWithFilter() {
    this.filterState = true;
    this.getUserList();
  }

  searchWithoutFilter() {
    this.filterState = false;
    this.getUserList();
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
    if (!this.filterState) {
      this.userListSvc.getUserList(this.page, this.size, 'ASC', 'id').subscribe(data => {
        console.log(data);
        this.maxpage = Math.ceil(data[1].numOfRows / this.size);
        this.userList = data[0];

      }, error => {
        console.log(error);
        return false;
      });
    } else {
      this.userListSvc.getUserListBySearchField(this.page, this.size, 'ASC', 'id', this.searchFieldSel, this.filterValue).subscribe(data => {
        console.log(data);
        this.maxpage = Math.ceil(data[1].numOfRows / this.size);
        this.userList = data[0];

      }, error => {
        console.log(error);
        return false;
      });
    }
  }

  gotoDetails(userdetails: Object) {
    this.dataTransferService.setDataTransfer(userdetails);
    this.router.navigate(['userdetails']);
  }

  convertDateTime(date: any) {
    return this.utilityService.milisToDateText(new Date(date));
  }

}

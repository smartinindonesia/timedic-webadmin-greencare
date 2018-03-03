import {Component, OnInit} from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-caregiverlist',
  templateUrl: './caregiverlist.component.html',
  styleUrls: ['./caregiverlist.component.css']
})
export class CaregiverlistComponent implements OnInit {

  careGiverList: Object;
  page: number;
  size: number;
  registerFeedback: Object;

  constructor(private caregiverListSvc: CaregiverlistService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.getCareGiverList();
  }

  onClickNext(){
    this.page++;
  }

  onClickPrevious(){
    this.page--;
  }

  getCareGiverList() {
    let param = {
      'page': this.page,
      'size': this.size,
      'sort': 'ASC',
      'sortField': 'id'
    };
    this.caregiverListSvc.getCareGivers(param).subscribe(data => {
      this.careGiverList = data;
      console.log(data);
    }, error => {
      console.log(error);
      return false;
    });
  }

  addCareGiver(){
    let param;
    this.caregiverListSvc.registerCareGivers(param).subscribe(data=>{
      this.registerFeedback = data;
      console.log(data);
    }, error => {
      console.log(error);
      return false;
    });
  }

}

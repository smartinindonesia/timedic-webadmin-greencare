import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  user: Object;

  constructor(private router: Router, private dataTransferService: DatatransferService,
              private flashMessage: FlashMessagesService,
              private utilityService:UtilityService) {

  }

  ngOnInit() {
    this.user = this.dataTransferService.getDataTransfer();
  }

  gotoDetailPatient(){
    this.dataTransferService.setDataTransfer(this.user);
    this.router.navigate(['userpatients']);
  }

  convertDateTime(date:any){
    return this.utilityService.milisToDateText(new Date(date));
  }
}

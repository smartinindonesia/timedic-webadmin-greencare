import { Component, OnInit } from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {CaregiverlistService} from '../../services/caregiverlist.service';

@Component({
  selector: 'app-caregiverstatus',
  templateUrl: './caregiverstatus.component.html',
  styleUrls: ['./caregiverstatus.component.css']
})
export class CaregiverstatusComponent implements OnInit {

  caregiver: Object;

  constructor(private caregiverListSvc: CaregiverlistService,
              private router: Router,
              private dataTransferService: DatatransferService,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.caregiver = this.dataTransferService.getDataTransfer();
  }

  updateCaregiver(obj: any, input: number) {
    let param = {
      'idCaregiverStatus': {
        'id': input
      }
    }
    this.caregiverListSvc.editCareGivers(param, obj.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['caregiverlist']);
      this.flashMessage.show('Berhasil mengubah data perawat!', {cssClass: 'alert-success', timeout: 5000});
    }, error => {
      console.log(error);
      this.router.navigate(['caregiverlist']);
      this.flashMessage.show('Gagal mengubah data perawat!', {cssClass: 'alert-danger', timeout: 5000});
    });
  }

}

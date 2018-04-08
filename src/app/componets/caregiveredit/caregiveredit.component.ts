import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service'
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-caregiveredit',
  templateUrl: './caregiveredit.component.html',
  styleUrls: ['./caregiveredit.component.css']
})
export class CaregivereditComponent implements OnInit {

  private caregiver: any;

  constructor(private datatransferService: DatatransferService,
              private caregiverListSvc: CaregiverlistService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.caregiver = this.datatransferService.getDataTransfer();
  }

  onEditSubmit() {
    let updateItem = {
      'frontName' : this.caregiver.frontName,
      'middleName' : this.caregiver.middleName,
      'lastName' : this.caregiver.lastName
    }
    this.caregiverListSvc.editCareGivers(updateItem, this.caregiver.id).subscribe(data => {

      this.flashMessage.show('Berhasil mengubah data perawat!', {cssClass: 'alert-success', timeout: 5000});
      console.log("INI DATA");
      console.log(data);
      this.router.navigate(['caregiverlist']);
    }, error => {
      console.log("INI ERROR");
      console.log(error);
      this.flashMessage.show('Gagal mengubah data perawat!', {cssClass: 'alert-danger', timeout: 5000});
    });
  }

}

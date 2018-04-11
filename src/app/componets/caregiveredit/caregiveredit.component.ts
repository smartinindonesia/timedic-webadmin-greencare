import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service'
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ConstantsvariablesService} from '../../services/constantsvariables.service';

@Component({
  selector: 'app-caregiveredit',
  templateUrl: './caregiveredit.component.html',
  styleUrls: ['./caregiveredit.component.css']
})
export class CaregivereditComponent implements OnInit {

  private caregiver: any;
  religionsel: String;
  gendersel: String;

  religionList: any;
  genderList: any;

  constructor(private datatransferService: DatatransferService,
              private caregiverListSvc: CaregiverlistService,
              private router: Router,
              private flashMessage: FlashMessagesService,
              private constantServ: ConstantsvariablesService) {
  }

  ngOnInit() {
    this.caregiver = this.datatransferService.getDataTransfer();
    this.religionList = this.constantServ.getReligionList();
    this.genderList = this.constantServ.getGenderList();
    this.religionsel = this.caregiver.religion;
    this.gendersel = this.caregiver.gender;
  }

  updateReligionEvent(input:string){
    this.religionsel = JSON.parse(input);

    console.log(this.religionsel)
  }

  updateGenderEvent(input:string){
    this.gendersel = JSON.parse(input);
    console.log(this.gendersel);
  }

  onEditSubmit() {
    let updateItem = {
      'frontName': this.caregiver.frontName,
      'middleName': this.caregiver.middleName,
      'lastName': this.caregiver.lastName,
      'sipp': this.caregiver.sipp,
      'dateOfBirth': this.caregiver.dateOfBirth,
      'email': this.caregiver.email,
      'employeeIdNumber': this.caregiver.employeeIdNumber,
      'phoneNumber': this.caregiver.phoneNumber,
      'registerNurseNumber': this.caregiver.registerNurseNumber,
      'religion' : this.religionsel,
      'gender' : this.gendersel
    }
    this.caregiverListSvc.editCareGivers(updateItem, this.caregiver.id).subscribe(data => {

      this.flashMessage.show('Berhasil mengubah data perawat!', {cssClass: 'alert-success', timeout: 5000});
      console.log('INI DATA');
      console.log(data);
      this.router.navigate(['caregiverlist']);
    }, error => {
      console.log('INI ERROR');
      console.log(error);
      this.flashMessage.show('Gagal mengubah data perawat!', {cssClass: 'alert-danger', timeout: 5000});
    });
  }

}

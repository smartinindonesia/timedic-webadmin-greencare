import {Component, OnInit} from '@angular/core';
import {CaregiverlistService} from '../../services/caregiverlist.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {ConstantsvariablesService} from '../../services/constantsvariables.service';

@Component({
  selector: 'app-addcaregiver',
  templateUrl: './addcaregiver.component.html',
  styleUrls: ['./addcaregiver.component.css']
})
export class AddcaregiverComponent implements OnInit {

  username: String;
  email: String;
  password: String;
  frontName: String;
  middleName: String;
  lastName: String;
  phoneNumber: String;
  registerNurseNumber: String;
  religion: String;
  gender: String;

  religionList: any;
  genderList: any;

  constructor(private caregiverListSvc: CaregiverlistService,
              private validateSvc: ValidateService,
              private router: Router,
              private flashMessage: FlashMessagesService,
              private constantServ: ConstantsvariablesService) {
  }

  ngOnInit() {
    this.religionList = this.constantServ.getReligionList();
    this.genderList = this.constantServ.getGenderList();
  }

  onSubmitClick() {
    const caregiver = {
      frontName: this.frontName,
      middleName: this.middleName,
      lastName: this.lastName,
      email: this.email,
      username: this.username,
      password: this.password,
      phoneNumber: this.phoneNumber,
      registerNurseNumber: this.registerNurseNumber,
      religion: this.religion,
      gender: this.gender
    }
    if (!this.validateSvc.validateEmail(caregiver.email)) {
      this.flashMessage.show('Please Use valid email', {cssClass: 'alert-danger', timeout: 5000});
      return false;
    }
    this.caregiverListSvc.registerCareGivers(caregiver).subscribe(data => {
      if (data.username != null) {
        this.flashMessage.show('Conratulations, now you are registered as ' + data.username + ' and please log in by android apps', {
          cssClass: 'alert-success',
          timeout: 5000
        });
        this.router.navigate(['caregiverlist']);
      } else {
        this.flashMessage.show('Failed Register', {cssClass: 'alert-danger', timeout: 5000});
      }
    }, error => {
      console.log(error);
      this.flashMessage.show('Unknown Error', {cssClass: 'alert-danger', timeout: 5000});
    });
  }
}

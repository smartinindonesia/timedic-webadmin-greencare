import {Component, OnInit} from '@angular/core';
import {DatatransferService} from '../../services/datatransfer.service';
import {PatientlistService} from '../../services/patientlist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userpatients',
  templateUrl: './userpatients.component.html',
  styleUrls: ['./userpatients.component.css']
})
export class UserpatientsComponent implements OnInit {

  user: Object;
  patientstList: Object;

  constructor(private dataTransferServices: DatatransferService,
              private router:Router,
              private patientServices:PatientlistService) {

  }

  ngOnInit() {
    this.user = this.dataTransferServices.getDataTransfer();
    this.getPatientByUserId();
  }

  getPatientByUserId() {
    this.patientServices.getPatientByUserId(this.user['id']).subscribe(patients => {
      for(var i = 0; i < patients.length; i++){
        let time = new Date(patients[i].dateOfBirth);
        patients[i].dateOfBirth = formatDate(time);
      }
      this.patientstList = patients;
    }, err => {
      console.log(err);
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

      return dayName + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
  }

  gotoDetails(patient: Object) {
    this.dataTransferServices.setDataTransfer(patient);
    this.router.navigate(['patientdetails']);
  }

}

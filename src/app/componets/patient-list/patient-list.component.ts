import {Component, OnInit} from '@angular/core';
import {PatientlistService} from '../../services/patientlist.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patienstList: Object;

  constructor(private patientlistService: PatientlistService, private router: Router) {
  }

  ngOnInit() {
    this.patientlistService.getPatientList().subscribe(patients => {

      for(var i = 0; i < patients.length; i++){
        let time = new Date(patients[i].dateOfBirth);
        patients[i].dateOfBirth = formatDate(time);
      }
      this.patienstList = patients;
    }, err => {
      console.log(err);
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

      return dayName + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

  }

}

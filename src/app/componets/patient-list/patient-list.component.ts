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
    this.patientlistService.getPatientList().subscribe(patients=>{
      this.patienstList = patients;
    }, err => {
      console.log(err);
      return false;
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {PatientlistService} from '../../services/patientlist.service';
import {DatatransferService} from '../../services/datatransfer.service';
import {Router} from '@angular/router';
import {ConstantsvariablesService} from '../../services/constantsvariables.service';
import {UtilityService} from '../../services/utility.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patienstList: Object;

  page: number; //current page number
  size: number; //number of item per page
  sizeOpt: any;
  maxpage: number; //maximum page of table view

  searchField: any;
  searchFieldSel: string;
  filterState: boolean;
  filterValue: string;
  sortType: any;
  sortTypeSel: string;
  sortParam: any;
  sortParamSel: string;

  constructor(private dataTransferService: DatatransferService,
              private patientlistService: PatientlistService,
              private router: Router,
              private utilityService: UtilityService,
              private constantService: ConstantsvariablesService) {
  }

  ngOnInit() {
    this.filterState = false;
    this.searchField = this.constantService.getPatientSearchField();
    this.sizeOpt = this.constantService.getPagesOption();
    this.sortType = this.constantService.getSortType();
    this.sortTypeSel = 'ASC';
    this.sortParam = this.constantService.getPatientField();
    this.sortParamSel = 'id';
    this.page = 0;
    this.size = 10;
    this.getPatientList();
  }

  onClickNext() {
    if (this.page < (this.maxpage - 1)) {
      this.page++;
      this.getPatientList();
    }
  }

  searchWithFilter() {
    this.filterState = true;
    this.getPatientList();
  }

  searchWithoutFilter() {
    this.filterState = false;
    this.getPatientList();
  }

  onClickSelectedPage(input) {
    if (input > 0 && input < (this.maxpage - 1)) {
      this.page = input - 1;
      this.getPatientList();
    }
  }

  onClickPrevious() {
    if (this.page > 0) {
      this.page--;
      this.getPatientList();
    }
  }

  getPatientList() {
    if (!this.filterState || this.filterValue === undefined || this.filterValue == "") {
      this.patientlistService.getPatientWithPagination(this.page, this.size, this.sortTypeSel, this.sortParamSel).subscribe(data => {
        console.log(data);
        this.maxpage = Math.ceil(data[1].numOfRows / this.size);
        this.patienstList = data[0];
      }, error => {
        console.log(error);
        return false;
      });
    } else {
      this.patientlistService.getPatientWithPaginationBySearchField(this.page, this.size, this.sortTypeSel, this.sortParamSel, this.searchFieldSel, this.filterValue).subscribe(data => {
        console.log(data);
        this.maxpage = Math.ceil(data[1].numOfRows / this.size);
        this.patienstList = data[0];
      }, error => {
        console.log(error);
        return false;
      });
    }
  }

  formatDate(date) {
    return this.utilityService.milisToDateText(new Date(date));
  }

  gotoDetails(patient: Object) {
    this.dataTransferService.setDataTransfer(patient);
    this.router.navigate(['patientdetails']);
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.css']
})
export class ClinicComponent implements OnInit {

  user: Object;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.user = "Coba"
  }

}

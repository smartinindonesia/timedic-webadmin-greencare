import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Http, HttpModule} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http:Http, public authService: AuthService) {
  }


}

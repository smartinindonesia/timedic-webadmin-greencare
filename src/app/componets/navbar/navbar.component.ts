import {Component, OnInit, AfterContentInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Object;
  constructor(public authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile(){
    this.user = this.authService.getUserData();
    console.log(this.user + "PROFILE");
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }

}

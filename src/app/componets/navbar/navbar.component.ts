import {Component, OnInit} from '@angular/core';
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
  constructor(private authService: AuthService,
              private profileService: ProfileService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    this.profileService.getProfile().subscribe(profile => {

      let time = new Date(profile.dateBirth);
      profile.dateBirth = formatDate(time);
      this.user = profile;

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

  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000});
    this.router.navigate(['/login']);
    return false;
  }

}

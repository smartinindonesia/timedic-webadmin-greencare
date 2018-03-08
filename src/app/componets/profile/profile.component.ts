import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Object;

  constructor(private profileService: ProfileService, private router: Router) {
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

}

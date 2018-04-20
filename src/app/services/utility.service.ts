import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment'

@Injectable()
export class UtilityService {

  constructor() {
  }

  convertNumberToRupiah(angka: number) {
    var rupiah = '';
    var angkarev = angka.toString().split('').reverse().join('');
    for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
    return 'Rp ' + rupiah.split('', rupiah.length - 1).reverse().join('');
  }

  milisToDateText(date) {
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
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    return dayName + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year + ' : ' + time;
  }

}

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
      'Januari', 'Februari', 'Maret',
      'April', 'Mei', 'Juni', 'Juli',
      'Agustus', 'September', 'Oktober',
      'November', 'Desember'
    ];

    var days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var d = new Date(date);
    var dayName = days[d.getDay()];
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    return dayName + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year + ' : ' + time;
  }

  milisToDateTextEnglish(date) {
    var monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'Jule',
      'August', 'September', 'October',
      'Nopember', 'December'
    ];

    var days = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Tuesday', 'Friday', 'Saturday'];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var d = new Date(date);
    var dayName = days[d.getDay()];
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    return dayName + ', ' + day + ' ' + monthNames[monthIndex] + ' ' + year + ' : ' + time;
  }

  milisToDateOnly(milis:number){
    return new Date(milis).toISOString();
  }

}

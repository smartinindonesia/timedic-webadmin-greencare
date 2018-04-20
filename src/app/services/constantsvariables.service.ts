import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsvariablesService {

  constructor() {
  }

  getReligionList() {
    let religion = [
      {'id': 1, 'name': 'Islam'},
      {'id': 2, 'name': 'Katolik'},
      {'id': 3, 'name': 'Protestan'},
      {'id': 4, 'name': 'Hindu'},
      {'id': 5, 'name': 'Budha'}
    ];
    return religion;
  }

  getGenderList() {
    let gender = [
      {'id': 1, 'name': 'Laki-Laki'},
      {'id': 2, 'name': 'Perempuan'}
    ];
    return gender;
  }

  getCaregiverSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Username', 'value': 'username'},
      {'id': 2, 'name': 'Nomor Telepon', 'value': 'phoneNumber'},
      {'id': 4, 'name': 'Email', 'value': 'email'},
      {'id': 5, 'name': 'SIPP', 'value': 'sipp'},
      {'id': 6, 'name': 'STR', 'value': 'nursenumber'},
      {'id': 7, 'name': 'Nama Depan', 'value': 'firstname'},
      {'id': 8, 'name': 'Nama Tengah', 'value': 'middlename'},
      {'id': 9, 'name': 'Nama Belakang', 'value': 'lastname'}
    ];
    return searchField;
  }

  getUserSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Username', 'value': 'username'},
      {'id': 2, 'name': 'Nomor Telepon', 'value': 'phoneNumber'},
      {'id': 4, 'name': 'Email', 'value': 'email'},
      {'id': 7, 'name': 'Nama Depan', 'value': 'firstname'},
      {'id': 8, 'name': 'Nama Tengah', 'value': 'middlename'},
      {'id': 9, 'name': 'Nama Belakang', 'value': 'lastname'}
    ];
    return searchField;
  }

  getPagesOption() {
    let opt = [
      {'id': 1, 'value': 10},
      {'id': 2, 'value': 15},
      {'id': 4, 'value': 20},
      {'id': 7, 'value': 25},
    ];
    return opt;
  }

  getOrderSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Tanggal', 'value': 'date', 'type': 'date'},
      {'id': 2, 'name': 'Username', 'value': 'username', 'type': 'text'},
      {'id': 3, 'name': 'ID Pengguna', 'value': 'idUser', 'type': 'text'},
      {'id': 3, 'name': 'Nomor Order', 'value': 'noOrder', 'type': 'text'}
    ];
    return searchField;
  }

  getPatientSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Nama', 'value': 'name'},
      {'id': 2, 'name': 'ID Pengguna', 'value': 'idUser'}
    ];
    return searchField;
  }
}

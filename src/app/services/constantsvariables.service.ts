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
      {'id': 3, 'name': 'Email', 'value': 'email'},
      {'id': 4, 'name': 'SIPP', 'value': 'sipp'},
      {'id': 5, 'name': 'STR', 'value': 'nursenumber'},
      {'id': 6, 'name': 'Nama Depan', 'value': 'firstname'},
      {'id': 7, 'name': 'Nama Tengah', 'value': 'middlename'},
      {'id': 8, 'name': 'Nama Belakang', 'value': 'lastname'},
      {'id': 9, 'name': 'Kode Perawat', 'value': 'caregiverCode'}
    ];
    return searchField;
  }

  getUserSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Username', 'value': 'username'},
      {'id': 2, 'name': 'Nomor Telepon', 'value': 'phoneNumber'},
      {'id': 3, 'name': 'Email', 'value': 'email'},
      {'id': 4, 'name': 'Nama Depan', 'value': 'firstname'},
      {'id': 5, 'name': 'Nama Tengah', 'value': 'middlename'},
      {'id': 6, 'name': 'Nama Belakang', 'value': 'lastname'},
      {'id': 7, 'name': 'Kode User', 'value': 'userCode'}
    ];
    return searchField;
  }

  getPagesOption() {
    let opt = [
      {'id': 1, 'value': 10},
      {'id': 2, 'value': 15},
      {'id': 3, 'value': 20},
      {'id': 4, 'value': 25},
    ];
    return opt;
  }

  getOrderSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Tanggal', 'value': 'date', 'type': 'date'},
      {'id': 2, 'name': 'Username', 'value': 'username', 'type': 'text'},
      {'id': 3, 'name': 'ID Pengguna', 'value': 'idUser', 'type': 'text'},
      {'id': 4, 'name': 'Nomor Order', 'value': 'noOrder', 'type': 'text'}
    ];
    return searchField;
  }

  getPatientSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Nama', 'value': 'name'},
      {'id': 2, 'name': 'ID Pengguna', 'value': 'idUser'},
      {'id': 3, 'name': 'Kode User', 'value': 'userCode'}
    ];
    return searchField;
  }
}

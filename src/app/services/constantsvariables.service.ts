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
      {'id': 5, 'value': 30},
      {'id': 6, 'value': 35},
      {'id': 7, 'value': 40},
      {'id': 8, 'value': 45},
      {'id': 9, 'value': 50},
    ];
    return opt;
  }

  getOrderSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Tanggal Kunjungan', 'value': 'date', 'type': 'date'},
      {'id': 2, 'name': 'Tanggal Pemesanan', 'value': 'dateOrderIn', 'type': 'date'},
      {'id': 3, 'name': 'Username', 'value': 'username', 'type': 'text'},
      {'id': 4, 'name': 'ID Pengguna', 'value': 'idUser', 'type': 'text'},
      {'id': 5, 'name': 'Nomor Order', 'value': 'noOrder', 'type': 'text'},
      {'id': 6, 'name': 'Kode User', 'value': 'userCode', 'type': 'text'},
      {'id': 7, 'name': 'Status Transaksi', 'value': 'statusTrx', 'type': 'list'}
    ];
    return searchField;
  }

  getOrderStatusValue(){
    let item = [
      {'id': 1, 'name': 'Failed', 'value': '3'},
      {'id': 2, 'name': 'Cancelled', 'value': '4'},
      {'id': 3, 'name': 'Expired', 'value': '5'},
      {'id': 4, 'name': 'Finish', 'value': '6'},
      {'id': 5, 'name': 'On Process', 'value': '8'}
    ];
    return item;
  }

  getPatientSearchField() {
    let searchField = [
      {'id': 1, 'name': 'Nama', 'value': 'name'},
      {'id': 2, 'name': 'ID Pengguna', 'value': 'idUser'},
      {'id': 3, 'name': 'Kode User', 'value': 'userCode'}
    ];
    return searchField;
  }

  getSortType(){
    let sortType = [
      {'id': 1, 'name': 'A-Z', 'value': 'ASC'},
      {'id': 2, 'name': 'Z-A', 'value': 'DESC'},
    ];
    return sortType;
  }

  getUserField(){
    let userField = [
      {'id': 1, 'name': 'Nama Depan', 'value': 'frontName'},
      {'id': 2, 'name': 'Kode User', 'value': 'userCode'},
      {'id': 3, 'name': 'Username', 'value': 'username'},
      {'id': 4, 'name': 'ID User', 'value': 'id'}
    ];
    return userField;
  }

  getPatientField(){
    let patientField = [
      {'id': 1, 'name': 'Nama Pasien', 'value': 'name'},
      {'id': 2, 'name': 'Tanggal Lahir', 'value': 'dateOfBirth'},
      {'id': 3, 'name': 'ID Pasien', 'value': 'id'}
    ];
    return patientField;
  }

  getOrderField(){
    let orderField = [
      {'id': 1, 'name': 'Tanggal Kunjungan', 'value': 'date'},
      {'id': 2, 'name': 'Tanggal Pesan', 'value': 'dateOrderIn'},
      {'id': 3, 'name': 'Kode Pemesanan', 'value': 'orderNumber'},
      {'id': 4, 'name': 'Layanan Terpilih', 'value': 'selectedService'},
      {'id': 5, 'name': 'Status Transaksi', 'value': 'transactionStatusId'},
      {'id': 6, 'name': 'ID Transaksi', 'value': 'id'}
    ];
    return orderField;
  }

  getCaregiverField(){
    let caregiverField = [
      {'id': 1, 'name': 'Nama Depan', 'value': 'frontName'},
      {'id': 2, 'name': 'Kode Perawat', 'value': 'caregiverCode'},
      {'id': 3, 'name': 'Username', 'value': 'username'},
      {'id': 4, 'name': 'ID Perawat', 'value': 'id'}
    ];
    return caregiverField;
  }
}

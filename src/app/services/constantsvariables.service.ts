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

}

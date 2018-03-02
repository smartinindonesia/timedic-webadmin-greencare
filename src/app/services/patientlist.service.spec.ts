import { TestBed, inject } from '@angular/core/testing';

import { PatientlistService } from './patientlist.service';

describe('PatientlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientlistService]
    });
  });

  it('should be created', inject([PatientlistService], (service: PatientlistService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { CaregiverlistService } from './caregiverlist.service';

describe('CaregiverlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaregiverlistService]
    });
  });

  it('should be created', inject([CaregiverlistService], (service: CaregiverlistService) => {
    expect(service).toBeTruthy();
  }));
});

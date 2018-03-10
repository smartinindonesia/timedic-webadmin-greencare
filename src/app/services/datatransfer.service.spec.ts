import { TestBed, inject } from '@angular/core/testing';

import { DatatransferService } from './datatransfer.service';

describe('DatatransferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatatransferService]
    });
  });

  it('should be created', inject([DatatransferService], (service: DatatransferService) => {
    expect(service).toBeTruthy();
  }));
});

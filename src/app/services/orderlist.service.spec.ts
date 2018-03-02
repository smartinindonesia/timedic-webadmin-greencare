import { TestBed, inject } from '@angular/core/testing';

import { OrderlistService } from './orderlist.service';

describe('OrderlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderlistService]
    });
  });

  it('should be created', inject([OrderlistService], (service: OrderlistService) => {
    expect(service).toBeTruthy();
  }));
});

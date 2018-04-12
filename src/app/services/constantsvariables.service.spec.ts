import { TestBed, inject } from '@angular/core/testing';

import { ConstantsvariablesService } from './constantsvariables.service';

describe('ConstantsvariablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstantsvariablesService]
    });
  });

  it('should be created', inject([ConstantsvariablesService], (service: ConstantsvariablesService) => {
    expect(service).toBeTruthy();
  }));
});

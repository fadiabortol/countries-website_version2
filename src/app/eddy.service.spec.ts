import { TestBed } from '@angular/core/testing';

import { EddyService } from './eddy.service';

describe('EddyService', () => {
  let service: EddyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EddyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

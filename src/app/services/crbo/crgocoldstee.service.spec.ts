import { TestBed } from '@angular/core/testing';

import { CrgocoldsteeService } from './crgocoldstee.service';

describe('CrgocoldsteeService', () => {
  let service: CrgocoldsteeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrgocoldsteeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

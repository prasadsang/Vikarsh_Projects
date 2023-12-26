import { TestBed } from '@angular/core/testing';

import { NanoblockService } from './nanoblock.service';

describe('NanoblockService', () => {
  let service: NanoblockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanoblockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

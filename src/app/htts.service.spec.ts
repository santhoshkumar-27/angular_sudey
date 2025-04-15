import { TestBed } from '@angular/core/testing';

import { HttsService } from './htts.service';

describe('HttsService', () => {
  let service: HttsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

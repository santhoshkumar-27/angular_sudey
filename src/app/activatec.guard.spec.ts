import { TestBed } from '@angular/core/testing';

import { ActivatecGuard } from './activatec.guard';

describe('ActivatecGuard', () => {
  let guard: ActivatecGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivatecGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

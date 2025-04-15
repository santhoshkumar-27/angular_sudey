import { TestBed } from '@angular/core/testing';

import { DeactivatecGuard } from './deactivatec.guard';

describe('DeactivatecGuard', () => {
  let guard: DeactivatecGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivatecGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

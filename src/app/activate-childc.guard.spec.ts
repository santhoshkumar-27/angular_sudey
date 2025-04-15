import { TestBed } from '@angular/core/testing';

import { ActivateChildcGuard } from './activate-childc.guard';

describe('ActivateChildcGuard', () => {
  let guard: ActivateChildcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActivateChildcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MatchcGuard } from './matchc.guard';

describe('MatchcGuard', () => {
  let guard: MatchcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MatchcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

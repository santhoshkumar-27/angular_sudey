import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { matchfGuard } from './matchf.guard';

describe('matchfGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => matchfGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { activefGuard } from './activef.guard';

describe('activefGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activefGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

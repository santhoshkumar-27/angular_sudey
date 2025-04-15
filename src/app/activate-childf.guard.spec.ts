import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { activateChildfGuard } from './activate-childf.guard';

describe('activateChildfGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => activateChildfGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

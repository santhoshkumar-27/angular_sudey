import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { idsss1Resolver } from './idsss1.resolver';

describe('idsss1Resolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => idsss1Resolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});

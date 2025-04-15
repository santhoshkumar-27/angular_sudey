import { TestBed } from '@angular/core/testing';

import { IdsssResolver } from './idsss.resolver';

describe('IdsssResolver', () => {
  let resolver: IdsssResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(IdsssResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

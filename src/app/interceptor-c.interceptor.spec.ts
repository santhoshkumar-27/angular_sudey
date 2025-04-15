import { TestBed } from '@angular/core/testing';

import { InterceptorCInterceptor } from './interceptor-c.interceptor';

describe('InterceptorCInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorCInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorCInterceptor = TestBed.inject(InterceptorCInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

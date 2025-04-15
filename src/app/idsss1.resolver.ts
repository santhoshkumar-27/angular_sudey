import { ResolveFn } from '@angular/router';

export const idsss1Resolver: ResolveFn<boolean> = (route, state) => {
  console.log('idsss1Resolver')
  return true;
};

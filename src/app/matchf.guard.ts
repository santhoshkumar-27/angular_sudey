import { CanMatchFn } from '@angular/router';

export const matchfGuard: CanMatchFn = (route, segments) => {
  console.log('matchfGuard');
  return true;
};

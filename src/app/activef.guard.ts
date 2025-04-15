import { CanActivateFn } from '@angular/router';

export const activefGuard: CanActivateFn = (route, state) => {
  console.log('activefGuard');

  return true;
};

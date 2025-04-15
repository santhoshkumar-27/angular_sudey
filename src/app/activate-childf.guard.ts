import { CanActivateChildFn } from '@angular/router';

export const activateChildfGuard: CanActivateChildFn = (childRoute, state) => {
  console.log('activateChildfGuard');

  return true;
};

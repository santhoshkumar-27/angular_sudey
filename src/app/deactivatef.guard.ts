import { CanDeactivateFn } from '@angular/router';

export const deactivatefGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  console.log('deactivatefGuard');

  return true;
};

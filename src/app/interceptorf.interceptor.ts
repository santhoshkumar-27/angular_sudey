import { HttpInterceptorFn } from '@angular/common/http';

export const interceptorfInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};

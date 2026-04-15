import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  // ❗ Skip for login/signup
  if (
    req.url.includes('/signin') ||
    req.url.includes('/signup')
  ) {
    return next(req);
  }

  // ✅ Attach token
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
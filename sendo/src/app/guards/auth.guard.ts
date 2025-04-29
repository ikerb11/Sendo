import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return authState(auth).pipe(
    map(user => {
      return user
        ? true // ✅ Usuario logueado
        : router.createUrlTree(['/login']); // 🚪 Redirige correctamente como UrlTree
    })
  );
};

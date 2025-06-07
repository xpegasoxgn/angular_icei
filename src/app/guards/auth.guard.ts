import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

let isLoggedIn = false;

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(isLoggedIn){
    return true;
  }
  return router.parseUrl('/login');
};

export function login(){
  isLoggedIn = true;
}

export function logout(){
  isLoggedIn = false;
}

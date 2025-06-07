import { CanActivateFn, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { inject, Injectable } from '@angular/core';

let isLoggedIn= false;

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if(isLoggedIn){
    return true;
  }
  //si no esta logueado redirigir a login
  return router.parseUrl('/login');


};
export function login(){
  isLoggedIn=true;
}
export function logout(){
  isLoggedIn=false;
}

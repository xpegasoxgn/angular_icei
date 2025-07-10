import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

let isLoggedIn=false;


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  //if(isLoggedIn){
   // return true; //dejar pasar
  //}
  //si noesta logueado redirige a login 
  //return router.parseUrl('/login');
  console.log('metodo de tokens');
  const token=localStorage.getItem('token');

  console.log('metodo de tokens el token', token );
  if(token){
    return true;
  }
  
  window.location.href='http://localhost:4200';
  return false;

};

export function login(){
  console.log('entrando al guard del login')
  isLoggedIn=true;
}

export function logout(){
  console.log('entrando al guard del logout del login')
  isLoggedIn=false;
}

import { HttpInterceptorFn } from '@angular/common/http';


export const authInterceptor: HttpInterceptorFn = (req, next) => {
    //obtener el token del localstorage
    const token =localStorage.getItem('token');
    if(token){
      //clona la request y agregar el header autorization

      const authReq=req.clone({
        setHeaders:{
          Authorization:   `Bearer ${token}`
        }
      });
      return next(authReq);
    }
    // si no hay todo sigue normal
  return next(req);
};

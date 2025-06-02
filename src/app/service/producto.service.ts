import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/produco.model';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url='http://localhost:3000/producto'
  constructor(private http: HttpClient) {  }

  getProductos(): Observable<Producto[]>{
    //existe los get put post delete 
    return this.http.get<Producto[]>(this.url);
    
  }

  crear(producto: Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url, producto);
  }
}

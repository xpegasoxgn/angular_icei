import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = "http://localhost:3000/producto";
  constructor(
    private http:HttpClient
  ){}

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  postProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  getProducto(idProd:Number): Observable<Producto> {
    return this.http.get<Producto>(this.url+"/"+idProd);
  }

}

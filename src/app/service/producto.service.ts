import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import  { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = 'http://localhost:3000/producto';
  constructor(private http:HttpClient) { }

  getproductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }
}

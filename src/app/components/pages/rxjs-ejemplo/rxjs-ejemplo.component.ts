import { Component, OnInit } from '@angular/core';
import { of, interval} from 'rxjs';
import { map, filter,switchMap,take ,mergeMap} from 'rxjs/operators';
import { ProductoService } from '../../../service/producto.service';


@Component({
  selector: 'app-rxjs-ejemplo',
  standalone: false,
  templateUrl: './rxjs-ejemplo.component.html',
  styleUrl: './rxjs-ejemplo.component.css'
})
export class RxjsEjemploComponent {
  resultado: any [] = [];
  constructor(private productoService: ProductoService){}
  ngOnInit(): void {
    //EJEMPLOS 1 INTERVAL CON MAP Y FILTER
    interval(1000).pipe(
      map(x=>x*2),
      filter(x=>x%3===0),
      take(5)
    ).subscribe({
      next:val=>this.resultado.push(`Intervalo: ${val}`),
    });
    //EJEMPLO 2 SWTICHMAP PARA REEMPLAZAR LA PETICION ANTERIOR POR UNA NUEVA
    of(1,2,3).pipe(
      //switchMap(id=>this.productoService.getById(id))
      mergeMap(id=>this.productoService.getById(id))
    ).subscribe({
      next:producto=>this.resultado.push(`Producto: ${producto.nombre}`),
    });
  }
}

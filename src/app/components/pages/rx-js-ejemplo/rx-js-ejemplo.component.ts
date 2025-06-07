import { Component } from '@angular/core';
import { of, interval } from 'rxjs';
import { map, filter, take, switchMap, mergeMap } from 'rxjs/operators';
import { ProductoService } from '../../../service/producto.service';

@Component({
  selector: 'app-rx-js-ejemplo',
  standalone: false,
  templateUrl: './rx-js-ejemplo.component.html',
  styleUrl: './rx-js-ejemplo.component.css'
})
export class RxJsEjemploComponent {

  resultados: any[] = [];
  constructor(
    private productoService:ProductoService,
  ){}

  ngOnInit():void{
    // EJEMPLO 1
    interval(1000).pipe(
      map(x => x*2),
      filter(x => x%3===0),
      take(5)
    )
    .subscribe({
      next:val => this.resultados.push(`Intervalo: ${val}`)
    });

    // EJEMPLO 2
    of(2,3,4).pipe(
      //switchMap( id => this.productoService.getProducto(id) )
      mergeMap( id => this.productoService.getProducto(id) )
    ).subscribe({
      next:producto => this.resultados.push(`Producto: ${producto.nombre}`)
    })
  }

}

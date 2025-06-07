import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { map,filter, take ,switchMap, mergeMap } from 'rxjs/operators';
import { ProductoService } from '../../../service/producto.service';


@Component({
  selector: 'app-rxjs-ejemplo',
  standalone: false,
  templateUrl: './rxjs-ejemplo.component.html',
  styleUrl: './rxjs-ejemplo.component.css'
})
export class RxjsEjemploComponent {

  resultados: any []=[];
  constructor(private productoService:ProductoService){}

  ngOnInit():void{
    //ejemplo 1  interval con map y filter
    interval(1000).pipe(
      map(x=> x*2),
      filter(x=>x%3===0),
      take(5)

    ).subscribe({
      next:val=> this.resultados.push(`Intervalo: ${val}`)
    });

    //ejemplo 2  switchMap para reemplazar la peticion anterior con la nueva
    of(1,2,3).pipe(
      //switchMap(id=>this.productoService.getById(id))
      mergeMap(id=>this.productoService.getById(id))
    ).subscribe({
      next:producto=> this.resultados.push(`producto: ${producto.nombre}`)
    })

  }


}

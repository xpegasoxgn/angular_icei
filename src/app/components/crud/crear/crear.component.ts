import { Component } from '@angular/core';
import { ProductoService } from '../../../service/producto.service';
import { Producto } from '../../../models/producto.model';

@Component({
  selector: 'app-crear',
  standalone: false,
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css',
  host: {'ngSkipHydratation':'true'}
})
export class CrearComponent {

  constructor(
    private productoService:ProductoService
  ){};

  id = 1; 
  nombre = '';
  descripcion = '';

  guardar(){
    this.id += 1;
    const producto: Producto = {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion
    };

    this.productoService.postProducto(producto).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}

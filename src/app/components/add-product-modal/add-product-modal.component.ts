import { Component } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-add-product-modal',
  standalone: false,
  templateUrl: './add-product-modal.component.html',
  styleUrl: './add-product-modal.component.css'
})
export class AddProductModalComponent {

  constructor(
    private productoService:ProductoService
  ){};

  id = 0;
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

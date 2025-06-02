import { Component } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { ProductoService } from '../../../../service/producto.service';

@Component({
  selector: 'app-crear',
  standalone: false,
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {
  Producto: Producto = {
    nombre: '',
    descripcion: '',
  };
  constructor(private productoService: ProductoService) {}

  guardarProducto(){
    if(this.Producto.nombre && this.Producto.descripcion){
      this.productoService.crear(this.Producto).subscribe({
        next:(res) =>{
          alert('Producto creado');
          this.Producto = {
            nombre: '',
            descripcion: '',
          };

        },
      })
    }
    else{
      alert('Por favor, complete todos los campos');
    }
  }
}

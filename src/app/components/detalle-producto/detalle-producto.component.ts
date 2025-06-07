import { Component, Inject } from '@angular/core';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../models/producto.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-producto',
  standalone: false,
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  producto:Producto|null = null;
  constructor(
    private productoService:ProductoService,
    @Inject(MAT_DIALOG_DATA) public data: {id:Number}
  ){}

  ngOnInit(){
    const id = Number(this.data);
    this.productoService.getProducto(id).subscribe({
      next:(data) => {
        this.producto = data
      },
      error:(err: any) => console.error("Error al ver:", err)
    })
  }

}

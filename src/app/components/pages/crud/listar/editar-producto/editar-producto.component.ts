import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Producto } from '../../../../../models/producto.model';
import { ProductoService } from '../../../../../service/producto.service';

@Component({
  selector: 'app-editar-producto',
  standalone: false,
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public producto: Producto,
  private dialogRef: MatDialogRef<EditarProductoComponent>,
  private productoService: ProductoService
  ) { }
  ngOnInit(): void {
    console.log('esta entrando al componente', this.producto);
  }

  close(){
    this.dialogRef.close();
  }
  guardar(){
    if(this.producto.nombre && this.producto.descripcion){
      this.productoService.actualizar(this.producto.id!, this.producto).subscribe( {
        next: () => {
          console.log('Producto actualizado');
          this.dialogRef.close();
        },
        error: (err) => {
          console.log('Error al actualizar el producto', err);
        }
      });
    }
    this.dialogRef.close(this.producto);
  }

}

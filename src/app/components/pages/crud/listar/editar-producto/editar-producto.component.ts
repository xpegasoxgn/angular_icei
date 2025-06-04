import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Producto } from '../../../../../models/producto.model';
import { ProductoService } from '../../../../../service/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-producto',
  standalone: false,
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public producto: Producto,
  private dialogRef: MatDialogRef<EditarProductoComponent>,
  private productoService: ProductoService,
  private snackBar: MatSnackBar
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
          this.snackBar.open('Producto actualizado', 'Cerrar', {  
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
            
          })
          this.dialogRef.close();
        },
        error: (err) => {
          this.snackBar.open('Error al actualizar el producto', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          })
        }
      });
    }
    this.dialogRef.close(this.producto);
  }

}

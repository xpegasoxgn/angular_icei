import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Producto } from '../../../../../models/producto.model';
import { ProductoService } from '../../../../../service/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-producto',
  standalone: false,
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  producto: Producto = {
    nombre: '',
    descripcion: '',
  };
  constructor( 
  private dialogRef: MatDialogRef<CrearProductoComponent>,
  private productoService: ProductoService,
  private snackBar: MatSnackBar
  ) { }
  ngOnInit(): void {
    console.log('esta entrando al componente crear');
  }

  close(){
    this.dialogRef.close();
  }
  guardar(){
    if(this.producto.nombre && this.producto.descripcion){
      this.productoService.crear(this.producto).subscribe( {
        next: () => {
          this.snackBar.open('Producto creado', 'Cerrar', {  
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
            
          })
          this.dialogRef.close();
          
        },
        error: (err) => {
          this.snackBar.open('Error al crear el producto', 'Cerrar', {
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

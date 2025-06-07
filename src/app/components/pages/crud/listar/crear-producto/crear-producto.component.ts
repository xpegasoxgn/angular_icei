import { Component, inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Producto } from '../../../../../models/produco.model';
import { ProductoService } from '../../../../../service/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-crear-producto',
  standalone: false,
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

  producto: Producto={
    nombre:'',
    descripcion:''
  };

  constructor(
    private dialogRef: MatDialogRef<CrearProductoComponent>,
    private productoService: ProductoService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any  // ✅ inyecta data como 'public data'
  ) {}

   ngOnInit():void{
     console.log('esta entrando al componente', this.data)
   }

    close(): void {
    this.dialogRef.close();
    }

    guardar(): void {
      if (this.producto.nombre && this.producto.descripcion) {
        this.productoService.crear(this.producto).subscribe({
          next: (res) => {
            this.snackBar.open('Producto registrado correctamente', 'Cerrar', {
              duration: 1000
            });
            this.dialogRef.close(true); // ✅ cerramos y devolvemos true para que el padre actualice la lista
          },
          error: (err) => {
            this.snackBar.open('No se pudo registrar el producto', 'Cerrar', {
              duration: 1000
            });
          }
        });
      } else {
        this.snackBar.open('Complete todos los campos', 'Cerrar', {
          duration: 1000
        });
      }
    }
}

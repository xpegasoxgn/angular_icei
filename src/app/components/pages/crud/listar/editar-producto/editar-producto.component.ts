import { Component, inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Producto } from '../../../../../models/produco.model';
import { ProductoService } from '../../../../../service/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-producto',
  standalone: false,
  templateUrl: './editar-producto.component.html',
  styleUrl: './editar-producto.component.css'
})
export class EditarProductoComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public producto:Producto,
   private dialoRef:MatDialogRef<EditarProductoComponent>,
   private productoService: ProductoService,
   private snackBar: MatSnackBar
  ){}
    ngOnInit(){
      console.log('esta entrando al componente', this.producto)
    }

    close(){
      this.dialoRef.close();
    }
    guardar(){
      if(this.producto.nombre && this.producto.descripcion){

        this.productoService.actualizar(this.producto.id!, this.producto).subscribe({
          next:()=>{
           this.snackBar.open('Producto actualizado correctamente', 'cerrar',{
            duration:5000,
            panelClass:['snackbar-success']
           })
            this.dialoRef.close();
          },
          error:()=>{
            this.snackBar.open('Error al guardar ', 'cerrar',{
            duration:3000,
            panelClass:['snackbar-error']
           })
          }
        });
        
      }

      
    }
}

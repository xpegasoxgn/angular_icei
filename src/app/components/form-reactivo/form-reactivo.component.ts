import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoService } from '../../service/producto.service';
import { Producto } from '../../models/producto.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-reactivo',
  standalone: false,
  templateUrl: './form-reactivo.component.html',
  styleUrl: './form-reactivo.component.css'
})
export class FormReactivoComponent {
  
  constructor(
    private fb:FormBuilder,
    private productoService:ProductoService,
    private matSnackBar:MatSnackBar
  ){}

  formulario!:FormGroup;
  id = 0;

  ngOnInit(){
    this.formulario = this.fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required]
    });
  }

  guardar(){
    if( this.formulario.valid ){
      console.log("Valido");
      this.id += 1;
      const producto: Producto = {
        id: this.id,
        nombre: this.formulario.value.nombre,
        descripcion: this.formulario.value.descripcion
      };
  
      this.productoService.postProducto(producto).subscribe(
        data => {
          console.log(data);
          this.matSnackBar.open('Producto agregado correctamente', 'cerrar',{
            duration:3000,
            panelClass:['snackbar-success'],
            verticalPosition: 'top' 
          })
        }
      );
    }
    else{
      console.log("No es valido");
    }
  }

}

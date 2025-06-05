import { Component, OnInit } from '@angular/core';
import  { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from '../../../../models/producto.model';
import { ProductoService } from '../../../../service/producto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-formulario-reactivo',
  standalone: false,
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {
  formulario!: FormGroup;
  constructor(private formBuilder: FormBuilder,private productoService: ProductoService,private snackBar: MatSnackBar) {
    
  }
  ngOnInit(){
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }
  guardar(): void {
    if (this.formulario.valid) {
      this.productoService.crear(this.formulario.value).subscribe({
        next: (res) => {
          this.snackBar.open('Producto creado con exito', 'Cerrar', {  
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
            
          })
          this.formulario.reset();
        },
        error: (err) => {
          this.snackBar.open('error  al crear producto', 'Cerrar', {  
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
            
          })
        }
      });
    } else {
      this.snackBar.open('formulario invalido', 'Cerrar', {  
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['error-snackbar']
        
      })
    }
  }
}

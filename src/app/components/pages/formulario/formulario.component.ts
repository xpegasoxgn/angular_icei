import { Component } from '@angular/core';
import { FormularioService } from '../../../service/formulario.service';
@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  nombre='';
  correo='';
  // definir el contructor
  constructor(private formularioService:FormularioService){

  }


  guardar():void{
    const datos={
      nombre: this.nombre,
      correo:this.correo
    }
    this.formularioService.guardarFormulario(datos);
  }

}

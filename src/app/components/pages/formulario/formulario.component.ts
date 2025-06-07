import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
  host: {'ngSkipHydratation':'true'}
})
export class FormularioComponent {

  nombre='';
  correo='';

  guardar(){
    alert("Nombre: "+this.nombre+"Correo: "+this.correo);
  }
}

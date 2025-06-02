import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  guardarFormulario(data:any){
    console.log('Formulario recibido', data)

    alert('formulario simulado enviado correctamente ')
  }
}

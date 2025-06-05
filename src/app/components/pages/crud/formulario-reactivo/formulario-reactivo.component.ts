import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-reactivo',
  standalone: false,
  templateUrl: './formulario-reactivo.component.html',
  styleUrl: './formulario-reactivo.component.css'
})
export class FormularioReactivoComponent {
  formulario !:FormGroup;
  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.formulario =this.fb.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required]
    });
  }

  
  guardar(){
    
    if(this.formulario.valid){
      console.log('valido');
    }else{
      console.log('no es valido');
    }

  }

}

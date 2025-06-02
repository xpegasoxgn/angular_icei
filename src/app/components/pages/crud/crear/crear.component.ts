import { Component } from '@angular/core';
import { ProductoService } from '../../../../service/producto.service';
import { Producto } from '../../../../models/produco.model';

@Component({
  selector: 'app-crear',
  standalone: false,
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent {

  producto: Producto={
    nombre:'',
    descripcion:''
  };
  constructor(private productoService:ProductoService){}


  guardar(){
    if(this.producto.nombre&& this.producto.descripcion){
      //lama servicio
      this.productoService.crear(this.producto).subscribe({
        // si todo esta bien
        next:(res)=>{
          alert('se ha registrado el producot');
          this.producto={nombre:'',descripcion:''}
        },
        //si hay error se va por aca 
        error:(err)=>{
            alert('nose pudo registrar')
        }
        
      });
    }else{
      alert('meter todos los datos')
    }

  }
    
}

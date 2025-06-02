import { Component,OnInit } from '@angular/core';
import { ProductoService } from '../../../../service/producto.service';
import { Producto } from '../../../../models/produco.model';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  productos:Producto[]=[];

  displayedColumns: string []=['id','nombre','descripcion']


  constructor(private productoService:ProductoService){}

  ngOnInit(){
    console.log('entrar al metodo ')
    this.productoService.getProductos().subscribe(data=>{
      this.productos= data;
      console.log(this.productos)
        
    });

  }

}

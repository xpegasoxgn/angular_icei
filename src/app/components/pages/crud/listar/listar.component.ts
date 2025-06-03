import { Component,OnInit } from '@angular/core';
import { ProductoService } from '../../../../service/producto.service';
import { Producto } from '../../../../models/produco.model';
//import { MatDialog } from '@angular/material/dialog';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  productos:Producto[]=[];

  displayedColumns: string []=['id','nombre','descripcion','acciones']


  constructor(private productoService:ProductoService, public dialog: MatDialog){}

  ngOnInit(){
    console.log('entrar al metodo ')
    this.productoService.getProductos().subscribe(data=>{
      this.productos= data;
      console.log(this.productos)
        
    });

  }

  abrirModalEditar(producto: Producto){
    this.dialog.open( EditarProductoComponent,{
      width:'400px',
      data: producto,// le vamos a mandar data  la data producto
    });

  }
}

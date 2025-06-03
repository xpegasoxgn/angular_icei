import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { ProductoService } from '../../../../service/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  productos: Producto[] = []; 

  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];

  constructor(private productoService: ProductoService, private dialog:MatDialog) {}
  ngOnInit(): void {
    this.productoService.getproductos().subscribe((data) => {
      this.productos = data;
      console.log(this.productos);
    });
  }


  abrirModalEditar(producto: Producto){
    this.dialog.open(EditarProductoComponent, {
      width: '400px',
      data: producto,
    })
  }


}

import { Component } from '@angular/core';
import { ProductoService } from '../../../service/producto.service';
import { Producto } from '../../../models/producto.model';
import { DetalleProductoComponent } from '../../detalle-producto/detalle-producto.component';
import { AddProductModalComponent } from '../../add-product-modal/add-product-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { logout as logoutGuard } from '../../../guards/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css',
  host: {'ngSkipHydratation':'true'}
})
export class ListarComponent {
  productos: Producto[] = [];
  
  displayedColumns: String[] = ['id','nombre','descripcion','acciones'];

  constructor(
    private productoService:ProductoService,
    private dialog:MatDialog,
    private router:Router
  ){};

  ngOnInit(){
    this.productoService.getProductos().subscribe(
      data => {
        this.productos = data;
        console.log(this.productos);
      }
    )
  }

  logout(){
    console.log('IN');
    logoutGuard();
    return this.router.navigate(['/login']);
  }

  addProductoModal(){
    this.dialog.open(AddProductModalComponent, {
      width:"400px"
    });
  }

  editarProducto(){

  }

  eliminarProducto(){
    
  }

  verProducto(producto:Producto){
    this.dialog.open(DetalleProductoComponent, {
      width:"400px",
      data: producto.id
    });
  }
}

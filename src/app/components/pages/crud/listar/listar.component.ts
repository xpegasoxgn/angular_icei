import { Component,OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductoService } from '../../../../service/producto.service';
import { Producto } from '../../../../models/produco.model';
//import { MatDialog } from '@angular/material/dialog';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  productos:Producto[]=[];
  productoEliminar:number | null=null;
  displayedColumns: string []=['id','nombre','descripcion','acciones']

  @ViewChild('confirmDialog') confirmDialogTemplate!: TemplateRef<any>;
  
  constructor(private productoService:ProductoService, public dialog: MatDialog, private snackBar:MatSnackBar){}

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
  
  abrirDialogEliminar(id:number){
    this.productoEliminar=id;
    this.dialog.open(this.confirmDialogTemplate)
  }
  
  confirmarEliminar(){
     if(this.productoEliminar!=null){
      this.productoService.eliminar(this.productoEliminar).subscribe({
        next:()=>{
          this.snackBar.open('Producto eliminado', 'cerrar', {duration:3000})
          this.dialog.closeAll();
        },
        error:()=>{
          this.snackBar.open('Error al eliminar el producot', 'cerrar', {duration:3000})
          this.dialog.closeAll();
        }
        
      });
    }
  }
  cancelarEliminacion(){
    this.productoEliminar=null;
    this.dialog.closeAll();
  }
  confirmarEliminacion(id:number){
   
    const confirmado= confirm('Esta seguro de eliminar este producto?');
    if(confirmado){
      this.productoService.eliminar(id).subscribe({
        next:()=>{
          this.snackBar.open('Producto eliminado', 'cerrar', {duration:3000})
        },
        error:()=>{
           this.snackBar.open('Error al eliminar el producot', 'cerrar', {duration:3000})
        }
        
      });
    }

  }


  
  abrirModalDetalle(producto: Producto):void{
    this.dialog.open( DetalleProductoComponent,{
      width:'400px',
      data: producto,// le vamos a mandar data  la data producto
    });

  }

}

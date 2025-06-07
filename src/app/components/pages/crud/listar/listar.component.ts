import { Component, OnInit , ViewChild, TemplateRef} from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { ProductoService } from '../../../../service/producto.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DetalleProductoComponent } from '../detalle-producto/detalle-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { Router } from '@angular/router';
import { logout as  loginGuard} from '../../../../guards/auth.guard';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  productos: Producto[] = []; 
  productoEliminar:number | null = null;


  displayedColumns: string[] = ['id', 'nombre', 'descripcion','acciones'];
  @ViewChild('confirmDialog') confirmDialogTemplate!: TemplateRef<any>;
  constructor(private productoService: ProductoService, private dialog:MatDialog, private snackBar:MatSnackBar,private router: Router) {}
  ngOnInit(): void {
    this.productoService.getproductos().subscribe((data) => {
      this.productos = data;
      console.log(this.productos);
    });
  }

  confirmarEliminar(){
    if(this.productoEliminar!=null){
      this.productoService.eliminar(this.productoEliminar).subscribe( {
        next: () => {
          this.snackBar.open('Producto eliminado', 'Cerrar', {
            duration: 3000,
          });
          this.dialog.closeAll();
        },

        error: () => {
          this.snackBar.open('Error al eliminar el producto', 'Cerrar', {
            duration: 3000,
          });
          this.dialog.closeAll();
        }
      })
    }
  }
  cancelarEliminar(){
    this.productoEliminar = null;
    this.dialog.closeAll();
  }
  abrirModalEditar(producto: Producto){
    this.dialog.open(EditarProductoComponent, {
      width: '400px',
      data: producto,
    })
  }
  abrirDialogEliminar(id:number){
    this.productoEliminar=id;
    this.dialog.open(this.confirmDialogTemplate)
  }
  abrirModalDetalle(producto: Producto):void{
    this.dialog.open(DetalleProductoComponent, {
      width: '400px',
      data: producto,
    })
  }
  abrirModalAgregarProducto(){
    this.dialog.open(CrearProductoComponent, {
      width: '400px',
    })
  }
  logout() {
    loginGuard();
    this.router.navigate(['/login']);
  }


}

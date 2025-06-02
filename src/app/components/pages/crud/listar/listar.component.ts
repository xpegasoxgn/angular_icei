import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../models/producto.model';
import { ProductoService } from '../../../../service/producto.service';

@Component({
  selector: 'app-listar',
  standalone: false,
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  productos: Producto[] = []; 

  displayedColumns: string[] = ['id', 'nombre', 'descripcion'];

  constructor(private productoService: ProductoService) {}
  ngOnInit(): void {
    this.productoService.getproductos().subscribe((data) => {
      this.productos = data;
      console.log(this.productos);
    });
  }


}

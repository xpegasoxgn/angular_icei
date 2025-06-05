import { Component, OnInit ,  Inject} from '@angular/core';
import { ProductoService } from '../../../../service/producto.service';
import { Producto } from '../../../../models/producto.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-detalle-producto',
  standalone: false,
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {
  producto: Producto | null = null;
  constructor(private productoService: ProductoService,
    @Inject(MAT_DIALOG_DATA) public data:{id:number},
    private router: Router,
    private dialogRef: MatDialogRef<DetalleProductoComponent>
  ) { }

  ngOnInit(): void {
    const id = Number(this.data);
    this.productoService.getById(id).subscribe({
      next: (data) => {
        this.producto = data;
      },
      error: (err) => {
        console.log("error al consumir el  servicio",err);
      }
    });
  }
  irRegistro():void{
    this.dialogRef.close();
    this.router.navigate(['/home'])
  }
}

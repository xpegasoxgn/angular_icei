import { Component, Inject, OnInit } from '@angular/core';
import { ProductoService } from '../../../../service/producto.service';
import { Producto } from '../../../../models/produco.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detalle-producto',
  standalone: false,
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  producto:Producto | null=null;
  constructor(private productoService:ProductoService, private router:Router, private dialogRef:MatDialogRef<DetalleProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{id:number}
  ){}

  ngOnInit():void{
    console.log(this.data)
    const id=Number(this.data);
   
    this.productoService.getById(id).subscribe({
      next:(data)=> this.producto =data,
      error:(err)=>console.error('error al consumir el servicio',err),
    });
  }

  irRegistro():void{
    this.dialogRef.close();
    this.router.navigate(['/home'])
  }
}

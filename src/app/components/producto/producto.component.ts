import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { ProductoService } from '../../servicios/productos.services';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {

  producto:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _productoService: ProductoService
    ){

    this.activatedRoute.params.subscribe( params =>{
       this.producto = this._productoService.getProducto( params['id'] );
        //this.producto=this._productoService.getProductos();
         console.log(this.producto);
    });

  }

}

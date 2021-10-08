import { Component, OnInit, EventEmitter,Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PriceService } from '../../servicios/price.service';
import { ProductoService, Producto  } from '../../servicios/productos.services';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];
  productostmp:Producto[] = []; //almaceno las frutas compradas
  arr:number[]=[]; //almaceno precios de addcarrito
  total: number=0; //total precio

constructor( private _productoService:ProductoService, private router:Router, private price: PriceService){
   
  this.total=parseInt(localStorage.getItem("total"));
  this.total=Number(this.total)? this.total:0;

    // console.log("constructor");
  }

  ngOnInit() {
    this.productos = this._productoService.getProductos();
     console.log( this.productos );
  }

  borrar(){
    
    this.total=0;
   // console.log("total borrar: ",this.total);
    localStorage.setItem("total","0");
    localStorage.clear();
    
  }
 /*
  verProducto( idx:number ){
    this.router.navigate( ['/producto',idx] );
  }
*/
  addCarrito(id: number){
    
    this.total=0;
    localStorage.setItem("total",this.total.toString());


  //  this.productostmp.forEach(pro => if(pro.id==id-1){ });

    this.productostmp.push(this._productoService.getProducto(id-1));
    this.arr.push(this.productos[id-1].precio);
    console.log(this.productostmp);


   
     const acum = (accumulator, currentValue) => accumulator + currentValue;
     this.total=this.arr.reduce(acum)
     

    console.log("total addcarrito:",this.total);

    localStorage.setItem("total",this.total.toString());
  }


  propagar(){

    this.price.precio$.emit(this.total);
    console.log("holaa");}
 
  

}

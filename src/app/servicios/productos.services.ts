import { Injectable } from '@angular/core';

@Injectable()
export class ProductoService {

    private productos : Producto[]=
    [
      {
        id: 1,
        nombre: "Manzanas",
        precio: 5,
        img:"assets/img/01.jpg"
      },
      {
        id: 2,
        nombre: "Bananas",
        precio: 7.5,
        img:"assets/img/02.jpg"
      },
      {
        id: 3,
        nombre: "Naranjas",
        precio: 7.5,
        img:"assets/img/03.jpg"
      },
      {
        id: 4,
        nombre: "Peras",
        precio: 6,
        img:"assets/img/04.jpg"
      },
      {
        id: 5,
        nombre: "Duraznos",
        precio: 8,
        img:"assets/img/05.jpg"
      },
      {
        id: 6,
        nombre: "Frutillas",
        precio: 10,
        img:"assets/img/06.jpg"
      },
      {
        id: 7,
        nombre: "Kiwis",
        precio: 9,
        img:"assets/img/07.jpg"
      },
      {
        id: 8,
        nombre: "Ciruelas",
        precio: 6.5,
        img:"assets/img/08.jpg"
      },
      {
        id: 9,
        nombre: "Anana",
        precio: 12,
        img:"assets/img/09.jpg"
      },
      {
        id: 10,
        nombre: "Mandarinas",
        precio: 5,
        img:"assets/img/010.jpg"
      },
      {
        id: 11,
        nombre: "Sandia",
        precio: 15,
        img:"assets/img/011.jpg"
      },
      {
        id: 12,
        nombre: "Melon",
        precio: 13,
        img:"assets/img/012.jpg"
      },
      {
        id: 13,
        nombre: "Uvas",
        precio: 8,
        img:"assets/img/013.jpg"
      },
      {
        id: 14,
        nombre: "Higos",
        precio: 5,
        img:"assets/img/014.jpg"
      },
      {
        id: 15,
        nombre: "Cerezas",
        precio: 16,
        img:"assets/img/015.jpg"
      }
    ];
    

    constructor() {console.log("services corriendo")}

getProductos():Producto[]{
  return this.productos;
}

getProducto( idd: number ){
  return this.productos[idd];
}


buscarProducto( termino:string ):Producto[]{

  let productoArr:Producto[] = [];

  termino = termino.toLowerCase();

  for( let i = 0; i < this.productos.length; i ++ ){

    let prod = this.productos[i];

    let nombre = prod.nombre.toLowerCase();

    if( nombre.indexOf( termino ) >= 0  ){
      prod.id = i;
      productoArr.push( prod )
    }
    return productoArr;
  }



}
}

//ng-s con esto m salta para el autocompletado del import + injectable y export
//para no agregar mas estructuras
export interface Producto{
  id: number;
  nombre: string;
  precio: number;
  //id?: number;
  img: string; 
  
};



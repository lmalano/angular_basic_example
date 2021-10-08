import { Component, Input, OnInit } from '@angular/core';
import { PriceService } from '../../servicios/price.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent  implements OnInit{
  @Input() total: number;

  numero: number;

  constructor(private price: PriceService) {  }

  ngOnInit()  {
    this.price.precio$.subscribe((numerooo: number)=>{
      this.numero=numerooo;
      console.log(this.numero);
      
    });
  }




}

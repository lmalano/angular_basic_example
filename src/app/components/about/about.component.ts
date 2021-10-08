import { Component, Input, OnInit } from '@angular/core';
import { PriceService } from '../../servicios/price.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  total: number;

  constructor(private price: PriceService) {

    this.total=parseInt(localStorage.getItem("total"));
  this.total=Number(this.total)? this.total:0;
   }

  ngOnInit(): void {

  }


}

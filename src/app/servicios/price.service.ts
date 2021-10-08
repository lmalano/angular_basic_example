import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  precio$= new EventEmitter<number>();
  constructor() { }
}

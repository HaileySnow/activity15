import { Injectable } from '@angular/core';
import FlowerList from '../../Folders/flowerlist';

@Injectable({
  providedIn: 'root'
})
export class FlowerListService {
private flower: FlowerList[] = [];

  constructor() { }

  addFlower(name: string, description: string, price: number, quantity: number): void{
    this.flower.push({
     name: name,
     description: description,
     price: price,
     quantity: quantity,
    
    })
  }
  getFlower(): FlowerList[]{
  return this.flower;
  }
}

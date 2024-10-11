import { Injectable } from '@angular/core';
import FruitList from '../../Folders/fruitlist';

@Injectable({
  providedIn: 'root'
})
export class FruitListService {
  private fruit: FruitList[] = [];

  constructor() { }

  addFruit(id: number, name: string, quantity: number, price: number): void{
    this.fruit.push({
    id: id, 
    name: name,
    quantity: quantity,
    price: price,

    });
  }
  getFruit(): FruitList[]{
  return this.fruit;
  }
}

import { Injectable } from '@angular/core';
import GroceryList from '../../Folders/grocerylist';

@Injectable({
  providedIn: 'root'
})
export class GroceryListService {
private grocery: GroceryList[] = [];

  constructor() { }

  addGrocery(name: string, price: number, quantity: number): void{
  this.grocery.push({
  name: name,
  price: price,
  quantity: quantity,
  })
  }
  getGrocery(): GroceryList[]{
  return this.grocery;
  }
}

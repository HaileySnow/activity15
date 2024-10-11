import { Injectable } from '@angular/core';
import InventoryList from '../../Folders/inventorylist';

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {
  private inventory: InventoryList[] = [];

  constructor() { }

  addInventory(name: string, quantity: number, price: number): void{
  this.inventory.push({
  name: name,
  quantity: quantity,
  price: price,
  }); 
 }
 getInventory(): InventoryList[]{
 return this.inventory;
 }
}

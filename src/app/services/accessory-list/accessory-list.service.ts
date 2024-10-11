import { Injectable } from '@angular/core';
import AccessoryList from '../../Folders/accessorylist';
@Injectable({
  providedIn: 'root'
})
export class AccessoryListService {
private accesories: AccessoryList[] = [];
  
constructor() { }

 addAccessory(item: string, material: string, price: number, category: string): void{

     this.accesories.push({
     item: item,
     material: material,
     price: price,
     category: category,

     });
    }
     getAccessories(): AccessoryList[] {
     return this.accesories;

     }

 }


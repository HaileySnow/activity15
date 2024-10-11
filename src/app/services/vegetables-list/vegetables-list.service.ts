import { Injectable } from '@angular/core';
import Vegetables from '../../Folders/vegetableslist';

@Injectable({
  providedIn: 'root'
})
export class VegetablesListService {
private vegetables: Vegetables[] = [];

  constructor() { }

  addVegetables(id: number, name: string, price: number): void{
    this.vegetables.push({
    id: id,
    name: name,
    price: price,
    });
  }
  getVegetables(): Vegetables[]{
    return this.vegetables;
  }
}

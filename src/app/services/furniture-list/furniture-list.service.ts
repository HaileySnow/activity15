import { Injectable } from '@angular/core';
import FurnitureList from '../../Folders/furniturelist';

@Injectable({
  providedIn: 'root'
})
export class FurnitureListService {
private furniture: FurnitureList[] = [];

  constructor() { }

  addFurniture(name: string, material: string, price: number, category: string): void{
  this.furniture.push({
  name: name,
  material: material,
  price: price,
  category: category,
  });
  }
  getFurniture(): FurnitureList[]{
  return this.furniture;
  }
}

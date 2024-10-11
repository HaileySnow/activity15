import { Injectable } from '@angular/core';
import FoodMenuList from '../../Folders/foodmenulist';

@Injectable({
  providedIn: 'root'
})
export class FoodmenuListService {
  private foodmenu: FoodMenuList[] = [];

  constructor() { }

  addFoodMenu(name: string, price: number): void{
  this.foodmenu.push({
  name: name,
  price: price, 
  });
  }
  getFoodMenu(): FoodMenuList[]{
  return this.foodmenu;
  }
}

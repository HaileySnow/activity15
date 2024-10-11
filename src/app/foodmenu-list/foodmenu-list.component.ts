import { Component } from '@angular/core';
import FoodMenuList from '../Folders/foodmenulist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FoodmenuListService } from '../services/foodmenu-list/foodmenu-list.service';

@Component({
  selector: 'app-foodmenu-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './foodmenu-list.component.html',
  styleUrl: './foodmenu-list.component.css'
})
export class FoodmenuListComponent {

  foodMenuList= [] as FoodMenuList[];
  constructor(private foodmenuService:FoodmenuListService){
  this.foodMenuList =  this.foodmenuService.getFoodMenu();
  }
	name: string = '';
	price: number = 0;

	addFoodMenu() {
		this.foodmenuService.addFoodMenu(
			this.name,
			this.price,
		);
		this.name = '';
		this.price = 0;
	}
}

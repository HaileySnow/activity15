import { Component } from '@angular/core';
import FoodMenuList from '../Folders/foodmenulist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-foodmenu-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './foodmenu-list.component.html',
  styleUrl: './foodmenu-list.component.css'
})
export class FoodmenuListComponent {

  foodMenuList: FoodMenuList[] = [];
	name: string = '';
	price: number = 0;

	addFoodMenu() {
		this.foodMenuList.push({
			name: this.name,
			price: this.price,
		});
		this.name = '';
		this.price = 0;
	}
}

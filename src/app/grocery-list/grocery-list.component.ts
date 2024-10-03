import { Component } from '@angular/core';
import GroceryList from '../Folders/grocerylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {

  groceryList: GroceryList[] = [];

	
	name: string = '';
	price: number = 0;
	quantity: number = 0;

	addGrocery() {
		this.groceryList.push({
			
			name: this.name,
			price: this.price,
			quantity: this.quantity,
		});
		
		this.name = '';
		this.price = 0;
		this.quantity = 0;
	}
}

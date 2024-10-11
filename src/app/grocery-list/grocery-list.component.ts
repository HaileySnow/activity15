import { Component } from '@angular/core';
import GroceryList from '../Folders/grocerylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroceryListService } from '../services/grocery-list/grocery-list.service';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css'
})
export class GroceryListComponent {

  groceryList = [] as GroceryList [];
  constructor(private groceryService:GroceryListService){
  this.groceryList = this.groceryService.getGrocery();
  }

	
	name: string = '';
	price: number = 0;
	quantity: number = 0;

	addGrocery() {
		this.groceryService.addGrocery(
			
			this.name,
			this.price,
			this.quantity,
		);
		
		this.name = '';
		this.price = 0;
		this.quantity = 0;
	}
}

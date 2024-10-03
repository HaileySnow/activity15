import { Component } from '@angular/core';
import InventoryList from '../Folders/inventorylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {

  inventoryList: InventoryList[] = [];

	name: string = '';
	quantity: number = 0;
	price: number = 0;
	addNewInventory() {
		this.inventoryList.push({
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}

}

import { Component } from '@angular/core';
import InventoryList from '../Folders/inventorylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryListService } from '../services/inventory-list/inventory-list.service';

@Component({
  selector: 'app-inventory-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './inventory-list.component.html',
  styleUrl: './inventory-list.component.css'
})
export class InventoryListComponent {

  inventoryList = [] as InventoryList [];
  constructor(private inventoryService:InventoryListService){
  this.inventoryList = this.inventoryService.getInventory();
  }

	name: string = '';
	quantity: number = 0;
	price: number = 0;
	addNewInventory() {
		this.inventoryService.addInventory(
			this.name,
			this.quantity,
			this.price,
		);
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}

}

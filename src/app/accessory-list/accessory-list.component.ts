import { Component } from '@angular/core';
import AccessoryList from '../Folders/accessorylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccessoryListService } from '../services/accessory-list/accessory-list.service';

@Component({
  selector: 'app-accessory-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {

  accessoryList = [] as AccessoryList[];
  constructor(private accessoryService: AccessoryListService) {
	this.accessoryList = this.accessoryService.getAccessories();
  }
	item: string = '';
	material: string = '';
	price: number = 0;
	category: string = '';

	addAccessory() {
		this.accessoryService.addAccessory (
			this.item,
			this.material,
			this.price,
			this.category,
		);

		this.item = '';
		this.material = '';
		this.price = 0;
		this.category = '';
	}

}

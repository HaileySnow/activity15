import { Component } from '@angular/core';
import AccessoryList from '../Folders/accessorylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accessory-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './accessory-list.component.html',
  styleUrl: './accessory-list.component.css'
})
export class AccessoryListComponent {

  accessoryList: AccessoryList[] = [];

	item: string = '';
	material: string = '';
	price: number = 0;
	category: string = '';

	addAccessory() {
		this.accessoryList.push({
			item: this.item,
			material: this.material,
			price: this.price,
			category: this.category,
		});

		this.item = '';
		this.material = '';
		this.price = 0;
		this.category = '';
	}

}

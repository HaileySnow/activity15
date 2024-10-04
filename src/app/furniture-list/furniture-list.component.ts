import { Component } from '@angular/core';
import FurnitureList from '../Folders/furniturelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-furniture-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {

  furnitureList: FurnitureList[] = [];

	name: string = '';
	material: string = '';
	price: number = 0;
	category: string = '';

	addFurniture() {
		this.furnitureList.push({
			name: this.name,
			material: this.material,
			price: this.price,
			category: this.category,
		});
		this.name = '';
		this.material = '';
		this.price = 0;
		this.category = '';
	}

}

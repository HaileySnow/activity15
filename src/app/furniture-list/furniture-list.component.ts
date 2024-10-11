import { Component } from '@angular/core';
import FurnitureList from '../Folders/furniturelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FurnitureListService } from '../services/furniture-list/furniture-list.service';

@Component({
  selector: 'app-furniture-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './furniture-list.component.html',
  styleUrl: './furniture-list.component.css'
})
export class FurnitureListComponent {

  furnitureList = [] as FurnitureList [];
  constructor(private furnitureService:FurnitureListService){
  this.furnitureList = this.furnitureService.getFurniture();
  }

	name: string = '';
	material: string = '';
	price: number = 0;
	category: string = '';

	addFurniture() {
		this.furnitureService.addFurniture(
			this.name,
			this.material,
			this.price,
			this.category,
		);
		this.name = '';
		this.material = '';
		this.price = 0;
		this.category = '';
	}

}

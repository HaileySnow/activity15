import { Component } from '@angular/core';
import Vegetables from '../Folders/vegetableslist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VegetablesListService } from '../services/vegetables-list/vegetables-list.service';

@Component({
  selector: 'app-vegetables-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './vegetables-list.component.html',
  styleUrl: './vegetables-list.component.css'
})
export class VegetablesListComponent {

  vegetables = [] as Vegetables [];
  constructor(private vegetablesService:VegetablesListService){
  this.vegetables = this.vegetablesService.getVegetables();
  }

	id: number = 0;
	name: string = '';
	price: number = 0;

	addVegetable(): void {
		this.vegetablesService.addVegetables(
		this.id,
		this.name,
		this.price,
		);

		this.id = 0;
		this.name = '';
		this.price = 0;
	}

}

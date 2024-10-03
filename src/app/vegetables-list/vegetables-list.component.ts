import { Component } from '@angular/core';
import Vegetables from '../Folders/vegetableslist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vegetables-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './vegetables-list.component.html',
  styleUrl: './vegetables-list.component.css'
})
export class VegetablesListComponent {

  vegetables: Vegetables[] = [];

	id: string = '';
	name: string = '';
	price: string = '';

	addVegetable(): void {
		this.vegetables.push({
			id: Number(this.id),
			name: this.name,
			price: Number(this.price),
		});

		this.id = '';
		this.name = '';
		this.price = '';
	}

}

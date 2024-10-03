import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import FruitList from '../Folders/fruitlist';


@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
 
  fruits: FruitList[] = [];

	id: string = '';
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addFruit(): void {
		this.fruits.push({
			id: this.id,
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}

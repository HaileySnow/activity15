import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import FruitList from '../Folders/fruitlist';
import { FruitListService } from '../services/fruit-list/fruit-list.service';


@Component({
  selector: 'app-fruit-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './fruit-list.component.html',
  styleUrl: './fruit-list.component.css'
})
export class FruitListComponent {
 
  fruitList = [] as FruitList [];
  constructor(private fruitService:FruitListService){
  this.fruitList = this.fruitService.getFruit();
  }

	id: number = 0;
	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addFruit(): void {
		this.fruitService.addFruit(
			this.id,
			this.name,
			this.quantity,
			this.price,
		);

		this.id = 0;
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}

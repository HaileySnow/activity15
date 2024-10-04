import { Component } from '@angular/core';
import FlowerList from '../Folders/flowerlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flower-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {

  flowerList: FlowerList[] = [];
	
	name: string = '';
	description: string = '';
	price: number = 0;
	quantity: number = 0;

	addFlower() {
		this.flowerList.push({
			name: this.name,
			description: this.description,
			price: this.price,
			quantity: this.quantity,
		});

		
		this.name = '';
		this.description = '';
		this.price = 0;
		this.quantity = 0;
	}
}

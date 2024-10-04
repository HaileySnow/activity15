import { Component } from '@angular/core';
import LaptopList from '../Folders/laptoplist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laptop-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {

  laptops: LaptopList[] = [];
	model: string = '';
	brand: string = '';
	price: number = 0;
	processor: string = '';
	ram: string = '';
	storage: string = '';
	display: string = '';
	graphics: string = '';

	addLaptop() {
		this.laptops.push({
			model: this.model,
			brand: this.brand,
			price: this.price,
			processor: this.processor,
			ram: this.ram,
			storage: this.storage,
			display: this.display,
			graphics: this.graphics,
		});
		this.model = '';
		this.brand = '';
		this.price = 0;
		this.processor = '';
		this.ram = '';
		this.storage = '';
		this.display = '';
		this.graphics = '';
	}

}

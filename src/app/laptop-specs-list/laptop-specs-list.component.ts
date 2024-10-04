import { Component } from '@angular/core';
import LaptopSpecs from '../Folders/laptopspecslist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laptop-specs-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './laptop-specs-list.component.html',
  styleUrl: './laptop-specs-list.component.css'
})
export class LaptopSpecsListComponent {

  laptops: LaptopSpecs[] = [];

	model: string = '';
	processor: string = '';
	ram: string = '';
	storage: string = '';
	display: string = '';
	graphics: string = '';

	addLaptop() {
		this.laptops.push({
			model: this.model,
			specs: {
				processor: this.processor,
				ram: this.ram,
				storage: this.storage,
				display: this.display,
				graphics: this.graphics,
			},
		});
		this.model = '';
		this.processor = '';
		this.ram = '';
		this.storage = '';
		this.display = '';
		this.graphics = '';
	}

}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Product from '../Folders/productlist';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: Product[] = [];
	id: string = '';
	name: string = '';
	price: number = 0;

	addProduct(): void {
		this.products.push({
			id: Number(this.id),
			name: this.name,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.price = 0;
	}
}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Product from '../Folders/productlist';
import { ProductListService } from '../services/product-list/product-list.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  product = [] as Product [];
  constructor(private productService:ProductListService){
  this.product = this.productService.getProduct();
  }
	id: number = 0;
	name: string = '';
	price: number = 0;

	addProduct(): void {
		this.productService.addProduct(
		this.id,
		this.name,
		this.price,
		);

		this.id = 0;
		this.name = '';
		this.price = 0;
	}
}

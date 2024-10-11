import { Injectable } from '@angular/core';
import Product from '../../Folders/productlist';
import { ProductListComponent } from '../../product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
private product: Product[] = [];

  constructor() { }

  addProduct(id: number, name: string, price: number): void{
    this.product.push({
    
    id: id,
    name: name,
    price: price,

    });
  }
  getProduct(): Product[]{
    return this.product;
  }
}

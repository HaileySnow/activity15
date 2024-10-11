import { Component } from '@angular/core';
import FlowerList from '../Folders/flowerlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlowerListService } from '../services/flower-list/flower-list.service';

@Component({
  selector: 'app-flower-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './flower-list.component.html',
  styleUrl: './flower-list.component.css'
})
export class FlowerListComponent {

  flowerList = [] as FlowerList [];
  constructor(private flowerService:FlowerListService){
	this.flowerList = this.flowerService.getFlower();
  }
	
	name: string = '';
	description: string = '';
	price: number = 0;
	quantity: number = 0;

	addFlower() {
		this.flowerService.addFlower(
			this.name,
			this.description,
			this.price,
			this.quantity,
		);

		
		this.name = '';
		this.description = '';
		this.price = 0;
		this.quantity = 0;
	}
}

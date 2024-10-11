import { Component } from '@angular/core';
import LaptopList from '../Folders/laptoplist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageListService } from '../services/language-list/language-list.service';
import { LaptopListService } from '../services/laptop-list/laptop-list.service';

@Component({
  selector: 'app-laptop-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './laptop-list.component.html',
  styleUrl: './laptop-list.component.css'
})
export class LaptopListComponent {

  laptopList = [] as LaptopList [];

  constructor(private laptopService:LaptopListService){
  this.laptopList = this.laptopService.getLaptop();
  }
	model: string = '';
	brand: string = '';
	price: number = 0;
	processor: string = '';
	ram: string = '';
	storage: string = '';
	display: string = '';
	graphics: string = '';

	addLaptop() {
		this.laptopService.addLaptop(
		this.model,
		this.brand,
		this.price,
		this.processor,
		this.ram,
		this.storage,
		this.display,
		this.graphics,
		);
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

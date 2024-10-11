import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CarModel from '../Folders/carmodellist';
import CarModelList from '../Folders/carmodellist';
import { CarmodelListService } from '../services/carmodel-list/carmodel-list.service';

@Component({
  selector: 'app-carmodel-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './carmodel-list.component.html',
  styleUrl: './carmodel-list.component.css'
})
export class CarmodelListComponent {

	carmodelList = [] as CarModelList [];
	constructor(private carmodelService:CarmodelListService){
	this.carModels = this.carmodelService.getCarmodel();
	}

  carModels: CarModel[] = [];
	id: string = '';
	name: string = '';
	year: number = 0;
	make: string = '';
	model: string = '';
	price: number = 0;

	addCarModel(): void {
		this.carModels.push({
			id: Number(this.id),
			name: this.name,
			year: this.year,
			make: this.make,
			model: this.model,
			price: this.price,
		});

		this.id = '';
		this.name = '';
		this.year = 0;
		this.make = '';
		this.model = '';
		this.price = 0;
	}

}

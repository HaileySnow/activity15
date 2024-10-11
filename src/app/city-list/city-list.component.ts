import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CityList from '../Folders/citylist';
import { CityListService } from '../services/city-list/city-list.service';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
	cityList = [] as CityList [];

	constructor(private cityService:CityListService){
	this.cityList = this.cityService.getCity();
	}

	id: string = '';
	name: string = '';
	country: string = '';
	population: number = 0;

	addCity(): void {
		this.cityService.addCity(
			this.id,
			this.name,
			this.country,
			this.population,
		);

		this.id = '';
		this.name = '';
		this.country = '';
		this.population = 0;
	}

}

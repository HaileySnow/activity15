import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CityList from '../Folders/citylist';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css'
})
export class CityListComponent {
  cities: CityList[] = [];

	id: string = '';
	name: string = '';
	country: string = '';
	population: number = 0;

	addCity(): void {
		this.cities.push({
			id: this.id,
			name: this.name,
			country: this.country,
			population: this.population,
		});

		this.id = '';
		this.name = '';
		this.country = '';
		this.population = 0;
	}

}

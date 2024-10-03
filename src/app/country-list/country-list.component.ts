import { Component } from '@angular/core';
import Country from '../Folders/countrylist';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {

  countries: Country[] = [];

	id: string = '';
	name: string = '';
	capital: string = '';
	population: string = '';

	addCountry(): void {
		this.countries.push({
			id: Number(this.id),
			name: this.name,
			capital: this.capital,
			population: Number(this.population),
		});

		this.id = '';
		this.name = '';
		this.capital = '';
		this.population = '';
	}

}

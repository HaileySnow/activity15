import { Component } from '@angular/core';
import Country from '../Folders/countrylist';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CountryListService } from '../services/country-list/country-list.service';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {


  country = [] as Country [];
  constructor(private countryService:CountryListService){
  this.country = this.countryService.getCountry();
  }

	id: number = 0;
	name: string = '';
	capital: string = '';
	population: number = 0;

	addCountry(): void {
		this.countryService.addCountry(
			this.id,
			this.name,
			this.capital,
			this.population,
		);

		this.id = 0;
		this.name = '';
		this.capital = '';
		this.population = 0;
	}

}

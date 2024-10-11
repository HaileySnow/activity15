import { Injectable } from '@angular/core';
import Country from '../../Folders/countrylist';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {
  private country: Country[] = [];

  constructor() { }
  addCountry(id: number, name: string, capital: string, population: number): void {
  this.country.push({
  id:id, 
  name:name,
  capital: capital,
  population: population,

  });
 
}
getCountry(): Country[]{
  return this.country;
}
}

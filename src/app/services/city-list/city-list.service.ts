import { Injectable } from '@angular/core';
import CityList from '../../Folders/citylist';
import BuildingList from '../../Folders/buildinglist';
@Injectable({
  providedIn: 'root'
})
export class CityListService {
  private city: CityList[] = [];

  constructor() { }
 
  addCity(id: string, name: string, country: string, population: number): void{
    this.city.push({
    id: id,
    name: name,
    country: country,
    population: population,
    });
  }
  getCity(): CityList[]{
    return this.city;
  }

}

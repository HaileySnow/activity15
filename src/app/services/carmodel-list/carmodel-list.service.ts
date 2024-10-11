import { Injectable } from '@angular/core';
import CarModelList from '../../Folders/carmodellist';

@Injectable({
  providedIn: 'root'
})
export class CarmodelListService {
  private carModels: CarModelList[] = [];


  constructor() { }
  addCarmodel(id: number, name: string, year: number, make: string, model: string, price: number): void{
    this.carModels.push({
    id: id,
    name: name,
    year: year,
    make: make,
    model: model,
    price: price,
    });

  }
  getCarmodel(): CarModelList[]{
    return this.carModels;
  }
}

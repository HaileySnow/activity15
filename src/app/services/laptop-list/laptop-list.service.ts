import { Injectable } from '@angular/core';
import LaptopList from '../../Folders/laptoplist';

@Injectable({
  providedIn: 'root'
})
export class LaptopListService {

private laptop: LaptopList[] = [];
	addLaptopSpecs: any;
	getLaptopSpecs: any;

  constructor() { }

  addLaptop(model: string, brand: string, price: number, processor: string, ram: string, storage: string, display: string, graphics: string): void{
  this.laptop.push({
  model: model,
  brand: brand,
  price: price,
  processor: processor,
  ram: ram,
  storage: storage,
  display: display,
  graphics: graphics,
  });
  }
  getLaptop(): LaptopList[]{
  return this.laptop;
  }
}

import { Injectable } from '@angular/core';
import StationeryList from '../../Folders/stationarylist';

@Injectable({
  providedIn: 'root'
})
export class StationaryListService {
private stationery: StationeryList[] = [];

  constructor() { }

  addStationery(name: string, quantity: number, price: number): void{
  this.stationery.push({
  name: name,
  quantity: quantity,
  price: price,
  });
  }
  getStationery(): StationeryList[]{
    return this.stationery;
  }
}

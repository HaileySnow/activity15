import { Injectable } from '@angular/core';
import MobileAppList from '../../Folders/mobileapplist';

@Injectable({
  providedIn: 'root'
})
export class MobileappListService {
private mobileapp: MobileAppList[] = [];

  constructor() { }

  addMobileApp(name: string, description: string, price: number, rating: number): void{
    this.mobileapp.push({
     
    name: name,
    description: description,
    price: price,
    rating: rating,

    });
  }
  getMobileApp(): MobileAppList[]{
    return this.mobileapp; 
  }

}

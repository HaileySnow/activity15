import { Injectable } from '@angular/core';
import TourList from '../../Folders/tourlist';

@Injectable({
  providedIn: 'root'
})
export class TourListService {
private tour: TourList[] = [];

  constructor() { }

  addTour(tourDate: string, tourName: string, tourLocation: string, tourPrice: number, tourDuration: string): void{
    this.tour.push({
    
      tourDate: tourDate,
      tourName: tourName,
      tourLocation: tourLocation,
      tourPrice: tourPrice,
      tourDuration: tourDuration,

    });
  }
  getTour(): TourList[]{
    return this.tour;
  }
}

import { Injectable } from '@angular/core';
import DestinationList from '../../Folders/destinationlist';
@Injectable({
  providedIn: 'root'
})
export class DestinationListService {
  private destination: DestinationList[] = [];

  constructor() { }

  addDestination(name: string, location: string, time: string): void{
    this.destination.push({
    name: name,
    location: location,
    time: time,
    });
  }
  getDestination(): DestinationList[]{
  return this.destination;
  }
}

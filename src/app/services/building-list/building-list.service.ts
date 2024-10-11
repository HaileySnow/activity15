import { Injectable } from '@angular/core';
import BuildingList from '../../Folders/buildinglist';
@Injectable({
  providedIn: 'root'
})
export class BuildingListService {
  private buildings: BuildingList[] = [];


  constructor() { }

  addBuilding(name: string, address: string, floors: number, rooms: number, occupants: number): void{
    this.buildings.push({
    name:name,
    address: address,
    floors: floors,
    rooms: rooms,
    occupants: occupants,
    });
  }
  getBuildings(): BuildingList[]{
    return this.buildings;
  }
}

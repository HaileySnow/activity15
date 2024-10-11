import { Injectable } from '@angular/core';
import Animals from '../../Folders/animalslist';
@Injectable({
  providedIn: 'root'
})
export class AnimalsListService {
private animals: Animals[] = [];


  constructor() { }
  
  addAnimals (id: number, name: string, origin: string): void {
    this.animals.push({
      id: id,
      name: name,
      origin: origin,
    });
  }
  getAnimals(): Animals[]{
  return this.animals;
  }
}
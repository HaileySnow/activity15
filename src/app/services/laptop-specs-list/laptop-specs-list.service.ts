import { Injectable } from '@angular/core';
import LaptopSpecs from '../../Folders/laptopspecslist';

@Injectable({
  providedIn: 'root'
})
export class LaptopSpecsListService {
  private laptopspecs: LaptopSpecs[] = []; 

  constructor() { }


  addLaptopSpecs(model: string, processor: string, ram: string, storage: string, display: string, graphics: string): void {
    this.laptopspecs.push({
      model: model,
      specs:{
      processor: processor,
      ram: ram,
      storage: storage,
      display: display,
      graphics: graphics
      }
    });
  }

  
  getLaptopSpecs(): LaptopSpecs[] {
    return this.laptopspecs;
  }
}



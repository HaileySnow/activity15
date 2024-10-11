import { Injectable } from '@angular/core';
import ComputerHardware from '../../Folders/computerhardwarelist';

@Injectable({
  providedIn: 'root'
})
export class ComputerHardwareListService {
  private computerhardware: ComputerHardware[] = [];

  constructor() { }

  addComputerHardware(name: string, location: string, type: string, price: number): void{
    this.computerhardware.push({
     name: name,
     location: location,
     type: type,
     price: price, 
    });
  }
  getComputerHardware(): ComputerHardware[]{
    return this.computerhardware;
  }
}

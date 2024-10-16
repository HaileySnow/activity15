import { Injectable } from '@angular/core';
import ToolList from '../../Folders/toollist';

@Injectable({
  providedIn: 'root'
})
export class ToolListService {
private tools: ToolList[] = [];

  constructor() { }

  addTool(id: number, name: string, description: string, price: number, quantity: number): void{
    this.tools.push({
    
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    });
  }
  getTool(): ToolList[]{
    return this.tools;
  }
}

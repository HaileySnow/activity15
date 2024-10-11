import { Injectable } from '@angular/core';
import DeveloperToolsList from '../../Folders/developertoollist';

@Injectable({
  providedIn: 'root'
})
export class DeveloperListService {
private developertools: DeveloperToolsList[] = [];

  constructor() { }

  addDeveloperTool(toolName: string, toolDescription: string, toolPrice: number, toolDuration: string): void{
    this.developertools.push({
    toolName: toolName,
    toolDescription: toolDescription,
    toolPrice: toolPrice,
    toolDuration: toolDuration,

    });
  } 
  getDeveloperTool(): DeveloperToolsList[]{
    return this.developertools;
  }
}

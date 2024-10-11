import { Injectable } from '@angular/core';
import SoftwareList from '../../Folders/softwarelist';

@Injectable({
  providedIn: 'root'
})
export class SoftwareListService {
private software: SoftwareList[] = [];

  constructor() { }

  addSoftware(name: string, description: string, platform: string): void{
    this.software.push({
    
      name: name,
      description: description,
      platform: platform,
    });
  }
  getSoftware(): SoftwareList[]{
    return this.software;
  }
}

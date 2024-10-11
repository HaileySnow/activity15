import { Injectable } from '@angular/core';
import FrameworkList from '../../Folders/frameworklist';

@Injectable({
  providedIn: 'root'
})
export class FrameworkListService {
private framework: FrameworkList[] = [];

  constructor() { }

  addFramework(name: string, description: string, developedBy: string, firstRelease: string, latestRelease: string): void{
    this.framework.push({
    name: name,
    description: description,
    developedBy: developedBy,
    firstRelease: firstRelease,
    latestRelease: latestRelease,
    });
  }
  getFramework(): FrameworkList[]{
    return this.framework;
  }
}

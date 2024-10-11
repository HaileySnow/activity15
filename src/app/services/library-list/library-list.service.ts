import { Injectable } from '@angular/core';
import LibraryList from '../../Folders/librarylist';

@Injectable({
  providedIn: 'root'
})
export class LibraryListService {
private library: LibraryList[] = [];

  constructor() { }
  
   addLibrary(libraryName: string, programmingLanguage: string, description: string, developedBy: string, firstRelease: string, latestRelease: string): void{
   this.library.push({
    
    libraryName: libraryName,
    programmingLanguage: programmingLanguage,
    description: description,
    developedBy: developedBy,
    firstRelease: firstRelease,
    latestRelease: latestRelease,
   });
   }

   getLibrary(): LibraryList[]{
   return this.library;
   }
}

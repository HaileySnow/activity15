import { Injectable } from '@angular/core';
import LanguageList from '../../Folders/languagelist';

@Injectable({
  providedIn: 'root'
})
export class LanguageListService {
  private language: LanguageList[] = [];

  constructor() { }

  addLanguage(id: number, name: string, description: string, origin: string): void{
  this.language.push({
  id: id,
  name: name,
  description: description,
  origin: origin,
  })
  }
  getLanguage(): LanguageList[]{
    return this.language;
  }
}

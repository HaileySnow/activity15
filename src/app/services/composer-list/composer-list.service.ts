import { Injectable } from '@angular/core';
import ComposerList from '../../Folders/composerlist';
@Injectable({
  providedIn: 'root'
})
export class ComposerListService {
  private composer: ComposerList[] = [];

  constructor() { }
  
  addComposer(name: string, popularMusic: string, genre: string, country: string): void{
    this.composer.push({
    name: name,
    popularMusic: popularMusic,
    genre: genre,
    country: country,

    });
    }
    getComposer(): ComposerList[]{
      return this.composer;
  }
}
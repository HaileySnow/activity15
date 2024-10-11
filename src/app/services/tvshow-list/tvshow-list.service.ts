import { Injectable } from '@angular/core';
import TvShowList from '../../Folders/tvshowlist';

@Injectable({
  providedIn: 'root'
})
export class TvshowListService {
private tvshow: TvShowList[] = [];

  constructor() { }

  addTvShow(name: string, description: string, url: string, rating: number, category: string): void{
   this.tvshow.push({
   
    name: name,
    description: description,
    url: url,
    rating: rating,
    category: category,
   });
  }
  getTvShow(): TvShowList[]{
    return this.tvshow;
  }
}

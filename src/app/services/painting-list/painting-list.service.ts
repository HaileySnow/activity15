import { Injectable } from '@angular/core';
import PaintingList from '../../Folders/paintinglist';

@Injectable({
  providedIn: 'root'
})
export class PaintingListService {
private painting: PaintingList[] = [];

  constructor() { }

  addPainting(title: string, artist: string, year: number, price: number,): void{
    this.painting.push({
     
     title: title,
     artist: artist,
     year: year,
     price: price,

    });
  }
  getPainting(): PaintingList[]{
    return this.painting;
  }
}

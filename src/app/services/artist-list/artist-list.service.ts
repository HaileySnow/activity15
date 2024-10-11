import { Injectable } from '@angular/core';
import ArtistList from '../../Folders/artistlist';

@Injectable({
  providedIn: 'root'
})
export class ArtistListService {
  private artist: ArtistList[] = [];

  constructor() { }

  addArtist (name: string, field: string, genre: string, country: string): void{
      this.artist.push({
      name: name,
      field: field,
      genre: genre,
      country: country,

      });
  }
   getArtist(): ArtistList[]{
   return this.artist;

   }
}

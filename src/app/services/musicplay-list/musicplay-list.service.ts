import { Injectable } from '@angular/core';
import MusicPlayList from '../../Folders/musicplaylist';

@Injectable({
  providedIn: 'root'
})
export class MusicplayListService {
  private musicplaylist: MusicPlayList[] = [];

  constructor() { }

  addMusicPlayList(artist: string, song: string): void{
    this.musicplaylist.push({
    
      artist: artist,
      song: song,
    });
  }
  getMusicPlayList(): MusicPlayList[]{
    return this.musicplaylist;
  }
}

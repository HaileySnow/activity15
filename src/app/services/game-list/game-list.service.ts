import { Injectable } from '@angular/core';
import GameList from '../../Folders/gamelist';


@Injectable({
  providedIn: 'root'
})
export class GameListService {
private game: GameList[] = []; 

  constructor() { }

  addGame(id: number, name: string, description: string, platform: string): void{
  this.game.push({
  id: id,
  name: name,
  description: description,
  platform: platform,

  });
  }
  getGame(): GameList[]{
  return this.game;
  }
}

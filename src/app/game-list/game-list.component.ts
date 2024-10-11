import { Component } from '@angular/core';
import GameList from '../Folders/gamelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameListService } from '../services/game-list/game-list.service';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {

  gameList = [] as GameList [];
  constructor(private gameService:GameListService){
  this.gameList = this.gameService.getGame();
  }

	id: number = 0;
	name: string = '';
	description: string = '';
	platform: string = '';

	addGame(): void {
		this.gameService.addGame(
			this.id,
			this.name,
			this.description,
		    this.platform,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}

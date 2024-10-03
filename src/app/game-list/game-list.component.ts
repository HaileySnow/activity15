import { Component } from '@angular/core';
import GameList from '../Folders/gamelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {

  games: GameList[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	platform: string = '';

	addGame(): void {
		this.games.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			platform: this.platform,
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.platform = '';
	}
}

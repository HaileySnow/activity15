import { Component } from '@angular/core';
import MusicPlayList from '../Folders/musicplaylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-musicplay-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './musicplay-list.component.html',
  styleUrl: './musicplay-list.component.css'
})
export class MusicplayListComponent {

  musicPlayList: MusicPlayList[] = [];
	
  artist: string = '';
	song: string = '';

	addMusicPlayList(): void {
		this.musicPlayList.push({
			artist: this.artist,
			song: this.song,
		});

		this.artist = '';
		this.song = '';
	}

}

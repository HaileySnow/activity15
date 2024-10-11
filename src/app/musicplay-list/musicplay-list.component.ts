import { Component } from '@angular/core';
import MusicPlayList from '../Folders/musicplaylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicplayListService } from '../services/musicplay-list/musicplay-list.service';

@Component({
  selector: 'app-musicplay-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './musicplay-list.component.html',
  styleUrl: './musicplay-list.component.css'
})
export class MusicplayListComponent {

  musicPlayList = [] as MusicPlayList [];
  constructor(private musicplaylistService:MusicplayListService){
  this.musicPlayList = musicplaylistService.getMusicPlayList();
  }
	
  artist: string = '';
	song: string = '';

	addMusicPlayList(): void {
		this.musicplaylistService.addMusicPlayList(
		this.artist,
		this.song,
		);

		this.artist = '';
		this.song = '';
	}

}

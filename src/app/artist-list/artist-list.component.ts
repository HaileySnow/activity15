import { Component } from '@angular/core';
import ArtistList from '../Folders/artistlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {

  artistList: ArtistList[] = [];

	name: string = '';
	field: string = '';
	genre: string = '';
	country: string = '';

	addArtist() {
		this.artistList.push({
			name: this.name,
			field: this.field,
			genre: this.genre,
			country: this.country,
		});
		this.name = '';
		this.field = '';
		this.genre = '';
		this.country = '';
	}

}

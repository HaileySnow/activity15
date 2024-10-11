import { Component } from '@angular/core';
import ArtistList from '../Folders/artistlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtistListService } from '../services/artist-list/artist-list.service';

@Component({
  selector: 'app-artist-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './artist-list.component.html',
  styleUrl: './artist-list.component.css'
})
export class ArtistListComponent {

   artistList = [] as ArtistList [];
   constructor(private artistService: ArtistListService){
   this.artistList = this.artistService.getArtist();
   }

	name: string = '';
	field: string = '';
	genre: string = '';
	country: string = '';

	addArtist(): void {
		this.artistService.addArtist(
			this.name,
			this.field,
			this.genre,
			this.country,
		);
		this.name = '';
		this.field = '';
		this.genre = '';
		this.country = '';
	}

}

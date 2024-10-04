import { Component } from '@angular/core';
import PodcastList from '../Folders/podcastlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {

  podcasts: PodcastList[] = [];

	name: string = '';
	host: string = '';
	genre: string = '';
	episodeNumber: number = 0;

	addPodcast() {
		this.podcasts.push({
			name: this.name,
			host: this.host,
			genre: this.genre,
			episodeNumber: this.episodeNumber,
		});

		this.name = '';
		this.host = '';
		this.genre = '';
		this.episodeNumber = 0;
	}

}

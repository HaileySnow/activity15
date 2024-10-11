import { Component } from '@angular/core';
import PodcastList from '../Folders/podcastlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PodcastListService } from '../services/podcast-list/podcast-list.service';

@Component({
  selector: 'app-podcast-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './podcast-list.component.html',
  styleUrl: './podcast-list.component.css'
})
export class PodcastListComponent {

  podcastList = [] as PodcastList [];
  constructor(private podcastService:PodcastListService){
	this.podcastList = this.podcastService.getPodcast();
  }

	name: string = '';
	host: string = '';
	genre: string = '';
	episodeNumber: number = 0;

	addPodcast() {
		this.podcastService.addPodcast(
		this.name,
		this.host,
		this.genre,
		this.episodeNumber,
		);

		this.name = '';
		this.host = '';
		this.genre = '';
		this.episodeNumber = 0;
	}

}

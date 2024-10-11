import { Component } from '@angular/core';
import TvShowList from '../Folders/tvshowlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TvshowListService } from '../services/tvshow-list/tvshow-list.service';

@Component({
  selector: 'app-tvshow-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TvshowListComponent {

  tvShowList = [] as TvShowList [];
  constructor(private tvshowService:TvshowListService){
  this.tvShowList = this.tvshowService.getTvShow();
  }
	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addTvShow() {
		this.tvshowService.addTvShow(
		this.name,
		this.description,
		this.url,
		this.rating,
		this.category,
		);
		this.name = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}

}

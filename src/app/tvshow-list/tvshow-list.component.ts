import { Component } from '@angular/core';
import TvShowList from '../Folders/tvshowlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tvshow-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tvshow-list.component.html',
  styleUrl: './tvshow-list.component.css'
})
export class TvshowListComponent {

  tvShowList: TvShowList[] = [];
	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addTvShow() {
		this.tvShowList.push({
			name: this.name,
			description: this.description,
			url: this.url,
			rating: this.rating,
			category: this.category,
		});
		this.name = '';
		this.description = '';
		this.url = '';
		this.rating = 0;
		this.category = '';
	}

}

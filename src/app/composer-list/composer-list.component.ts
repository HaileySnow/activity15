import { Component } from '@angular/core';
import ComposerList from '../Folders/composerlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {

  composers: ComposerList[] = [];

	name: string = '';
	popularMusic: string = '';
	genre: string = '';
	country: string = '';

	addComposer() {
		this.composers.push({
			name: this.name,
			popularMusic: this.popularMusic,
			genre: this.genre,
			country: this.country,
		});

		this.name = '';
		this.popularMusic = '';
		this.genre = '';
		this.country = '';
	}

}

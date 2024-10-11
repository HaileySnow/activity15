import { Component } from '@angular/core';
import ComposerList from '../Folders/composerlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComposerListService } from '../services/composer-list/composer-list.service';

@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent {

    composerList = [] as ComposerList [];
	constructor(private composerService:ComposerListService){
	this.composerList = this.composerService.getComposer();
	}

	name: string = '';
	popularMusic: string = '';
	genre: string = '';
	country: string = '';

	addComposer() {
		this.composerService.addComposer(
		this.name,
		this.popularMusic,
		this.genre,
		this.country,
		);

		this.name = '';
		this.popularMusic = '';
		this.genre = '';
		this.country = '';
	}

}

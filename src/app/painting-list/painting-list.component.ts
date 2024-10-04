import { Component } from '@angular/core';
import PaintingList from '../Folders/paintinglist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-painting-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './painting-list.component.html',
  styleUrl: './painting-list.component.css'
})
export class PaintingListComponent {

  paintingList: PaintingList[] = [];

	title: string = '';
	artist: string = '';
	year: number = 0;
	price: number = 0;

	addPainting() {
		this.paintingList.push({
			title: this.title,
			artist: this.artist,
			year: this.year,
			price: this.price,
		});
		this.title = '';
		this.artist = '';
		this.year = 0;
		this.price = 0;
	}
}

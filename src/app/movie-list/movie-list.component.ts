import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import MovieList from '../Folders/movielist';
import { MovieListService } from '../services/movie-list/movie-list.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {

  movieList = [] as MovieList [];
  constructor(private movieService:MovieListService){
  this.movieList = this.movieService.getMovie();
  }

	id: string = '';
	name: string = '';
	director: string = '';
	year: number = 0;
	rating: number = 0;

	addMovie(): void {
		this.movieService.addMovie(
		this.id,
		this.name,
		this.director,
		this.year,
		this.rating,
		);

		this.id = '';
		this.name = '';
		this.director = '';
		this.year = 0;
		this.rating = 0;
	}
}

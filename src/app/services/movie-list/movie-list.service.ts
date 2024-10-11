import { Injectable } from '@angular/core';
import MovieList from '../../Folders/movielist';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
private movie: MovieList[] = [];

  constructor() { }

  addMovie(id: string, name: string, director: string, year: number, rating: number): void{
    this.movie.push({
    id: id,
    name: name,
    director: director,
    year: year,
    rating: rating,
    });
  }
  getMovie(): MovieList[]{
    return this.movie;
  }
}

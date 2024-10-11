import { Injectable } from '@angular/core';
import PodcastList from '../../Folders/podcastlist';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PodcastListService {
  private podcast: PodcastList[] = [];

  constructor() { }
  
  addPodcast(name: string, host: string, genre: string, episodeNumber: number): void{
    this.podcast.push({
    name: name,
    host: host,
    genre: genre,
    episodeNumber: episodeNumber,
    });
  } 
  getPodcast(): PodcastList[]{
    return this.podcast;
  }
}

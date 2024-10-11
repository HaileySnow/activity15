import { Injectable } from '@angular/core';
import VideoList from '../../Folders/videolist';

@Injectable({
  providedIn: 'root'
})
export class VideoListService {
private video: VideoList[] = [];

  constructor() { }

  addVideo(name: string, description: string, url: string, rating: number, category: string): void{
    this.video.push({
      name: name,
      description: description,
      url: url,
      rating: rating,
      category: category,

    });
  }
  getVideo(): VideoList[]{
    return this.video
  }
}
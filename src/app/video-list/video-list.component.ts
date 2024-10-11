import { Component } from '@angular/core';
import VideoList from '../Folders/videolist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoListService } from '../services/video-list/video-list.service';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {

  videoList = [] as VideoList [];
  constructor(private videoService:VideoListService){
  this.videoList = this.videoService.getVideo();
  }
	name: string = '';
	description: string = '';
	url: string = '';
	rating: number = 0;
	category: string = '';

	addVideo() {
		this.videoService.addVideo(
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

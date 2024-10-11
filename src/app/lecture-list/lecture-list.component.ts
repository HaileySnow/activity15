import { Component } from '@angular/core';
import InventoryList from '../Folders/inventorylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LectureList from '../Folders/lecturelist';
import { LectureListService } from '../services/lecture-list/lecture-list.service';

@Component({
  selector: 'app-lecture-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {

  lectureList = [] as LectureList [];
  constructor(private lectureService:LectureListService){
  this.lectureList = this.lectureService.getlecture();
  }

	name: string = '';
	duration: number = 0;
	instructor: string = '';

	addLecture() {
		this.lectureService.addLecture(
	
	    this.name,
		this.duration,
		this.instructor,
		);
		
		this.name = '';
		this.duration = 0;
		this.instructor = '';
	}

}

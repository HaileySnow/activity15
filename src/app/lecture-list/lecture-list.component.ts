import { Component } from '@angular/core';
import InventoryList from '../Folders/inventorylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import LectureList from '../Folders/lecturelist';

@Component({
  selector: 'app-lecture-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './lecture-list.component.html',
  styleUrl: './lecture-list.component.css'
})
export class LectureListComponent {

  lectureList: LectureList[] = [];

	name: string = '';
	duration: number = 0;
	instructor: string = '';

	addLecture() {
		this.lectureList.push({
	
			name: this.name,
			duration: this.duration,
			instructor: this.instructor,
		});
		
		this.name = '';
		this.duration = 0;
		this.instructor = '';
	}

}

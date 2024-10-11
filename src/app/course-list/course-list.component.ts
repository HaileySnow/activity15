import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseList } from '../Folders/courselist';
import { CourseListService } from '../services/course-list/course-list.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courseList = [] as CourseList [];
  constructor(private courseService: CourseListService){
  this.courseList = this.courseService.getCourse();
  }

	id: number = 0;
	name: string = '';
	teacher: string = '';
	credit: number = 0;

	addCourse(): void {
		this.courseService.addCourse(
	    this.id,
		this.name,
		this.teacher,
		this.credit,
		);

		this.id = 0;
		this.name = '';
		this.teacher = '';
		this.credit = 0;
	}

}

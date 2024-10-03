import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseList } from '../Folders/courselist';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courses: CourseList[] = [];

	id: string = '';
	name: string = '';
	teacher: string = '';
	credit: number = 0;

	addCourse(): void {
		this.courses.push({
			id: this.id,
			name: this.name,
			teacher: this.teacher,
			credit: this.credit,
		});

		this.id = '';
		this.name = '';
		this.teacher = '';
		this.credit = 0;
	}

}

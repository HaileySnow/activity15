import { Component } from '@angular/core';
import ClassroomList from '../Folders/classroomlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-classroom-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {

  classroomList: ClassroomList[] = [];

	id: number = 0;
	section: string = '';
	teacher: string = '';
	studentCount: number = 0;

	addNewClassroom() {
		this.classroomList.push({
			id: this.id,
			section: this.section,
			teacher: this.teacher,
			studentCount: this.studentCount,
		});
		this.id = 0;
		this.section = '';
		this.teacher = '';
		this.studentCount = 0;
	}

}

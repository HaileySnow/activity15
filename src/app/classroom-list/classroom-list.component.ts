import { Component } from '@angular/core';
import ClassroomList from '../Folders/classroomlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassroomListService } from '../services/classroom-list/classroom-list.service';

@Component({
  selector: 'app-classroom-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './classroom-list.component.html',
  styleUrl: './classroom-list.component.css'
})
export class ClassroomListComponent {

  classroomList = [] as ClassroomList [];
  constructor(private classroomService:ClassroomListService){
  this.classroomList = this.classroomService.getClassroom();
  }


	id: number = 0;
	section: string = '';
	teacher: string = '';
	studentCount: number = 0;

	addNewClassroom() {
		this.classroomService.addClassroom(
	    this.id,
	    this.section,
		this.teacher,
		this.studentCount,
		);
		this.id = 0;
		this.section = '';
		this.teacher = '';
		this.studentCount = 0;
	}

}

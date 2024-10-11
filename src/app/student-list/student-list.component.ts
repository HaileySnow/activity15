import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import StudentList from "../Folders/studentlist"
import { StudentListService } from '../services/student-list/student-list.service';

@Component({
	selector: 'app-student-list',
	standalone: true,
	imports: [NgForOf, FormsModule],
	templateUrl: './student-list.component.html',
})
export class StudentListComponent {
	studentList = [] as StudentList [];
	constructor(private studentService:StudentListService){
	this.studentList = this.studentService.getStudent();
	}
	id: string = '';
	name: string = '';
	grade: number = 0;
	age: number = 0;

	addStudent(): void {
		this.studentService.addStudent(
			this.id,
			this.name,
			this.grade,
			this.age,
		);

		this.age = 0;
		this.grade = 0;
		this.id = '';
		this.name = '';
	}
}

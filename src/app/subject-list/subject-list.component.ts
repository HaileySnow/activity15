import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Subject from '../Folders/subjectlist';
import { SubjectListService } from '../services/subject-list/subject-list.service';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subject = [] as Subject [];
  constructor(private subjectService:SubjectListService){
  this.subject = this.subjectService.getSubject();
  }

	id: number = 0;
	subs: string = '';
	teacher: string = '';
  

	addSubject(): void {
		this.subjectService.addSubject(
			this.id,
			this.subs,
			this.teacher,
		);

		this.id = 0;
		this.subs = '';
		this.teacher = '';
	}

}

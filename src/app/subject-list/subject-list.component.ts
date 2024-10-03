import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Subject from '../Folders/subjectlist';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjects: Subject[] = [];

	id: string = '';
	subs: string = '';
	teacher: string = '';
  

	addSubject(): void {
		this.subjects.push({
			id: Number(this.id),
			subs: this.subs,
			teacher: this.teacher,
		});

		this.id = '';
		this.subs = '';
		this.teacher = '';
	}

}

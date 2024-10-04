import { Component } from '@angular/core';
import PresentationList from '../Folders/presentationlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-presentation-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {

  presentations: PresentationList[] = [];

	topic: string = '';
	presenter: string = '';
	date: string = '';
	time: string = '';

	addPresentation() {
		this.presentations.push({
			topic: this.topic,
			presenter: this.presenter,
			date: this.date,
			time: this.time,
		});

		this.topic = '';
		this.presenter = '';
		this.date = '';
		this.time = '';
	}

}

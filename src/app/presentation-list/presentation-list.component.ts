import { Component } from '@angular/core';
import PresentationList from '../Folders/presentationlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PresentationListService } from '../services/presentation-list/presentation-list.service';

@Component({
  selector: 'app-presentation-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './presentation-list.component.html',
  styleUrl: './presentation-list.component.css'
})
export class PresentationListComponent {

  presentationList = [] as PresentationList [];
  constructor(private presentationService:PresentationListService){
  this.presentationList = this.presentationService.getPresentation();
  }

	topic: string = '';
	presenter: string = '';
	date: string = '';
	time: string = '';

	addPresentation() {
		this.presentationService.addPresentation(
		this.topic,
		this.presenter,
		this.date,
		this.time,
		);

		this.topic = '';
		this.presenter = '';
		this.date = '';
		this.time = '';
	}

}

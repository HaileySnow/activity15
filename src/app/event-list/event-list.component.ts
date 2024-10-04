import { Component } from '@angular/core';
import EventList from '../Folders/eventlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  events: EventList[] = [];

	eventDate: string = '';
	eventName: string = '';
	eventLocation: string = '';
	eventPrice: number = 0;
	eventDuration: string = '';

	addEvent() {
		this.events.push({
			eventDate: this.eventDate,
			eventName: this.eventName,
			eventLocation: this.eventLocation,
			eventPrice: this.eventPrice,
			eventDuration: this.eventDuration,
		});

		this.eventDate = '';
		this.eventName = '';
		this.eventLocation = '';
		this.eventPrice = 0;
		this.eventDuration = '';
	}

}

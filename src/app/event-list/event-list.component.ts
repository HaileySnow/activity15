import { Component } from '@angular/core';
import EventList from '../Folders/eventlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventListService } from '../services/event-list/event-list.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent {

  eventList = [] as EventList [];
  constructor(private eventService: EventListService){
  this.eventList = this.eventService.getEvent();
  }

	eventDate: string = '';
	eventName: string = '';
	eventLocation: string = '';
	eventPrice: number = 0;
	eventDuration: string = '';

	addEvent() {
		this.eventService.addEvent(
			this.eventDate,
			this.eventName,
			this.eventLocation,
			this.eventPrice,
			this.eventDuration,
		);

		this.eventDate = '';
		this.eventName = '';
		this.eventLocation = '';
		this.eventPrice = 0;
		this.eventDuration = '';
	}

}

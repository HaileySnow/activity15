import { Injectable } from '@angular/core';
import EventList from '../../Folders/eventlist';
@Injectable({
  providedIn: 'root'
})
export class EventListService {
  private event: EventList[] = [];

  constructor() { }
  
  addEvent(eventDate: string, eventName: string, eventLocation: string, eventPrice: number, eventDuration: string): void{
    this.event.push({

      eventDate: eventDate,
      eventName: eventName,
      eventLocation: eventLocation,
      eventPrice: eventPrice,
      eventDuration: eventDuration,
    })
  }
  getEvent(): EventList[]{
  return this.event;
  }
}

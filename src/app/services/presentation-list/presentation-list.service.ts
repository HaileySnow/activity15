import { Injectable } from '@angular/core';
import PresentationList from '../../Folders/presentationlist';

@Injectable({
  providedIn: 'root'
})
export class PresentationListService {
private presentation: PresentationList[] = [];

  constructor() { }

  addPresentation(topic: string, presenter: string, date: string, time: string): void{
   this.presentation.push({
   
    topic: topic,
    presenter: presenter,
    date: date,
    time: time,
   });
  }
  getPresentation(): PresentationList[]{
    return this.presentation;
  }
}

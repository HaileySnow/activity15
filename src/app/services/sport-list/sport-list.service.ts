import { Injectable } from '@angular/core';
import Sports from '../../Folders/sportlist';
import { SportListComponent } from '../../sport-list/sport-list.component';

@Injectable({
  providedIn: 'root'
})
export class SportListService {
private sport: Sports [] = [];

  constructor() { }

  addSport(id: number, name: string, team: string): void{
    this.sport.push({
    
      id: id,
      name: name,
      team: team,
    });
  }
  getSport(): Sports[]{
    return this.sport;
  }
}

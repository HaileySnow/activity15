import { Component } from '@angular/core';
import Sports from '../Folders/sportlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SportListService } from '../services/sport-list/sport-list.service';

@Component({
  selector: 'app-sport-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent {

  sports = [] as Sports [];
  constructor(private sportService:SportListService){
	this.sports = this.sportService.getSport();
  }

	id: number = 0;
	name: string = '';
	team: string = '';

	addSport(): void {
		this.sportService.addSport(
			this.id,
			this.name,
			this.team,
		);

		this.id = 0;
		this.name = '';
		this.team = '';
	}

}

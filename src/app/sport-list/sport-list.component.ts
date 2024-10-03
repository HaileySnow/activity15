import { Component } from '@angular/core';
import Sports from '../Folders/sportlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sport-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './sport-list.component.html',
  styleUrl: './sport-list.component.css'
})
export class SportListComponent {

  sports: Sports[] = [];

	id: string = '';
	name: string = '';
	team: string = '';

	addSport(): void {
		this.sports.push({
			id: Number(this.id),
			name: this.name,
			team: this.team,
		});

		this.id = '';
		this.name = '';
		this.team = '';
	}

}

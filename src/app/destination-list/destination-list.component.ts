import { Component } from '@angular/core';
import DestinationList from '../Folders/destinationlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {

  destinations: DestinationList[] = [];

	name: string = '';
	location: string = '';
  time: string = '';

	addDestination() {
		this.destinations.push({
			name: this.name,
			location: this.location,
      time: this.time,
		});
		this.name = '';
		this.location = '';
    this.time = '';
  }

}

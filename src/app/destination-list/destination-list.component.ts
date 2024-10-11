import { Component } from '@angular/core';
import DestinationList from '../Folders/destinationlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DestinationListService } from '../services/destination-list/destination-list.service';

@Component({
  selector: 'app-destination-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent {
   destinationList = [] as DestinationList [];
   constructor(private destinationService:DestinationListService){
   this.destinationList = this.destinationService.getDestination();
   }

	name: string = '';
	location: string = '';
  time: string = '';

	addDestination() {
		this.destinationService.addDestination(
			this.name,
			this.location,
      this.time,
		);
		this.name = '';
		this.location = '';
    this.time = '';
  }

}

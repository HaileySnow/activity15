import { Component } from '@angular/core';
import TourList from '../Folders/tourlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent {

  tours: TourList[] = [];

	tourDate: string = '';
	tourName: string = '';
	tourLocation: string = '';
	tourPrice: number = 0;
	tourDuration: string = '';

	addTour() {
		this.tours.push({
			tourDate: this.tourDate,
			tourName: this.tourName,
			tourLocation: this.tourLocation,
			tourPrice: this.tourPrice,
			tourDuration: this.tourDuration,
		});

		this.tourDate = '';
		this.tourName = '';
		this.tourLocation = '';
		this.tourPrice = 0;
		this.tourDuration = '';
	}
}

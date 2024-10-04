import { Component } from '@angular/core';
import StationeryList from '../Folders/stationarylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stationary-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './stationary-list.component.html',
  styleUrl: './stationary-list.component.css'
})
export class StationaryListComponent {
addLecture() {
throw new Error('Method not implemented.');
}

  stationeryList: StationeryList[] = [];

	name: string = '';
	quantity: number = 0;
	price: number = 0;
lectureList: any;
duration: any;
instructor: any;

	addNewStationery() {
		this.stationeryList.push({
			
			name: this.name,
			quantity: this.quantity,
			price: this.price,
		});
		
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}

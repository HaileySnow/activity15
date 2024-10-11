import { Component } from '@angular/core';
import StationeryList from '../Folders/stationarylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StationaryListService } from '../services/stationary-list/stationary-list.service';

@Component({
  selector: 'app-stationary-list',
  standalone: true,
  imports: [NgFor,FormsModule],
  templateUrl: './stationary-list.component.html',
  styleUrl: './stationary-list.component.css'
})
export class StationaryListComponent {


  stationeryList = [] as StationeryList [];
  constructor(private stationeryService:StationaryListService){
  this.stationeryList = this.stationeryService.getStationery();
  }

	name: string = '';
	quantity: number = 0;
	price: number = 0;

	addNewStationery() {
		this.stationeryService.addStationery(
			
		this.name,
		this.quantity,
	    this.price,
		);
		
		this.name = '';
		this.quantity = 0;
		this.price = 0;
	}
}

import { Component } from '@angular/core';
import MobileAppList from '../Folders/mobileapplist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealplanListService } from '../services/mealplan-list/mealplan-list.service';
import { MobileappListService } from '../services/mobileapp-list/mobileapp-list.service';

@Component({
  selector: 'app-mobileapp-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './mobileapp-list.component.html',
  styleUrl: './mobileapp-list.component.css'
})
export class MobileappListComponent {

  mobileAppList = [] as MobileAppList [];
  constructor(private mobileappService:MobileappListService){
  this.mobileAppList = this.mobileappService.getMobileApp();
  }

	name: string = '';
	description: string = '';
	price: number = 0;
	rating: number = 0;

	addMobileApp() {
		this.mobileappService.addMobileApp(
	    this.name,
		this.description,
		this.price,
		this.rating,
		);

		this.name = '';
		this.description = '';
		this.price = 0;
		this.rating = 0;
	}

}

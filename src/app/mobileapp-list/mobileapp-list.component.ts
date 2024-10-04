import { Component } from '@angular/core';
import MobileAppList from '../Folders/mobileapplist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobileapp-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './mobileapp-list.component.html',
  styleUrl: './mobileapp-list.component.css'
})
export class MobileappListComponent {

  mobileApps: MobileAppList[] = [];

	name: string = '';
	description: string = '';
	price: number = 0;
	rating: number = 0;

	addMobileApp() {
		this.mobileApps.push({
			name: this.name,
			description: this.description,
			price: this.price,
			rating: this.rating,
		});

		this.name = '';
		this.description = '';
		this.price = 0;
		this.rating = 0;
	}

}

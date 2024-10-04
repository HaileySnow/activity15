import { Component } from '@angular/core';
import MealPlanList from '../Folders/mealplanlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mealplan-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './mealplan-list.component.html',
  styleUrl: './mealplan-list.component.css'
})
export class MealplanListComponent {

  meals: MealPlanList[] = [];

	name: string = '';
	breakfast: string = '';
	lunch: string = '';
	dinner: string = '';
	snack: string = '';
	drink: string = '';

	addMealPlan() {
		this.meals.push({
			name: this.name,
			breakfast: this.breakfast,
			lunch: this.lunch,
			dinner: this.dinner,
			snack: this.snack,
			drink: this.drink,
		});

		this.name = '';
		this.breakfast = '';
		this.lunch = '';
		this.dinner = '';
		this.snack = '';
		this.drink = '';
	}

}

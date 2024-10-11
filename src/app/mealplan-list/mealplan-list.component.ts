import { Component } from '@angular/core';
import MealPlanList from '../Folders/mealplanlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealplanListService } from '../services/mealplan-list/mealplan-list.service';

@Component({
  selector: 'app-mealplan-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './mealplan-list.component.html',
  styleUrl: './mealplan-list.component.css'
})
export class MealplanListComponent {

  mealplanList = [] as MealPlanList [];
  constructor(private mealplanService:MealplanListService){
  this.mealplanList = this.mealplanService.getMealPlan();
  }

	name: string = '';
	breakfast: string = '';
	lunch: string = '';
	dinner: string = '';
	snack: string = '';
	drink: string = '';

	addMealPlan() {
		this.mealplanService.addMealPlan(
		this.name,
		this.breakfast,
		this.lunch,
		this.dinner,
		this.snack,
		this.drink,
		);

		this.name = '';
		this.breakfast = '';
		this.lunch = '';
		this.dinner = '';
		this.snack = '';
		this.drink = '';
	}

}

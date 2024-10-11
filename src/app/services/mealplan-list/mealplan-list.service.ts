import { Injectable } from '@angular/core';
import MealPlanList from '../../Folders/mealplanlist';

@Injectable({
  providedIn: 'root'
})
export class MealplanListService {
private mealplan: MealPlanList[] = [];

  constructor() { }

  addMealPlan(name: string, breakfast: string, lunch: string, dinner: string, snack: string, drink: string): void{
    this.mealplan.push({
    name: name,
    breakfast: breakfast,
    lunch: lunch,
    dinner: dinner,
    snack: snack,
    drink: drink,

    });
  }
  getMealPlan(): MealPlanList[]{
  return this.mealplan;
  }
}

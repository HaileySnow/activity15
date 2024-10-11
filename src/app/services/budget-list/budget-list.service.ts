import { Injectable } from '@angular/core';
import BudgetList from '../../Folders/bugdetlist';
@Injectable({
  providedIn: 'root'
})
export class BudgetListService {
  private budget: BudgetList[] = [];

  constructor() { }

  addBudget(project: string, budget: number, status: string, startDate: string, endDate: string): void{
  this.budget.push({
  project: project,
  budget: budget,
  status: status,
  startDate: startDate,
  endDate: endDate,
  });
  }
  getBudget(): BudgetList[]{
    return this.budget;
}
}
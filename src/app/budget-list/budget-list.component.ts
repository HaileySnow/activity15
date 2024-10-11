import { Component } from '@angular/core';
import BudgetList from '../Folders/bugdetlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetListService } from '../services/budget-list/budget-list.service';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {

  budgetList = [] as BudgetList [];
  constructor(private budgetService:BudgetListService){
  this.budgetList = this.budgetService.getBudget();

  }

	project: string = '';
	budget: number = 0;
	status: string = '';
	startDate: string = '';
	endDate: string = '';

	addBudget() {
		this.budgetService.addBudget(
			this.project,
			this.budget,
			this.status,
			this.startDate,
			this.endDate,
		);

		this.project = '';
		this.budget = 0;
		this.status = '';
		this.startDate = '';
		this.endDate = '';
	}

}

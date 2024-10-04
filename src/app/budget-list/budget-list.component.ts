import { Component } from '@angular/core';
import BudgetList from '../Folders/bugdetlist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css'
})
export class BudgetListComponent {

  budgets: BudgetList[] = [];

	project: string = '';
	budget: number = 0;
	status: string = '';
	startDate: string = '';
	endDate: string = '';

	addBudget() {
		this.budgets.push({
			project: this.project,
			budget: this.budget,
			status: this.status,
			startDate: this.startDate,
			endDate: this.endDate,
		});

		this.project = '';
		this.budget = 0;
		this.status = '';
		this.startDate = '';
		this.endDate = '';
	}

}

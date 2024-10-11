import { Component } from '@angular/core';
import { EmployeeList } from '../Folders/employeelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeListService } from '../services/employee-list/employee-list.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
  employeeList = [] as EmployeeList [];
  constructor(private employeeService:EmployeeListService){
  this.employeeList = this.employeeService.getEmployee();
  }

	id: number = 0;
	name: string = '';
	position: string = '';
	age: number = 0;

	addEmployee(): void {
		this.employeeService.addEmployee(
			this.id,
			this.name,
			this.position,
			this.age,
		);

		this.age = 0;
		this.position = '';
		this.id = 0;
		this.name = '';
	}
}

import { Injectable } from '@angular/core';
import { EmployeeList } from '../../Folders/employeelist';
@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {
  private employee: EmployeeList[] = [];

  constructor() { }

  addEmployee(id: number, name: string, position: string, age: number): void{
   this.employee.push({
   id: id,
   name: name,
   position: position,
   age: age, 

   });
  }
  getEmployee(): EmployeeList[]{
  return this.employee;
  }
  }


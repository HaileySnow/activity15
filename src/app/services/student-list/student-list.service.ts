import { Injectable } from '@angular/core';
import StudentList from '../../Folders/studentlist';

@Injectable({
  providedIn: 'root'
})
export class StudentListService {
private student: StudentList[] = [];

  constructor() { }

  addStudent(id: string, name: string, grade: number, age: number): void{
    this.student.push({
    
      id: id,
      name: name,
      grade: grade,
      age: age,
    });
  }
  getStudent(): StudentList[]{
    return this.student;
  }
}

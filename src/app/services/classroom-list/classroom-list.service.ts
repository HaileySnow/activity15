import { Injectable } from '@angular/core';
import ClassroomList from '../../Folders/classroomlist';
@Injectable({
  providedIn: 'root'
})
export class ClassroomListService {
  private classroom: ClassroomList[] = [];

  constructor() { }

  addClassroom(id: number, section: string, teacher: string, studentCount: number): void{
    this.classroom.push({
     id: id,
     section: section,
     teacher: teacher,
     studentCount: studentCount,

    });
  }
  getClassroom(): ClassroomList[]{
    return this.classroom;
  }

}

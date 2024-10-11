import { Injectable } from '@angular/core';
import { CourseList } from '../../Folders/courselist';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
private course: CourseList[] = [];
  
  constructor() { }

  addCourse(id: number, name: string, teacher: string, credit: number){
    this.course.push({
     id: id,
     name: name,
     teacher: teacher,
     credit: credit,

    });
  }
  getCourse(): CourseList[]{
    return this.course;
  }

}

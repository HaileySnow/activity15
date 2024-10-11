import { Injectable } from '@angular/core';
import Subject from '../../Folders/subjectlist';

@Injectable({
  providedIn: 'root'
})
export class SubjectListService {
private subject: Subject [] = []; 

  constructor() { }

  addSubject(id: number, subs: string, teacher: string): void{
    this.subject.push({
     
      id: id,
      subs: subs,
      teacher: teacher,
    });
  }
  getSubject(): Subject[]{
    return this.subject;
  }
}

import { Injectable } from '@angular/core';
import LectureList from '../../Folders/lecturelist';

@Injectable({
  providedIn: 'root'
})
export class LectureListService {
private lecture: LectureList [] = [];

  constructor() { }

  addLecture(name: string, duration: number, instructor: string): void{
    this.lecture.push({
    name: name,
    duration: duration,
    instructor: instructor,

    });
  }
  getlecture(): LectureList[]{
  return this.lecture;
  }
}

import { Injectable } from '@angular/core';
import ExerciseList from '../../Folders/exerciselist';

@Injectable({
  providedIn: 'root'
})
export class ExerciseListService {
private exercise: ExerciseList[] = [];


  constructor() { }

  addExercise(name: string, sets: number, reps: number, weight: number): void{
    this.exercise.push({
    name: name,
    sets: sets,
    reps: reps,
    weight: weight,
    });
  }
  getExercise(): ExerciseList[]{
    return this.exercise;
  }
}

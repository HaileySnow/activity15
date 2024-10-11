import { Component } from '@angular/core';
import ExerciseList from '../Folders/exerciselist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExerciseListService } from '../services/exercise-list/exercise-list.service';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {

  exerciseList = [] as ExerciseList [];
  constructor(private exerciseService:ExerciseListService){
  this.exerciseList = this.exerciseService.getExercise();
  }
	name: string = '';
	sets: number = 0;
	reps: number = 0;
	weight: number = 0;

	addExercise() {
		this.exerciseService.addExercise(
			this.name,
			this.sets,
			this.reps,
			this.weight,
		);

		this.name = '';
		this.sets = 0;
		this.reps = 0;
		this.weight = 0;
	}

}

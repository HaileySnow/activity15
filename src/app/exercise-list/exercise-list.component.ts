import { Component } from '@angular/core';
import ExerciseList from '../Folders/exerciselist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.css'
})
export class ExerciseListComponent {

  exercises: ExerciseList[] = [];
	name: string = '';
	sets: number = 0;
	reps: number = 0;
	weight: number = 0;

	addExercise() {
		this.exercises.push({
			name: this.name,
			sets: this.sets,
			reps: this.reps,
			weight: this.weight,
		});

		this.name = '';
		this.sets = 0;
		this.reps = 0;
		this.weight = 0;
	}

}

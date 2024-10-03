import { Component } from '@angular/core';
import Animals from '../Folders/animalslist';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.css'
})
export class AnimalsListComponent {

  animals: Animals[] = [];

	id: string = '';
	name: string = '';
	origin: string = '';

	addAnimal(): void {
		this.animals.push({
			id: Number(this.id),
			name: this.name,
			origin: this.origin,
		});

		this.id = '';
		this.name = '';
		this.origin = '';
	}
}

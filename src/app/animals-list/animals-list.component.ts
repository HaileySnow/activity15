import { Component } from '@angular/core';
import Animals from '../Folders/animalslist';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { AnimalsListService } from '../services/animals-list/animals-list.service';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.css'
})
export class AnimalsListComponent {

  animalsList = [] as Animals[];
animal: any;
  constructor(private animalsService: AnimalsListService){
  this.animalsList = this.animalsService.getAnimals();
  }

	id: number = 0;
	name: string = '';
	origin: string = '';

	addAnimal(): void {
		this.animalsService.addAnimals(
			this.id,
			this.name,
			this.origin,
		);

		this.id = 0;
		this.name = '';
		this.origin = '';
	}
}

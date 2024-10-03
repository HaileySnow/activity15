import { Component } from '@angular/core';
import LanguageList from '../Folders/languagelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-language-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {

  languages: LanguageList[] = [];

	id: string = '';
	name: string = '';
	description: string = '';
	origin: string = '';

	addLanguage(): void {
		this.languages.push({
			id: Number(this.id),
			name: this.name,
			description: this.description,
			origin: this.origin,
		});

		this.id = '';
		this.name = '';
		this.description = '';
		this.origin = '';
	}
}

import { Component } from '@angular/core';
import LanguageList from '../Folders/languagelist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageListService } from '../services/language-list/language-list.service';

@Component({
  selector: 'app-language-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './language-list.component.html',
  styleUrl: './language-list.component.css'
})
export class LanguageListComponent {

  languageList = [] as LanguageList [];
  constructor(private languageService:LanguageListService){
  this.languageList = this.languageService.getLanguage();
  }

	id: number = 0;
	name: string = '';
	description: string = '';
	origin: string = '';

	addLanguage(): void {
		this.languageService.addLanguage(
			this.id,
			this.name,
			this.description,
			this.origin,
		);

		this.id = 0;
		this.name = '';
		this.description = '';
		this.origin = '';
	}
}

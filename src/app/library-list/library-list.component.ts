import { Component } from '@angular/core';
import LibraryList from '../Folders/librarylist';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LibraryListService } from '../services/library-list/library-list.service';

@Component({
  selector: 'app-library-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './library-list.component.html',
  styleUrl: './library-list.component.css'
})
export class LibraryListComponent {

  libraryList = [] as LibraryList [];
  constructor(private libraryService:LibraryListService){
  this.libraryList = this.libraryService.getLibrary();
  }

	libraryName: string = '';
	programmingLanguage: string = '';
	description: string = '';
	developedBy: string = '';
	firstRelease: string = '';
	latestRelease: string = '';

	addLibrary() {
		this.libraryService.addLibrary(
		this.libraryName,
	    this.programmingLanguage,
		this.description,
		this.developedBy,
		this.firstRelease,
		this.latestRelease,
		);

		this.libraryName = '';
		this.programmingLanguage = '';
		this.description = '';
		this.developedBy = '';
		this.firstRelease = '';
		this.latestRelease = '';
	}

}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import BookList from '../Folders/booklist';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books: BookList[] = [];

	id: string = '';
	name: string = '';
	isbn: string = '';

	addBook(): void {
		this.books.push({
			id: this.id,
			name: this.name,
			isbn: this.isbn,
		});

		this.id = '';
		this.name = '';
		this.isbn = '';
	}

}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import BookList from '../Folders/booklist';
import { BookListService } from '../services/book-list/book-list.service';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  bookList = [] as BookList[];
book: any;
  constructor(private bookService:BookListService){
  this.bookList = this.bookService.getBook();
  }

	id: number = 0;
	name: string = '';
	isbn: string = '';

	addBook(): void {
		this.bookService.addBook(
			this.id,
			this.name,
			this.isbn,
		);

		this.id = 0;
		this.name = '';
		this.isbn = '';
	}

}

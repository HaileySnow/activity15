import { Injectable } from '@angular/core';
import BookList from '../../Folders/booklist';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  private book: BookList[] = [];

  constructor() { }

addBook (id: number, name: string, isbn: string): void{
        this.book.push({
        id:id,
        name:name,
        isbn: isbn,
        });
}
getBook(): BookList[]{
  return this.book;
}
}
import { Component } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css'],
})
export class GetBookComponent {
  books: Book[] = [];
  failed: boolean = false;

  title: string = '';

  constructor(private bookService: BookService) {}

  searchBookByTitle() {
    this.bookService.searchByTitle(this.title).subscribe({
      next: (response: Book[]) => {
        this.books = response;
        this.failed = false;
      },
      error: (error) => {
        console.error('Get error: ', error);
        this.failed = true;
      },
    });
    this.title = '';
    console.log(this.books);
    console.log('Failed: ' + this.failed);
  }
}

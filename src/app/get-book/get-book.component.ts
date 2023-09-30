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
  notFound: boolean = false;

  failed: boolean = false;
  errorCode: string = '';
  errorName: string = '';

  userInput: string = '';

  constructor(private bookService: BookService) {}

  searchBook() {
    this.bookService.searchForBooks(this.userInput).subscribe({
      next: (response: Book[]) => {
        this.books = response;

        this.books.length === 0
          ? (this.notFound = true)
          : (this.notFound = false);

        this.failed = false;

        console.log(this.books);
      },
      error: (responseError) => {
        console.error('Get error: ', responseError);
        this.failed = true;
        this.errorCode = responseError.status;
        this.errorName = responseError.error.error;
      },
    });
    this.userInput = '';
  }
}

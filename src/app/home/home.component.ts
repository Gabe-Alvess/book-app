import { Component, OnInit } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  notFound: boolean = false;

  failed: boolean = false;
  errorCode: string = '';
  errorName: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(): void {
    this.bookService.getBooks().subscribe({
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
  }
}

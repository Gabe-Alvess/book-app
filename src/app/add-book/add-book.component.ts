import { Component } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  newBook?: Book;
  failed: boolean = false;
  errorCode: string = '';
  errorName: string = '';

  book: Book = {
    imgURL: '',
    title: '',
    author: '',
    genres: '',
    description: '',
  };

  constructor(private bookService: BookService) {}
  onSubmit() {
    this.bookService.addBook(this.book).subscribe({
      next: (response: Book) => {
        this.newBook = response;
        this.failed = false;
      },
      error: (responseError) => {
        this.newBook = undefined;
        this.failed = true;
        console.error('Post error: ', responseError);
        this.errorCode = responseError.status;
        this.errorName = responseError.error.error;
      },
    });

    this.book = {
      imgURL: '',
      title: '',
      author: '',
      genres: '',
      description: '',
    };
  }
}

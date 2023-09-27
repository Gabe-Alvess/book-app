import { Component } from '@angular/core';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  public title: string = '';
  public author: string = '';
  public genres: string = '';
  public description: string = '';
  public imgURL: string = '';
  public addedBook: Object = '';

  constructor(private bookService: BookService) {}

  addNewBook() {
    this.bookService
      .addBook(
        this.title,
        this.author,
        this.genres,
        this.description,
        this.imgURL
      )
      .subscribe({
        next: (response: Object) => {
          this.addedBook = JSON.stringify(response);
        },
        error: (error) => {
          console.log('Post error: ', error);
        },
      });

    this.title = '';
    this.author = '';
    this.genres = '';
    this.description = '';
    this.imgURL = '';
  }
}

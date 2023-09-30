import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/Book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = `http://localhost:8080/books`;
  constructor(private http: HttpClient) {}

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.apiUrl}/add`, book);
  }

  searchForBooks(input: string) {
    return this.http.get<Book[]>(`${this.apiUrl}/search?userSearch=${input}`);
  }

  getBooks() {
    return this.http.get<Book[]>(`${this.apiUrl}/all`)
  }
}

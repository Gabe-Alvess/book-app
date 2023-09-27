import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  addBook(title: string,author: string,genres: string,description: string,imgURl: string): Observable<Object> {
    const body = {
      title: title,
      author: author,
      genres: genres,
      description: description,
      imgURL: imgURl,
    };

    let url = `http://localhost:8080/book`;

    return this.http.post(url, body);
  }
}

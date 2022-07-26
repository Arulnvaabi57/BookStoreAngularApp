import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})

export class BookService {
  baseUrl: string;
  book!: Book;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    const httpOptions = {
      headers: new HttpHeaders({
      })
    }
  }

  getData() {
    return this.http.get(this.baseUrl + 'book');  //https://localhost:44352/ webapi host url  
  }

  getById(isbn: number) {
    return this.http.get(this.baseUrl + 'book/' + isbn);
  }

  postData(book: Book): Observable<string> {
    return this.http.post<string>(this.baseUrl + 'book', book);
  }

  putData(book: Book) {
    return this.http.put<string>(this.baseUrl + 'book/' + book.isbn, book);
  }

  update(book: Book) {
    this.book = book;
  }
}
interface Book {
  isbn: number;
  name: string;
  authorName: string;
  publisherName: string;
  price: number;
  discount: number;
  language: string;
  publishedYear: number;
}

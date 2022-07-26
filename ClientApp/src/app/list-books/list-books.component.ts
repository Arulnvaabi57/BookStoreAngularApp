import { Component, Inject } from '@angular/core';
import { BookService } from '../Services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent {
  public books: Book[] = [];

  constructor(private BookService: BookService) {
    this.BookService.getData().subscribe((result: any) => {
      this.books = result;
    }, (error: any) => console.error(error))
  }
}

interface Book {
  isbn: number;
  name: string;
  authorName: string;
  publisherName: string;
  price: number;
  discount: string;
  language: string;
  publishedYear: number;
}

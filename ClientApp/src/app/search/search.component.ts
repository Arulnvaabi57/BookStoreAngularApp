import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-search-component',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  book!: Book;
  displayMessage: string = "";
  EventValue: any = "Save";

  constructor(private bookService: BookService, private router: Router){ }

  Search(event: any) {
    this.bookService.getById(event.target.value).subscribe((result: any) => {
      this.book = result;
    }, (error: any) => console.error(error))
    if (!this.book) {
      this.displayMessage = "The book is currently unavailable, Sorry for the inconvience."
    }
  }

  EditData(book: Book) {
    this.bookService.update(book);
    this.router.navigateByUrl('update');
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

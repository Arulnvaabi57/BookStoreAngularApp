import { Component } from '@angular/core';
import { BookService } from './Services/book.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private BookService: BookService) { }
  data: any;

  ngOnInit(): void {
  }
}


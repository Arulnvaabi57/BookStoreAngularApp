import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'update-add-component',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public book!: Book;

  constructor(private bookService: BookService) { }
  BookForm!: FormGroup;
  submitted = false;
  EventValue: any = "Update";

  ngOnInit(): void {

    this.BookForm = new FormGroup({
      bookIsbn: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      bookName: new FormControl("", [Validators.required]),
      authorName: new FormControl("", [Validators.required]),
      publisherName: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      discount: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
      language: new FormControl("", [Validators.required]),
      publishedYear: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$")]),
    });
    this.book = this.bookService.book;
    if (this.book) {
      this.BookForm.controls.bookIsbn.setValue(this.book.isbn);
      this.BookForm.controls.bookName.setValue(this.book.name);
      this.BookForm.controls.authorName.setValue(this.book.authorName);
      this.BookForm.controls.publisherName.setValue(this.book.publisherName);
      this.BookForm.controls.price.setValue(this.book.price);
      this.BookForm.controls.discount.setValue(this.book.discount);
      this.BookForm.controls.language.setValue(this.book.language);
      this.BookForm.controls.publishedYear.setValue(this.book.publishedYear);
    }
  }

  Update() {
    this.submitted = true;

    if (this.BookForm.invalid) {
      return;
    }
    var request: Book = {
      isbn: Number(this.BookForm.get("bookIsbn")?.value),
      name: this.BookForm.get("bookName")?.value,
      authorName: this.BookForm.get("authorName")?.value,
      discount: Number(this.BookForm.get("discount")?.value),
      language: this.BookForm.get("language")?.value,
      price: Number(this.BookForm.get("price")?.value),
      publishedYear: Number(this.BookForm.get("publishedYear")?.value),
      publisherName: this.BookForm.get("publisherName")?.value
    } as Book;

    this.bookService.putData(request).subscribe((result) => {
        window.alert("Updated successfully...")
        this.Reset();
    }, (error: any) => console.error(error));

  }

  Reset() {
    this.BookForm.reset();
    this.submitted = false;
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

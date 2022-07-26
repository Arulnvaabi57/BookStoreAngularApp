import { Component } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-component',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  public book!: Book;

  constructor(private bookService: BookService) { }
  BookForm!: FormGroup;
  submitted = false;
  EventValue: any = "Save";
  ResetValue: any = "Cancel";

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
    })
  }

  submit() {
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
      publisherName: this.BookForm.get("publisherName")?.value,
      publishedYear: Number(this.BookForm.get("publishedYear")?.value)
    } as Book;

    this.bookService.postData(request).subscribe((result) => {
        window.alert("Inserted successfully...")
        this.reset();
    }, (error: any) => console.error(error));
  }

  reset() {
    this.BookForm.reset();
    this.EventValue = "Save";
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

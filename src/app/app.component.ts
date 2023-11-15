import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { Book } from './book';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'final-frontend-web';
  stringsList: string[] = ['one', 'two', 'three'];

  books: any = [];

  libraries: any = [];

  bookForm = new FormGroup({
    name: new FormControl(''),
    library: new FormControl(''),
  });

  constructor(
    private bookService: BookService,
    private libraryService: LibraryService
  ) {
    this.bookForm = new FormGroup({
      name: new FormControl(''),
      library: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.books = this.bookService.getAllBooks();
    this.libraries = this.libraryService.getAllLibraries();
    console.log(this.books);
  }

  onSubmit() {
    let data = this.bookService.createBook(this.bookForm.value);

    console.log(data);

    console.log(this.bookForm.value);
  }
}

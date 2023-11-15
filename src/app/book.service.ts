import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiURL = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  getAllBooks() {
    console.log('GETTING BOOKS');
    try {
      let books: any = [];
      this.http.get(this.apiURL + '/all').subscribe((book) => {
        books.push(book);
      });
      return books;
    } catch (error) {
      console.log(error);
      return 'No books found';
    }
  }

  createBook(book: any) {
    try {
      return this.http.post(this.apiURL + '/save', book).subscribe();
    } catch (error) {
      console.log(error);
      return 'Book not created';
    }
  }
}

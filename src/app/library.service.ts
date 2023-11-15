import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private apiURL = 'http://localhost:8080/api/libraries';

  constructor(private http: HttpClient) {}

  getAllLibraries() {
    console.log('GETTING Libraries');
    try {
      let books: any = [];
      this.http.get(this.apiURL + '/all').subscribe((book) => {
        books.push(book);
      });
      return books;
    } catch (error) {
      console.log(error);
      return 'No libraries found';
    }
  }
}

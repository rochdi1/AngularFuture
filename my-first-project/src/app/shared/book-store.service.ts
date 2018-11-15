import { Injectable } from '@angular/core';
import { Book, Thumbnails } from '../shared/book';


@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  books: Book[];
  constructor() {
    this.books = [
    new Book(
      '9783864903571',
      'Angular',
      ['Johannes Hoppe', 'Danny Koppenhagen'],
      new Date(2017, 3, 1),
      'Grundlagen, fortgeschrittene Techniken und Best Practices mit TypeScript - ab  Angfular 4, inklusive NativeScript und Redux',
      5,
      [new Thumbnails('https://ng-buch.de/cover2.jpg', 'Buchcover')],
      'Mit Angular setzen Sie auf ein modernes und modulares...'
      ),
      new Book(
        '9783864901546',
        'AngularJs',
        ['Philipp Tarasiewics', 'Robin Böhm'],
        new Date(2014, 3, 29),
        'Eine praktische Einführung',
        3,
        [new Thumbnails('https://ng-buch.de/cover1.jpg', 'Buchcover')],
        'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojec'
        )
    ];
  }

  getAll() {
    return this.books;
  }

  getSingle(isbn) {
    return this.books.find(book => book.isbn === isbn);
  }
}

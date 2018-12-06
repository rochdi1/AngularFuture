import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { retry, map, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';
import { throwError } from 'rxjs';


@Injectable()
export class BookStoreService {
  private api = '/api';

  constructor(private http: HttpClient) {}
/*
  getAll(): Observable<Book[]> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books`)
      .map(raws => this.provideBooksFrom(raws));
      //   ^-- raws ist vom Typ BookRaw[]
 }

 provideBooksFrom(raws: BookRaw[]): Book[] {
  return raws.map(raw => new Book(
    raw.title,
    raw.subtitle,
    raw.isbn,
    raw.description,
    raw.rating
  ));
}
*/


  getAll(): Observable<Array<Book>> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks
          .map(rawBook => BookFactory.fromObject(rawBook)),
        ),
        catchError(this.errorHandler)
      );
  }


  getSingle(isbn: string): Observable<Book> {
    return this.http
      .get<BookRaw>(`${this.api}/books/${isbn}`)
      .pipe(
        retry(3),
        map(rawBook => BookFactory.fromObject(rawBook)),
        catchError(this.errorHandler)
      );
  }

  getAllSearch(searchTerm: string): Observable<Array<Book>> {
    return this.http
      .get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`)
      .pipe(
        retry(3),
        map(rawBooks => rawBooks
            .map(rawBook => BookFactory.fromObject(rawBook)),
        ),
        catchError(this.errorHandler)
      );
  }

  create(book: Book): Observable<any> {
    return this.http
      .post(`${this.api}/books`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(book: Book): Observable<any> {
    return this.http
      .put(`${this.api}/books/${book.isbn}`, book, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  remove(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/books/${isbn}`, { responseType: 'text' })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}

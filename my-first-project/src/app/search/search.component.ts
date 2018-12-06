import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { switchMap } from 'rxjs/operators/switchMap';
import {pipe} from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  foundBooks: Book = [];
  constructor(private bs: BookStoreService) {}
  // umser Ziel :
  @Output() bookSelected = new EventEmitter<Book>();
   keyup = new EventEmitter<string>();



  ngOnInit() {
    this.keyup
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
    )
    .subscribe(books => this.foundBooks = books);
  }

}

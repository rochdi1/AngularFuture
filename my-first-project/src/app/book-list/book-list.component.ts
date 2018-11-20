import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book, Thumbnails } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();


  constructor(private bss: BookStoreService ) {
    console.log('test');
   }

  ngOnInit() {
  this.bss.getAll().subscribe(b => this.books = b);
  // console.log(this.bss.getAll().subscribe(b => this.books = b));
  }

  showDetails(bookItem: Book) {
    this.showDetailsEvent.emit(bookItem);
  }

}

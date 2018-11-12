import { Component } from '@angular/core';
import { Book } from './shared/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listOn = true;
  detailsOn = false;
  book: Book;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(book: Book) {
    this.listOn = false;
     this.detailsOn = true;
     this.book = book;
   }
 }

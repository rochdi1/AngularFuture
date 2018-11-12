import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent {

  constructor() {

    console.log(this.book);
  }

  @Input() book: Book;

  @Output() showListEvent = new EventEmitter<any>();


   // tslint:disable-next-line:max-line-length
   // Wenn nur eine ganzzahlige Zahl zwischen 0 und 232-1 (inklusive) dem Array-Konstruktor als Argument gegeben wird, ergibt der Rückgabewert ein neues Javascript-Array mit der Länge der angegebenen Nummer. Wenn das Argument irgendeine andere Nummer ist (also kein Integer-Wert), tritt die Fehlermeldung RangeError auf.

  getRating(num: number) {
    return new Array(num);
  }

  showBookList() {
    this.showListEvent.emit();
  }
}

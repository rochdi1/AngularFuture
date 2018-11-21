import { BookStoreService } from './../shared/book-store.service';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styles: []
})
export class BookDetailsComponent implements OnInit {

  book: Book = BookFactory.empty();

  constructor(
    private bs: BookStoreService,
     private route: ActivatedRoute,
     private router: Router
      ) {
        console.log('details:');
      }

  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['isbn']).subscribe(b => this.book = b);
  }
/*
  @Input() book: Book;

  @Output() showListEvent = new EventEmitter<any>();
*/


   // tslint:disable-next-line:max-line-length
   // Wenn nur eine ganzzahlige Zahl zwischen 0 und 232-1 (inklusive) dem Array-Konstruktor als Argument gegeben wird, ergibt der Rückgabewert ein neues Javascript-Array mit der Länge der angegebenen Nummer. Wenn das Argument irgendeine andere Nummer ist (also kein Integer-Wert), tritt die Fehlermeldung RangeError auf.

  getRating(num: number) {
    return new Array(num);
  }
/*
  showBookList() {
    this.showListEvent.emit();
  }
*/

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn).subscribe(res => this.router.navigate(['../'], { relativeTo: this.route }));
    }
  }
}

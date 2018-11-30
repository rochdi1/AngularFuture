import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  // umser Ziel :
  @Output() bookSelected = new EventEmitter<Book>();
  keyup = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.keyup.subscribe(value => console.log(value));
  }

}

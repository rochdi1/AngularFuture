import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <a routerLink="/books" class="ui red button">
    BuchListe ansehen
    <i class="right arrow icon"></i>
    </a>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

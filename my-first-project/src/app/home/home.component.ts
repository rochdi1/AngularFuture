import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  template: `
    <div class="ui container two column grid">
      <div class="ui container column">
              <h1>Home</h1>
              <p>Das ist der BookMonkey</p>
              <a routerLink="/books" class="ui red button">
              BuchListe ansehen
              <i class="right arrow icon"></i>
              </a>
              <app-search></app-search>
      </div>
    </div>

  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

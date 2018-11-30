import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookStoreService } from './shared/book-store.service';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { StreamService } from './stream.service';
import { TestComponent } from './test/test.component';
import { APICallService } from './apicall.service';


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailsComponent,
    HomeComponent,
    SearchComponent,
    TestComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookStoreService, StreamService, APICallService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

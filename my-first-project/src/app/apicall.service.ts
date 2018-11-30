import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Book } from './shared/book';



@Injectable({
  providedIn: 'root'
})
export class APICallService {

  constructor(private http: HttpClient) { }



  getPost() {
  //  return this.http.get('http://book/api/books');
  return this.http.get('api/books');
 // return true;
  }

}

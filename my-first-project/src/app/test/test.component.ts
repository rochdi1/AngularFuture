import { StreamService } from '../stream.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APICallService } from '../apicall.service';
import { Book } from '../shared/book';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(protected MyStream: StreamService, private call: APICallService) { }
  
  interface myData {
    apibooks: Book[];
  }

  ngOnInit() {
  }
  LoadData() {
   this.MyStream.createDataStream().subscribe(
     next => { console.log(next); },
     error => { console.log(error); },
     () => { console.log('Es ist fertig'); }
   );
  }

  callApi() {
   return this.call.getPost().subscribe(
      next => { console.log(next); },
      error => { console.log(error); },
      () => { console.log('Done'); }
    );
  }








}

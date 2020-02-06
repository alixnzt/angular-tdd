import { Component, OnInit } from '@angular/core';
import {Author, AuthorsService} from './authors.service';
import {DocumentCollection} from 'ngx-jsonapi';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  public authors: DocumentCollection<Author>;

  public constructor(private authorsService: AuthorsService) {

    const authors = authorsService.all({
      // tslint:disable-next-line:no-shadowed-variable
    }).subscribe(authors => (this.authors = authors));
  }

  ngOnInit() {
  }
}

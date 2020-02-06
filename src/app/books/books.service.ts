import { Injectable } from '@angular/core';
import {DocumentCollection, DocumentResource, Resource} from 'ngx-jsonapi';
import {Author} from '../authors/authors.service';
import {Photo} from '../photos/photos.service';

export class Book extends Resource {
  public attributes = {
    date_published: '',
    title: '',
    created_at: '',
    updated_at: ''
  };

  public relationships = {
    author: new DocumentResource<Author>(),
    photos: new DocumentCollection<Photo>()
  };
}

@Injectable()
export class BooksService {
  public resource = Book;
  public type = 'books';
}

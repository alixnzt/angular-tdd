import { Injectable } from '@angular/core';
import { Service, Resource, Autoregister } from 'ngx-jsonapi';

export class Photo extends Resource {
  public attributes = {
    title: '',
    uri: '',
    imageable_id: '',
    created_at: '',
    updated_at: ''
  };
}

@Injectable()
export class PhotosService extends Service<Photo>{
}

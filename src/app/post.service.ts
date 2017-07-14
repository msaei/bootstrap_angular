import { Injectable } from '@angular/core';

import { Post } from './database/post';
import { POSTS } from './database/mock-posts';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

}

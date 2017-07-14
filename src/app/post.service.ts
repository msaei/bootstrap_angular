import { Injectable } from '@angular/core';

import { Post } from './database/post';
import { POSTS } from './database/mock-posts';
import { Tutorial } from './database/tutorial';
import { TUTORIALS } from './database/mock-tutorials';

@Injectable()
export class PostService {

  constructor() { }

  getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  getTutorials(): Promise<Tutorial[]> {
    return Promise.resolve(TUTORIALS);
  }

}

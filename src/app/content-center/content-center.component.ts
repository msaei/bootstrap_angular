import { Component, OnInit } from '@angular/core';

import { Post } from '../database/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-content-center',
  templateUrl: './content-center.component.html',
  styleUrls: ['./content-center.component.css']
})
export class ContentCenterComponent implements OnInit {
  
  public posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPosts().then(posts => this.posts = posts);
  }

}

import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../database/tutorial';
import { PostService } from '../post.service';

@Component({
  selector: 'app-content-left',
  templateUrl: './content-left.component.html',
  styleUrls: ['./content-left.component.css']
})
export class ContentLeftComponent implements OnInit {
  public details: Tutorial[] ;
  

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getTutorials();
  }

  getTutorials() {
    this.postService.getTutorials().then(tutorials => this.details = tutorials);
  }

}

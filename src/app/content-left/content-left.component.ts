import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-left',
  templateUrl: './content-left.component.html',
  styleUrls: ['./content-left.component.css']
})
export class ContentLeftComponent implements OnInit {
  public details: any[] = [
    {
      title: 'Learn Git',
      desc: 'CodeAcademy Course to learn basic of git.',
      url: 'https://www.codecademy.com/learn/learn-git'
    },
    {
      title: 'Web Design Basics',
      desc: 'CodeAcademy Course to learn basic of web designing.',
      url: 'https://www.codecademy.com/learn/make-a-website'
    },
    {
      title: 'Bootstrap Youtube Course',
      desc: 'Series of Youtube Bootstrap tutorials.',
      url: 'https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBPw1sFodruZUPheWVKchlM'
    }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}

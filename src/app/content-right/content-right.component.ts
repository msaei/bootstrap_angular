import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrls: ['./content-right.component.css']
})
export class ContentRightComponent implements OnInit {
  public details: any[] = [
    {
      title: 'slack',
      desc: 'slack is a chat app with lots of feature that makes it usefull for teamwork.',
      url: 'https://slack.com/'
    },
    {
      title: 'slack',
      desc: 'slack is a chat app with lots of feature that makes it usefull for teamwork.',
      url: 'https://slack.com/'
    },
    {
      title: 'slack',
      desc: 'slack is a chat app with lots of feature that makes it usefull for teamwork.',
      url: 'https://slack.com/'
    },
  ]
  

  constructor() { }

  ngOnInit() {
  }

}

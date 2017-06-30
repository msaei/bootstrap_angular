import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public copyright: string = "2017 Mahdi Saeikhalili";
  public links: any[]= [
    {title:'github', url: '#', icon: 'fa fa-github-square fa-3x'},
    {title:'linkedin', url: '#', icon: 'fa fa-linkedin-square fa-3x'},
    {title:'twitter', url: '#', icon: 'fa fa-twitter-square fa-3x'}
  ]
  constructor() { }

  ngOnInit() {
  }

}

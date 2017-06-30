import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public brand: any = { title: "MyCodeDiary", url: "#" };
  public links: any[] = [
    { title: 'Home', url: '#'},
    { title: 'Tutorials', url: '#'},
    { title: 'Cheat Sheets', url: '#'},
    { title: 'Tools', url: '#'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

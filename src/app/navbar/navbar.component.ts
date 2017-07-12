import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public brand: any = { title: "MyCodeDiary", url: '/home' };
  public links: any[] = [
    { title: 'Home', url: '/home'},
    { title: 'About', url: '/about'},
    { title: 'Cheat Sheets', url: '/cheetsheets'},
    { title: 'Contact', url: '/contact'},
    { title: 'Admin', url: '/admin'},
    { title: 'Login', url: '/login'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

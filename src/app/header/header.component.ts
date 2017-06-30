import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public title: string = "My Code Diary";
  public desc: string=`I put everything I learned during my apprenticeship at Checkmate digital everyday here,
   including usefull links , softwares and tools and tutorial resources.`;
 
  constructor() { }

  ngOnInit() {
  }

}

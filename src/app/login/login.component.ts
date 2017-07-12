import { Component, OnInit } from '@angular/core';
import { ActivateGuard } from '../activate-guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public activateGuard: ActivateGuard) { }

  ngOnInit() {
  }

 toggleActivation(can: boolean): void {
  this.activateGuard.setActivation(can);
 }
}

import { Component, OnInit } from '@angular/core';
import { ActivateGuard } from '../activate-guard';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public activateGuard: ActivateGuard, private _us: UserService) { }

  ngOnInit() {
  }

 toggleActivation(can: boolean): void {
  this.activateGuard.setActivation(can);
 }

 public signInGoogle(): void {
     this._us.signInGoogle((error: any, success: any) => {
       console.log(error);
       console.log(success);
     });
   }
}

import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ActivateGuard implements CanActivate {

    private can: boolean = true;

    canActivate(){
        if (!this.can) {
            alert('Activation Blocked please login first');
            return false;
        }
        return true;
    }

}
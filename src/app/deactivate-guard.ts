import { ContactComponent } from './contact/contact.component';
import { CanDeactivate } from '@angular/router';

export class DeactivateGuard implements CanDeactivate<ContactComponent> {

    canDeactivate(component: ContactComponent) {
        let can: boolean  = component.letLeave;
        console.log('from deactivate', can);
        if (!can) {
            alert('you cant leave me!!!');
            return false;
        }
        return true;

    }
}